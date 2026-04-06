export default function About() {
  const strengths = [
    {
      title: "사용자 니즈 발굴",
      description:
        "마케터로 쌓은 사용자 서비스 니즈 발굴 감각이 PM으로서의 가장 큰 무기입니다.",
    },
    {
      title: "AI 제품 기획",
      description:
        "AI Agent 및 Workflow 자동화 플랫폼의 로드맵을 설계하고, 사람들이 실제로 쓰고 싶은 AI 제품을 만듭니다.",
    },
    {
      title: "마케팅 × 제품",
      description:
        "마케팅에서 제품으로 이어지는 연결 고리. 사용자 행동 데이터를 제품 개선으로 이어갑니다.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-b border-gray-200 bg-white">
      <div className="container-wide py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-600">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              마케터에서
              <br />
              PM으로
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                마케팅을 하면서 항상 같은 질문이 머릿속에 남았습니다.
                <span className="font-semibold text-gray-900">
                  {" "}
                  &ldquo;사용자가 실제로 원하는 서비스는 무엇일까?&rdquo;
                </span>
              </p>
              <p>
                HamadaLabs에서 마케터로 시작해 사용자의 니즈를 깊이 들여다보다
                자연스럽게 PM으로 전환했습니다. 마케팅에서 쌓은 사용자 서비스
                니즈 발굴 감각은 지금 PM으로서 제 가장 큰 무기입니다.
              </p>
              <p>
                현재 HamadaLabs에서{" "}
                <span className="font-semibold text-gray-900">
                  AI Agent 및 Workflow 자동화 플랫폼 PM
                </span>
                으로, 사람들이 실제로 쓰고 싶은 AI 제품을 만드는 데 집중하고
                있습니다.{" "}
                <a
                  href="https://windyflo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-600 underline-offset-4 hover:underline"
                >
                  WindyFlo
                </a>
                의 PM으로서 AI Workflow 플랫폼의 성장에도 함께하고 있습니다.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="font-display text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
