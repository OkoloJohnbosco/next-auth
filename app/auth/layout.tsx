import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import React from "react";

const fonts = DM_Sans({
    subsets: ["latin"],
    weight: ["600"],
  });
  
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={cn("flex min-h-screen h-full flex-col items-center justify-center bg-blue-500 from-sky-400 to-blue-800", fonts.className)}>
      {children}
    </main>
  );
}

export default AuthLayout;
