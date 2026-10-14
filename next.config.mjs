/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Villa photos are served from Sanity's image CDN
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};
export default nextConfig;
