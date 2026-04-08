export interface LinkedInPost {
  id: string;
  date: string; // YYYY-MM-DD
  excerpt: string; // 카드에 보일 본문 요약 (2~4줄 권장)
  url: string; // 실제 LinkedIn 게시글 URL
  tag?: string; // 선택: 짧은 카테고리/태그
}

// 새 포스트가 올라올 때마다 이 배열만 수정하면 자동으로 슬라이드에 반영됩니다.
// 가장 최근 글을 맨 위에 두는 것을 권장합니다.
export const linkedinPosts: LinkedInPost[] = [
  {
    id: "post-1",
    date: "2026-03-20",
    excerpt:
      "WindyFlo의 첫 번째 사용자 인터뷰를 마쳤습니다. AI Agent를 직접 조립해 쓰는 마케터 분들의 워크플로우에서 가장 큰 고통은 '결과의 신뢰도 검증'이었어요.",
    url: "https://www.linkedin.com/in/hyojun-an/",
    tag: "Product",
  },
  {
    id: "post-2",
    date: "2026-02-12",
    excerpt:
      "마케터에서 PM으로 전환한 지 6개월. 가장 크게 바뀐 것은 '실행력'이 아니라 '문제 정의력'이 의사결정의 80%를 좌우한다는 감각이었습니다.",
    url: "https://www.linkedin.com/in/hyojun-an/",
    tag: "PM Diary",
  },
  {
    id: "post-3",
    date: "2026-01-05",
    excerpt:
      "AI Workflow 도구를 1년간 30개 이상 써보며 정리한 '진짜 쓸만한 자동화'의 3가지 조건. (1) 사람이 끼어들 수 있는 지점 (2) 실패 가시화 (3) 트레이서빌리티.",
    url: "https://www.linkedin.com/in/hyojun-an/",
    tag: "AI Tools",
  },
  {
    id: "post-4",
    date: "2025-12-10",
    excerpt:
      "HamadaLabs가 만들고 있는 AI Agent 플랫폼의 첫 번째 베타가 공개됐습니다. 마케팅·세일즈 팀이 직접 워크플로우를 조립하고, 결과를 사람이 검토하는 구조입니다.",
    url: "https://www.linkedin.com/in/hyojun-an/",
    tag: "Launch",
  },
  {
    id: "post-5",
    date: "2025-11-02",
    excerpt:
      "사용자 인터뷰에서 가장 자주 듣는 문장: '자동화하고 싶은데 결과가 틀릴까봐 못 켜요.' AI 제품의 핵심은 정확도가 아니라 '되돌릴 수 있는 자유도'라는 생각이 듭니다.",
    url: "https://www.linkedin.com/in/hyojun-an/",
    tag: "Insight",
  },
  {
    id: "post-6",
    date: "2025-10-18",
    excerpt:
      "Take Out Jazz를 운영하며 배운 것: 작은 가게의 성공 공식은 '메뉴 수'가 아니라 '재방문 이유 한 가지'를 만드는 것. 제품도 마찬가지더군요.",
    url: "https://www.linkedin.com/in/hyojun-an/",
    tag: "Story",
  },
];
