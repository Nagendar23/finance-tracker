import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function SiteSharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold">
            {siteConfig.name}
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex gap-4">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}