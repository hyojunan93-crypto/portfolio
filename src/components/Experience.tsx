const experiences = [
  {
    company: "HamadaLabs",
    role: "Product Manager",
    period: "2025.08 — 현재",
    location: "판교",
    current: true,
    highlights: [
      "AI Agent 및 Workflow 자동화 플랫폼 PM으로 제품 로드맵 기획 및 실행",
      "마케팅 경험 기반 사용자 리서치를 통한 기능 우선순위 결정",
      "AI Agent 플랫폼 핵심 기능 기획 및 개발팀 협업",
      "WindyFlo AI Workflow 플랫폼 PM으로 제품 성장 기여",
    ],
  },
  {
    company: "HamadaLabs",
    role: "마케터",
    period: "2024.10 — 2025.07",
    location: "서울 강남구",
    highlights: [
      "AI Agent 및 Workflow 자동화 플랫폼 B2B2C 마케팅 전략 수립 및 실행",
      "AI 플랫폼 사용자 행동 데이터 분석을 통한 마케팅 인사이트 도출",
      "제품-마케팅 간 가교 역할로 사용자 니즈를 제품팀에 전달",
      "마케터 경험을 바탕으로 PM 전환의 발판 마련",
    ],
  },
  {
    company: "Take Out Jazz",
    role: "소유주",
    period: "2022.04 — 2024.10",
    location: "서울 강남구",
    highlights: [
      "재즈 공연 기획 및 운영 사업 직접 창업 및 운영 (2년 7개월)",
      "공연 기획부터 현장 운영까지 전 과정 직접 담당",
      "고객 경험 설계 및 서비스 운영 전반 관리",
      "사업 운영을 통한 프로젝트 관리 및 실행력 체득",
    ],
  },
  {
    company: "naeumarthall",
    role: "프로젝트 매니저",
    period: "2021.08 — 2024.10",
    location: "서울 강남구",
    highlights: [
      "복합문화공간 프로젝트 매니저로 전시 및 행사 기획·운영 총괄",
      "외부 아티스트·파트너사와의 협업 조율 및 일정 관리",
      "공간 운영 프로세스 설계 및 팀 커뮤니케이션 주도",
      "고객 피드백 수집 및 서비스 개선 사이클 운영",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-gray-200 bg-gray-50"
    >
      <div className="container-wide py-20 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-600">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            경력 사항
          </h2>
          <p className="mt-4 text-base text-gray-600">
            마케팅부터 공간 기획, 사업 운영, 그리고 PM까지. 다양한 현장에서
            사용자를 고민해 왔습니다.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200 sm:left-6" />

          <ol className="space-y-10">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative pl-12 sm:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 sm:left-2 ${
                    exp.current
                      ? "border-accent-200 bg-accent-600"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {exp.current && (
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                  )}
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-gray-900">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-accent-100 px-2 py-0.5 text-xs font-semibold text-accent-700">
                            현재
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent-600">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{exp.period}</p>
                      <p className="mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-gray-600"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
