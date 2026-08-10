import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
if (!existsSync(dist)) throw new Error("Build output is missing. Run the site build first.");

const htmlFiles = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (extname(entry.name) === ".html") htmlFiles.push(path);
  }
};
walk(dist);

const forbidden = /sponsor|sponsorship|visa|immigration/i;
const broken = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  if (forbidden.test(html)) throw new Error(`Forbidden topic found in ${file}`);
  if (!html.includes('property="og:image"')) throw new Error(`Open Graph image missing in ${file}`);
  if (!html.includes('rel="canonical"')) throw new Error(`Canonical URL missing in ${file}`);

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathname = href.split("#")[0].split("?")[0];
    if (!pathname || pathname === "/") continue;
    if (pathname.includes(".")) {
      if (!existsSync(join(dist, pathname.slice(1)))) broken.push(`${file}: ${href}`);
      continue;
    }
    if (!existsSync(join(dist, pathname.slice(1), "index.html"))) broken.push(`${file}: ${href}`);
  }
}

if (broken.length) throw new Error(`Broken internal links:\n${broken.join("\n")}`);
console.log(`Validated ${htmlFiles.length} HTML pages: metadata, internal links and content guard passed.`);
