"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { linkedinPosts } from "@/data/linkedinPosts";

const CARD_W = 504;
const CARD_H = 480;
const AUTO_MS = 2000;

function cardStyle(offset: number): CSSProperties {
  const abs = Math.abs(offset);

  if (abs === 0) {
    return {
      transform: "translateX(0) scale(1.06) translateZ(60px)",
      opacity: 1,
      zIndex: 10,
      filter: "none",
      boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
      pointerEvents: "auto",
    };
  }
  if (abs === 1) {
    const x = offset * 430;
    return {
      transform: `translateX(${x}px) scale(0.84) translateZ(-10px)`,
      opacity: 0.65,
      zIndex: 5,
      filter: "brightness(0.9)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      pointerEvents: "auto",
    };
  }
  if (abs === 2) {
    const x = offset * 760;
    return {
      transform: `translateX(${x}px) scale(0.70) translateZ(-30px)`,
      opacity: 0.3,
      zIndex: 2,
      filter: "brightness(0.8)",
      boxShadow: "none",
      pointerEvents: "none",
    };
  }
  return { opacity: 0, zIndex: 0, pointerEvents: "none" };
}

export default function LinkedInPosts() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = linkedinPosts.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => setCurrent(((idx % total) + total) % total);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), AUTO_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, total]);

  if (total === 0) return null;

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-20 overflow-hidden">
      {/* 헤더 */}
      <div className="container-wide mb-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-accent-600">
              LinkedIn
            </p>
            <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              LinkedIn 게시글
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-600">
              제품, AI, 그리고 일에 대해 기록하고 있습니다.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/hyojun-an/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-accent-400 hover:text-accent-600 sm:inline-block"
          >
            전체 피드 보기 →
          </a>
        </div>
      </div>

      {/* 3D 카드 트랙 */}
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: "1200px", height: CARD_H + 60 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {linkedinPosts.map((post, idx) => {
          const offset = ((idx - current + total) % total + total) % total;
          // -2 ~ +2 범위로 정규화
          const normalized = offset > total / 2 ? offset - total : offset;
          const style = cardStyle(normalized);

          return (
            <div
              key={post.id}
              onClick={() => normalized !== 0 && (setPaused(true), goTo(idx))}
              className="absolute rounded-2xl overflow-hidden border border-gray-200 bg-white"
              style={{
                width: CARD_W,
                height: CARD_H,
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease, box-shadow 0.6s ease, filter 0.6s ease",
                cursor: normalized !== 0 ? "pointer" : "default",
                ...style,
              }}
            >
              <iframe
                src={post.embedUrl}
                width={CARD_W}
                height={CARD_H}
                frameBorder={0}
                allowFullScreen
                title="LinkedIn 게시글"
                loading="lazy"
                className="block pointer-events-none"
                style={{ pointerEvents: normalized === 0 ? "auto" : "none" }}
              />
            </div>
          );
        })}
      </div>

      {/* 하단 컨트롤 */}
      <div
        className="mt-8 flex flex-col items-center gap-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setPaused(true); goTo(current - 1); }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:border-accent-400 hover:text-accent-600"
            aria-label="이전"
          >
            ←
          </button>

          {/* 도트 (최대 7개) */}
          <div className="flex gap-1.5">
            {linkedinPosts.map((_, idx) => {
              const half = 3;
              const start = Math.max(0, Math.min(current - half, total - 7));
              const end = Math.min(total, start + 7);
              if (idx < start || idx >= end) return null;
              return (
                <button
                  key={idx}
                  onClick={() => { setPaused(true); goTo(idx); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? "w-5 bg-accent-600" : "w-2 bg-gray-300 hover:bg-gray-400"
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

        <p className="text-xs text-gray-400">
          {current + 1} / {total}
        </p>
      </div>
    </section>
  );
}
