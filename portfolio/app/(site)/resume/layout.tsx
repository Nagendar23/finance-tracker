import type { Metadata } from "next";
import SiteSharedLayout from "../_layout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Resume — ${siteConfig.name}`,
  description: `${siteConfig.name}'s resume`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteSharedLayout>{children}</SiteSharedLayout>;
}