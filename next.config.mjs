/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'lovely-flamingo-139.convex.cloud'
        },
        {
            protocol: 'https',
            hostname: 'determined-mallard-653.convex.cloud',
        },
        {
            protocol: 'https',
            hostname:'img.clerk.com'
        }
    ]
    }
};

export default nextConfig;
