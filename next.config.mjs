import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/ // enables .mdx pages in /app
});

/** @type {import('next').NextConfig} */
const base = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};

export default withMDX(base);
