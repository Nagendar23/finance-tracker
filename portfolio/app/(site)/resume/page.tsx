import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Resume</h1>
          <p className="text-muted-foreground mt-1">{siteConfig.name} — {siteConfig.role}</p>
        </div>
        {siteConfig.resumeUrl && (
          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            className="rounded bg-foreground text-background px-4 py-2 text-sm"
          >
            Download PDF
          </Link>
        )}
      </div>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>React, Next.js, TypeScript</li>
            <li>HTML, CSS, Tailwind</li>
            <li>REST APIs, basic Node</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-sm text-muted-foreground mt-2">See /projects for detailed case studies.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="text-sm mt-2">B.E/B.Tech — Your College, Year</p>
        </section>
      </div>
    </section>
  );
}