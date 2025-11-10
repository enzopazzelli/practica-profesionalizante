/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Desactivado temporalmente para Leaflet
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
};

export default nextConfig;
