import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getProjects } from "@/lib/notion";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  if (!project) return { title: "프로젝트를 찾을 수 없습니다" };
  return {
    title: `${project.title} | 안효준 포트폴리오`,
    description: project.situation,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);
  if (!project) notFound();

  return (
    <div className="container-wide py-16 lg:py-24">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors hover:text-accent-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        목록으로 돌아가기
      </Link>

      {/* Header */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.category && (
            <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700">
              {project.category}
            </span>
          )}
          {project.aiTool && (
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
              AI · {project.aiTool}
            </span>
          )}
          {project.date && (
            <span className="text-sm text-gray-400">{project.date}</span>
          )}
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {project.title}
        </h1>
      </div>

      {/* Content sections */}
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          {project.situation && (
            <Section title="상황" content={project.situation} />
          )}
          {project.content && (
            <Section title="내용" content={project.content} />
          )}
          {project.result && (
            <Section title="결과" content={project.result} />
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-gray-900">프로젝트 정보</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {project.date && (
                <div>
                  <dt className="text-gray-500">날짜</dt>
                  <dd className="font-medium text-gray-900">{project.date}</dd>
                </div>
              )}
              {project.category && (
                <div>
                  <dt className="text-gray-500">카테고리</dt>
                  <dd className="font-medium text-gray-900">
                    {project.category}
                  </dd>
                </div>
              )}
              {project.aiTool && (
                <div>
                  <dt className="text-gray-500">AI 도구</dt>
                  <dd className="font-medium text-gray-900">
                    {project.aiTool}
                  </dd>
                </div>
              )}
            </dl>

            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
              >
                LinkedIn에서 보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-gray-900">
        {title}
      </h2>
      <p className="mt-3 whitespace-pre-wrap text-base leading-relaxed text-gray-600">
        {content}
      </p>
    </div>
  );
}
