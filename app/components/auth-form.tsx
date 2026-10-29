"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Form siap digunakan, tetapi autentikasi belum terhubung ke backend.",
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12 text-slate-900">
      <section
        aria-labelledby="auth-title"
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
      >
        <header className="mb-6 border-b border-slate-100 pb-4 text-center">
          <h1 id="auth-title" className="text-2xl font-bold">
            {isRegister ? "Register" : "Login"}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {isRegister ? "Buat akun baru" : "Masuk ke akun Anda"}
          </p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegister && (
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Nama Lengkap:
              </label>
              <input
                autoComplete="name"
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                id="name"
                name="name"
                placeholder="Masukkan nama"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              {isRegister ? "Email:" : "Email / Username:"}
            </label>
            <input
              autoComplete={isRegister ? "email" : "username"}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              id="email"
              name="email"
              placeholder={isRegister ? "Masukkan email" : "Masukkan email"}
              required
              type={isRegister ? "email" : "text"}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Password:
            </label>
            <input
              autoComplete={isRegister ? "new-password" : "current-password"}
              className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              id="password"
              name="password"
              placeholder="Masukkan password"
              required
              type="password"
            />
          </div>

          {isRegister && (
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Konfirmasi Password:
              </label>
              <input
                autoComplete="new-password"
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Ulangi password"
                required
                type="password"
              />
            </div>
          )}

          <button
            className="w-full rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            type="submit"
          >
            {isRegister ? "Register" : "Login"}
          </button>
          {notice && (
            <p aria-live="polite" className="text-sm text-amber-700" role="status">
              {notice}
            </p>
          )}
        </form>

        <p className="mt-6 border-t border-slate-100 pt-4 text-center text-sm text-slate-600">
          {isRegister ? "Sudah punya akun? " : "Belum punya akun? "}
          <Link
            className="font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href={isRegister ? "/login" : "/register"}
          >
            {isRegister ? "Login di sini" : "Daftar di sini"}
          </Link>
        </p>
      </section>
    </main>
  );
}
