import { NextRequest } from "next/server";

export function GET(_req: NextRequest) {
  const content = `User-agent: *\nAllow: /\nSitemap: ${process.env.SITE_URL || "https://your-domain.com"}/sitemap.xml`;
  return new Response(content, { headers: { "content-type": "text/plain" } });
}