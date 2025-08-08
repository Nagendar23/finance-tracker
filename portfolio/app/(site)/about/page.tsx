import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p>
        I’m {siteConfig.name}, a {siteConfig.role} based in {siteConfig.location}. I enjoy
        building responsive, accessible interfaces in React and Next.js and care about
        performance and clean design.
      </p>
      <p>
        Outside of work, I tinker with side projects and keep learning modern web
        tooling.
      </p>
    </section>
  );
}