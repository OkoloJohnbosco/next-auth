import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
// bg-[radial-gradient(ellipse_at_top, _var(--tw-gradient-stops))]
export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-center bg-blue-500 from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            fonts.className
          )}
        >
          🔐 Next Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <LoginButton>
          <Button size="lg" variant="secondary">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
