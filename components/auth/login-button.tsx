"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

function LoginButton({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) {
  const router = useRouter()

  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED");
    router.push("/auth/login")
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer block">
      {children}
    </span>
  );
}

export default LoginButton;
