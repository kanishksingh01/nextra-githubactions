import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const config = {
  basePath: '/nextra-githubactions',
  assetPrefix: '/nextra-githubactions',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default withNextra(config)
