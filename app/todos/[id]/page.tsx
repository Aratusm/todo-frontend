import Link from "next/link";
import { notFound } from "next/navigation";
import { getTodoDetail } from "@/lib/todos";

export default async function TodoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await getTodoDetail(id);

  if (!todo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:py-16">
      <article className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link
          href="/"
          className="text-sm font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        >
          ← Kembali ke daftar tugas
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium text-slate-500">
            Dibuat pada{" "}
            <time dateTime={todo.createdAt}>
              {new Intl.DateTimeFormat("id-ID", {
                dateStyle: "long",
                timeZone: "UTC",
              }).format(new Date(`${todo.createdAt}T00:00:00Z`))}
            </time>
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {todo.title}
          </h1>
          <p className="mt-4 leading-7 text-slate-600">{todo.description}</p>
          <p
            className={`mt-6 inline-flex rounded-full px-3 py-1.5 text-sm font-medium ${
              todo.completed
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {todo.completed ? "Selesai" : "Belum selesai"}
          </p>
        </div>
      </article>
    </main>
  );
}
