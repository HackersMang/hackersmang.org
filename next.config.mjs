// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'sessionize.com',
          port: '',
          pathname: '/image/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: "/cofc",
          destination: "https://github.com/HackerspaceMangaluru/code-of-conduct/blob/main/coc.md",
          permanent: true,
        },
      ];
    },
};

export default nextConfig;

