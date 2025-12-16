import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default withNextra(config)
