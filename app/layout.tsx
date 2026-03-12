// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider"; // Import เข้ามา

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Full-stack & AI Developer",
  description: "Portfolio of a Computer Engineering student at RMUTP specializing in Full-stack, AI, and Data Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ใส่ suppressHydrationWarning เพื่อป้องกัน Error ตอนโหลด ธีม มืด/สว่าง
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>        {/* ครอบ ThemeProvider ไว้ชั้นนอกสุด */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar /> 
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}