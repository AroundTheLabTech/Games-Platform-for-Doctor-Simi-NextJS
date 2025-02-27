/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Ruta en tu aplicación
          destination: 'https://gametropolis-back-api-214230919331.us-central1.run.app/:path*', // URL del backend
          // destination: 'http://localhost:8080/:path*', // URL del backend
        },
      ];
    },
  };
  
  export default nextConfig;
  