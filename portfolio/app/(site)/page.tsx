import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
          <h1 className="text-4xl font-bold tracking-tight">Hi, I’m {siteConfig.name}</h1>
          <p className="text-base text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex gap-3">
            <Link href="/projects"><Button>View Projects</Button></Link>
            <Link href={siteConfig.resumeUrl || "/resume"}><Button variant="outline">My Resume</Button></Link>
          </div>
        </div>
        <div className="justify-self-center">
          <Image
            src="/hero.jpg"
            alt="Portrait"
            width={320}
            height={320}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}