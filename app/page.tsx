import Link from "next/link";
import { getTodos } from "@/lib/todos";

export default async function Home() {
  const todos = await getTodos();
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <nav
            aria-label="Autentikasi"
            className="mb-8 flex justify-end gap-3"
          >
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Register
            </Link>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Todo List
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Daftar tugas belajar
          </h1>
          <p className="mt-3 text-slate-600">
            {completedCount} dari {todos.length} tugas sudah selesai.
          </p>
        </header>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link
                href={`/todos/${todo.id}`}
                className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <span
                  aria-label={todo.completed ? "Selesai" : "Belum selesai"}
                  className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                    todo.completed
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-300 text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span
                      className={`font-semibold ${
                        todo.completed ? "text-slate-500 line-through" : ""
                      }`}
                    >
                      {todo.title}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        todo.completed
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {todo.completed ? "Selesai" : "Belum selesai"}
                    </span>
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">
                    {todo.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="pt-0.5 text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
