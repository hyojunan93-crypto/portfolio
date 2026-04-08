"use client";

import { useState } from "react";
import { linkedinPosts, type LinkedInPost } from "@/data/linkedinPosts";

const CARD_WIDTH = 504; // LinkedIn embed 기본 가로
const CARD_HEIGHT = 480; // 펼쳐진 게시글에 충분한 세로 (collapsed=1 기준)

function PostCard({ post }: { post: LinkedInPost }) {
  return (
    <div
      className="flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
      style={{ width: CARD_WIDTH }}
    >
      <iframe
        src={post.embedUrl}
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        frameBorder={0}
        allowFullScreen
        title="LinkedIn 게시글"
        loading="lazy"
        className="block"
      />
    </div>
  );
}

export default function LinkedInPosts() {
  const [paused, setPaused] = useState(false);

  if (linkedinPosts.length === 0) return null;

  // 카드가 1개뿐이면 마퀴 대신 가운데 정렬로 보여줍니다.
  const enableMarquee = linkedinPosts.length > 1;
  // 무한 스크롤을 위해 데이터를 두 번 렌더링 (CSS marquee가 -50%까지만 이동)
  const loop = enableMarquee ? [...linkedinPosts, ...linkedinPosts] : linkedinPosts;

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

      {enableMarquee ? (
        <div
          className="marquee-mask relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex w-max gap-6 animate-marquee px-6"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {loop.map((post, idx) => (
              <PostCard key={`${post.id}-${idx}`} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container-wide flex justify-center">
          {loop.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
