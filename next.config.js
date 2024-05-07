/**
 * @type {import('next').NextConfig}
 */



const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: {
    codeblocks: false
  },
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/lgd-web" : "";

const path = require('node:path');
const sep = path.sep === "/" ? "/" : "\\\\"

const ALLOWED_SVG_REGEX = new RegExp(`${sep}components${sep}icons${sep}.+\\.svg$`)

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: assetPrefix,
  basePath: assetPrefix,
  output: "export",
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.(".svg"),
    )

    fileLoaderRule.exclude = ALLOWED_SVG_REGEX

    config.module.rules.push({
      test: ALLOWED_SVG_REGEX,
      use: ["@svgr/webpack"],
    })
    return config
  }
}

module.exports = withNextra(nextConfig)