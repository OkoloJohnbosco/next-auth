import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function AuthLogin() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-center bg-blue-500 from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            fonts.className
          )}
        >
          Login Page
        </h1>
      
      </div>
    </main>
  );
}
