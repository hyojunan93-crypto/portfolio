export default function Hero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-br from-white via-accent-50/30 to-white">
      <div className="container-wide py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500"></span>
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-accent-700">
              Building WindyFlo
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            안효준
            <span className="block text-accent-600">Product Manager</span>
          </h1>

          <p className="mt-4 font-display text-lg font-medium text-gray-500 sm:text-xl">
            AI Agent &amp; Workflow Platforms @ HamadaLabs
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            마케터로 일하다, 제품을 만드는 사람이 됐습니다. 사용자가 실제로
            원하는 서비스를 고민하며, 사람들이 정말 쓰고 싶은 AI 제품을 만드는
            데 집중하고 있습니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hyojun-an/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://windyflo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              WindyFlo 방문
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-600 transition-colors hover:text-accent-600"
            >
              프로젝트 보기 ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
