"use client";

import { useState } from "react";
import { linkedinPosts, type LinkedInPost } from "@/data/linkedinPosts";

function formatDate(d: string) {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function PostCard({ post }: { post: LinkedInPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-56 w-80 flex-shrink-0 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg sm:w-96"
    >
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0A66C2] text-white">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            <span className="text-xs font-semibold text-gray-500">
              LinkedIn
            </span>
          </div>
          {post.tag && (
            <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-[11px] font-medium text-accent-700">
              {post.tag}
            </span>
          )}
        </div>
        <p className="line-clamp-5 text-sm leading-relaxed text-gray-700">
          {post.excerpt}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>{formatDate(post.date)}</span>
        <span className="font-medium text-accent-600 transition-colors group-hover:text-accent-700">
          포스트 보기 →
        </span>
      </div>
    </a>
  );
}

export default function LinkedInPosts() {
  const [paused, setPaused] = useState(false);

  if (linkedinPosts.length === 0) return null;

  // 무한 스크롤을 위해 데이터를 두 번 렌더링 (CSS marquee가 -50%까지만 이동)
  const loop = [...linkedinPosts, ...linkedinPosts];

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-20">
      <div className="container-wide mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-accent-600">
              LinkedIn
            </p>
            <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              생각의 흐름
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-600">
              제품·AI·일에 대해 LinkedIn에 남기는 짧은 기록들입니다.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/hyojun-an/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-accent-400 hover:text-accent-700 sm:inline-block"
          >
            전체 피드 보기 →
          </a>
        </div>
      </div>

      <div
        className="marquee-mask relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex w-max gap-6 animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {loop.map((post, idx) => (
            <PostCard key={`${post.id}-${idx}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
