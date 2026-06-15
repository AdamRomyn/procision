import type { NextConfig } from "next";

/* GitHub Pages serves a project site under a subpath (…/procision), so assets
   must be prefixed with it. The CI workflow sets PAGES_BASE_PATH=/procision;
   locally it's empty so `npm run dev` still serves from the root. */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  /* Static export: the whole site builds to plain HTML/JS/CSS in `out/`, so it
     can be hosted on any static host (GitHub Pages, Cloudflare Pages, Surge…).
     Works because the app has no server-only features (no API routes, server
     actions, live data fetching, or middleware). */
  output: "export",
  /* image optimization needs a server, so disable it for export — fine here
     since the site uses plain <img> tags, not next/image. */
  images: { unoptimized: true },
  basePath,
  /* emit each route as a folder/index.html so it resolves on any static host */
  trailingSlash: true,
};

export default nextConfig;
