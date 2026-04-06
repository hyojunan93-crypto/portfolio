import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-gray-900"
        >
          HJ<span className="text-accent-600">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-accent-600"
          >
            소개
          </Link>
          <Link
            href="/#experience"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-accent-600"
          >
            경력
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-accent-600"
          >
            프로젝트
          </Link>
          <a
            href="https://www.linkedin.com/in/hyojun-an/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-accent-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
