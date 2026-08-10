import type { APIRoute } from "astro";

const routes = [
  "/",
  "/work/dwt-enterprise-ai",
  "/work/crewverify",
  "/work/student-signal-copilot",
  "/work/swift-omnichannel",
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://kimberly-huang.vercel.app");
  const urls = routes
    .map((route) => `  <url>\n    <loc>${new URL(route, origin)}</loc>\n    <lastmod>2026-08-10</lastmod>\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
