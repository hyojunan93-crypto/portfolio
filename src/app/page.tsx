import { getProjects } from "@/lib/notion";
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
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container-wide py-24 lg:py-32">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-600">
            Portfolio
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            안효준
          </h1>
          <p className="mt-2 font-display text-xl font-medium text-gray-500 sm:text-2xl">
            기획자
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
            사용자 중심의 서비스를 기획하고, AI 도구를 활용하여 문제를 해결합니다.
            데이터 기반의 의사결정과 효율적인 협업을 지향합니다.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20">
        <div className="container-wide py-16 lg:py-24">
          <h2 className="font-display text-2xl font-bold text-gray-900">
            프로젝트
          </h2>
          <p className="mt-2 mb-10 text-sm text-gray-500">
            노션 DB에서 가져온 작업 목록입니다. 카테고리와 AI 도구로 필터링할
            수 있습니다.
          </p>

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
