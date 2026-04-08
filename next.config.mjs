import nextra from 'nextra'

const withNextra = nextra({
  search: {
    codeblocks: false
  }
})

const ALLOWED_SVG_REGEX = /components[\\/]icons[\\/].+\.svg$/

export default withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg'),
    )

    fileLoaderRule.exclude = ALLOWED_SVG_REGEX

    config.module.rules.push({
      test: ALLOWED_SVG_REGEX,
      use: ['@svgr/webpack'],
    })
    return config
  }
})
