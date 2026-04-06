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
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-accent-600"
          >
            홈
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-accent-600"
          >
            프로젝트
          </Link>
        </nav>
      </div>
    </header>
  );
}
