const path = require("path");

// Load the .env file for local development
// .env.development.local by default
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.development.local"),
});

let backendUrl, imageDomain;
if (process.env.WPGRAPHQL_URL === undefined) {
  backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
} else {
  backendUrl = process.env.WPGRAPHQL_URL;
}
if (process.env.IMAGE_DOMAIN === undefined) {
  imageDomain = process.env.WPGRAPHQL_URL || process.env.PANTHEON_CMS_ENDPOINT;
} else {
  imageDomain = process.env.IMAGE_DOMAIN;
}
// remove trailing slash if it exists
imageDomain = imageDomain.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendUrl: backendUrl,
    imageUrl: `https://${imageDomain}`,
  },
  images: {
    domains: [imageDomain],
  },
};

module.exports = nextConfig;

