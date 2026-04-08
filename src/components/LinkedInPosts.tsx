"use client";

import { useEffect, useRef, useState } from "react";
import { linkedinPosts } from "@/data/linkedinPosts";

const CARD_W = 504;
const CARD_H = 480;
const AUTO_ADVANCE_MS = 2000;

export default function LinkedInPosts() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = linkedinPosts.length;

  const goTo = (idx: number) => setCurrent((idx + total) % total);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total]);

  if (total === 0) return null;

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-20">
      {/* 헤더 */}
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

      {/* 슬라이드 */}
      <div
        className="flex flex-col items-center gap-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* 카드 영역 */}
        <div
          className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
          style={{ width: CARD_W, height: CARD_H }}
        >
          {linkedinPosts.map((post, idx) => (
            <div
              key={post.id}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: idx === current ? 1 : 0, pointerEvents: idx === current ? "auto" : "none" }}
            >
              <iframe
                src={post.embedUrl}
                width={CARD_W}
                height={CARD_H}
                frameBorder={0}
                allowFullScreen
                title="LinkedIn 게시글"
                loading="lazy"
                className="block"
              />
            </div>
          ))}
        </div>

        {/* 이전/다음 + 카운터 */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setPaused(true); goTo(current - 1); }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:border-accent-400 hover:text-accent-600"
            aria-label="이전"
          >
            ←
          </button>

          {/* 도트 — 최대 7개 표시 */}
          <div className="flex gap-1.5">
            {linkedinPosts.map((_, idx) => {
              // 가운데 7개만 보여주기
              const half = 3;
              const start = Math.max(0, Math.min(current - half, total - 7));
              const end = Math.min(total, start + 7);
              if (idx < start || idx >= end) return null;
              return (
                <button
                  key={idx}
                  onClick={() => { setPaused(true); goTo(idx); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-5 bg-accent-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`${idx + 1}번 게시글`}
                />
              );
            })}
          </div>

          <button
            onClick={() => { setPaused(true); goTo(current + 1); }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:border-accent-400 hover:text-accent-600"
            aria-label="다음"
          >
            →
          </button>
        </div>

        {/* 카운터 텍스트 */}
        <p className="text-xs text-gray-400">
          {current + 1} / {total}
        </p>
      </div>
    </section>
  );
}
