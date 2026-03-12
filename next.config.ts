import type { NextConfig } from "next";

const nextConfig = {
  // output: 'export',      // สำคัญมาก: เพื่อ Gen ไฟล์เป็น HTML/CSS/JS ปกติ
  images: {
    unoptimized: true,   // Shared Hosting ไม่รองรับ Image Optimization ของ Next.js
  },
};
export default nextConfig;
