import type { Metadata } from "next";
import { AuthForm } from "@/app/components/auth-form";

export const metadata: Metadata = {
  title: "Register | Todo List",
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
