'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
 return (
    <html lang="en">
      <div className="bg-[#04041e] min-h-screen">
      <body>
        <AnimatePresence mode="wait">
               <motion.div
  key={path}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ 
    duration: 0.4,
    ease: [0.43, 0.13, 0.23, 0.96]
  }}
  style={{ backgroundColor: '#04041e' }}
  className="min-h-screen"
>
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
      </div>
    </html>
  );
}