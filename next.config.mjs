/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https', 
                hostname: "imgsrv.crunchyroll.com"
            }
        ]
    }, 
    reactStrictMode: true,
};

export default nextConfig;
