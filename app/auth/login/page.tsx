import LoginButton from "@/components/auth/login-button";
import LoginForm from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function AuthLogin() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
