"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const path = usePathname();

  return (
    <div className="min-h-screen">
    <motion.div
      key={path}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0 // No delay
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
    </div>
  );
}