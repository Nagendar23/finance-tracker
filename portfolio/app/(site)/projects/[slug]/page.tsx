import { notFound } from "next/navigation";
import Link from "next/link";

const projects = new Map(
  [
    {
      slug: "project-one",
      title: "Project One",
      summary: "Short summary of the project and your role.",
      content:
        "Describe the problem, constraints, your approach, tech stack, and measurable results.",
    },
    {
      slug: "project-two",
      title: "Project Two",
      summary: "Short summary of the project and your role.",
      content:
        "Describe the problem, constraints, your approach, tech stack, and measurable results.",
    },
  ].map((p) => [p.slug, p])
);

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.get(slug);
  if (!project) return notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/projects" className="text-sm text-muted-foreground">← Back to projects</Link>
      <h1 className="text-3xl font-bold mt-3">{project.title}</h1>
      <p className="text-base text-muted-foreground mt-2">{project.summary}</p>
      <div className="prose dark:prose-invert mt-6">
        <p>{project.content}</p>
      </div>
    </section>
  );
}