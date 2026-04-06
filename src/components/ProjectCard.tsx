import Link from "next/link";
import type { Project } from "@/lib/notion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {/* Badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
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
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-gray-900 transition-colors group-hover:text-accent-600">
        {project.title}
      </h3>

      {/* Situation preview */}
      {project.situation && (
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {project.situation}
        </p>
      )}

      {/* Date */}
      {project.date && (
        <p className="mt-auto pt-4 text-xs text-gray-400">{project.date}</p>
      )}
    </Link>
  );
}
