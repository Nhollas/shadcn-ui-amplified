/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@/app/components/ui", "@/app/features/flags"],
  },
}

export default nextConfig
