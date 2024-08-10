/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@/app/components/ui"],
  },
}

export default nextConfig
