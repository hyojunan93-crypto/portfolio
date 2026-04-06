"use client";

import { useState } from "react";
import type { Project } from "@/lib/notion";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
  categories: string[];
  aiTools: string[];
}

export default function ProjectFilter({ projects, categories, aiTools }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedAiTool, setSelectedAiTool] = useState("전체");

  const filtered = projects.filter((p) => {
    const catMatch =
      selectedCategory === "전체" || p.category === selectedCategory;
    const aiMatch =
      selectedAiTool === "전체" || p.aiTool === selectedAiTool;
    return catMatch && aiMatch;
  });

  return (
    <>
      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-gray-700">카테고리</span>
        {["전체", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-accent-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}

        <span className="ml-4 text-sm font-medium text-gray-700">AI 도구</span>
        {["전체", ...aiTools].map((tool) => (
          <button
            key={tool}
            onClick={() => setSelectedAiTool(tool)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedAiTool === tool
                ? "bg-violet-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-gray-400">
          해당 조건에 맞는 프로젝트가 없습니다.
        </p>
      )}
    </>
  );
}
