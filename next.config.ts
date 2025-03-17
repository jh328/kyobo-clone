/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["next-auth"], // ✅ NextAuth 모듈 빌드 문제 해결
};

export default nextConfig;
