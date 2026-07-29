import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: site.projects.intro,
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
