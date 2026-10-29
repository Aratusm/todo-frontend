import type { Metadata } from "next";
import { AuthForm } from "@/app/components/auth-form";

export const metadata: Metadata = {
  title: "Login | Todo List",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
