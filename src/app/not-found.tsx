import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-wide flex flex-col items-center justify-center py-32 text-center">
      <h1 className="font-display text-6xl font-extrabold text-gray-200">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
