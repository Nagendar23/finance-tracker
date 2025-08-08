import SiteSharedLayout from "./_layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteSharedLayout>{children}</SiteSharedLayout>;
}