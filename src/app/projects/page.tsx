import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: site.projects.intro,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title: `Projects · ${site.name}`,
    description: site.projects.intro,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 627,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects · ${site.name}`,
    description: site.projects.intro,
    images: [site.ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
