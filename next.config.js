/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/AGNmyxZbNOQ_gzuEjwYbQzCWmaRD4EI5Dom9E2VxJM6Uhg=s96-c',
      },
    ],
  },
};

module.exports = nextConfig;