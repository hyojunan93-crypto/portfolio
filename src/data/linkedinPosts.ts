export interface LinkedInPost {
  id: string;
  /**
   * LinkedIn 공식 임베드 URL.
   * 게시글 오른쪽 상단 ··· → "임베드(Embed this post)"에서 복사할 수 있습니다.
   * 예: https://www.linkedin.com/embed/feed/update/urn:li:share:7444929404314685440?collapsed=1
   */
  embedUrl: string;
}

// 새 글이 올라올 때마다 이 배열에 임베드 URL만 추가하면 됩니다.
// 가장 최근 글을 맨 위에 두는 것을 권장합니다.
export const linkedinPosts: LinkedInPost[] = [
  {
    id: "post-1",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7444929404314685440?collapsed=1",
  },
  // 예시: 추가할 때는 아래처럼 객체를 더 넣으세요.
  // {
  //   id: "post-2",
  //   embedUrl:
  //     "https://www.linkedin.com/embed/feed/update/urn:li:share:0000000000000000000?collapsed=1",
  // },
];
