import Link from "next/link";

const projects = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "Short summary of the project and your role.",
    tags: ["React", "Next.js"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "Short summary of the project and your role.",
    tags: ["TypeScript", "UI"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block rounded-lg border p-4 hover:bg-accent"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{p.summary}</p>
            <div className="mt-3 flex gap-2 text-xs text-muted-foreground">
              {p.tags.map((t) => (
                <span className="rounded border px-2 py-0.5" key={t}>{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}