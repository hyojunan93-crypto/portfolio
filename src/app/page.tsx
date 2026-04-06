import { getProjects } from "@/lib/notion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectFilter from "@/components/ProjectFilter";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();

  const categories = [
    ...new Set(projects.map((p) => p.category).filter(Boolean)),
  ];
  const aiTools = [
    ...new Set(projects.map((p) => p.aiTool).filter(Boolean)),
  ];

  return (
    <>
      <Hero />
      <About />
      <Experience />

      <section id="projects" className="scroll-mt-20 bg-white">
        <div className="container-wide py-20 lg:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-600">
              Projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              작업 기록
            </h2>
            <p className="mt-4 text-base text-gray-600">
              실무에서 수행한 기획·PM 작업을 기록합니다. 카테고리와 AI 도구로
              필터링할 수 있습니다.
            </p>
          </div>

          <ProjectFilter
            projects={projects}
            categories={categories}
            aiTools={aiTools}
          />
        </div>
      </section>
    </>
  );
}
