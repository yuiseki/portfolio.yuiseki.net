/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "development" ? "" : process.env.BASE_PATH,
  env: {
    scrapboxProject: process.env.SCRAPBOX_PROJECT,
    siteName: process.env.SITE_NAME,
    siteOrigin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.SITE_ORIGIN,
    basePath:
      process.env.NODE_ENV === "development" ? "" : process.env.BASE_PATH,
  },
};

module.exports = nextConfig;
