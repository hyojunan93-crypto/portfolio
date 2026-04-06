import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "안효준 | Product Manager",
  description:
    "HamadaLabs에서 AI Agent 및 Workflow 자동화 플랫폼 PM으로 일하는 안효준의 포트폴리오입니다. 마케터에서 PM으로의 여정, WindyFlo 제품 기획 경험을 소개합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
