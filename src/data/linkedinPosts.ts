export interface LinkedInPost {
  id: string;
  /**
   * LinkedIn 공식 임베드 URL.
   * urn:li:activity: 형식도 작동합니다.
   * 게시글 오른쪽 상단 ··· → "임베드(Embed this post)"에서도 가져올 수 있습니다.
   */
  embedUrl: string;
}

// 새 글이 올라올 때마다 맨 위에 객체를 추가하세요.
export const linkedinPosts: LinkedInPost[] = [
  {
    id: "post-1",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7444929404918652929?collapsed=1",
  },
  {
    id: "post-2",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7442841860550684672?collapsed=1",
  },
  {
    id: "post-3",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7442441933945475072?collapsed=1",
  },
  {
    id: "post-4",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7442063112427692032?collapsed=1",
  },
  {
    id: "post-5",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7353603745760358403?collapsed=1",
  },
  {
    id: "post-6",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7343505703560454144?collapsed=1",
  },
  {
    id: "post-7",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7336203698764750848?collapsed=1",
  },
  {
    id: "post-8",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7334031590605410305?collapsed=1",
  },
  {
    id: "post-9",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7333285505607847937?collapsed=1",
  },
  {
    id: "post-10",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7330406445370302464?collapsed=1",
  },
  {
    id: "post-11",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7315241787554418688?collapsed=1",
  },
  {
    id: "post-12",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7314895208305856512?collapsed=1",
  },
  {
    id: "post-13",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7312643794242322432?collapsed=1",
  },
  {
    id: "post-14",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7310519948999630850?collapsed=1",
  },
  {
    id: "post-15",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7309745797590368256?collapsed=1",
  },
  {
    id: "post-16",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7307227802229948416?collapsed=1",
  },
  {
    id: "post-17",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7304694514357571584?collapsed=1",
  },
  {
    id: "post-18",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7302868568168120321?collapsed=1",
  },
  {
    id: "post-19",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7300394870320373760?collapsed=1",
  },
  {
    id: "post-20",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7257618397163642880?collapsed=1",
  },
  {
    id: "post-21",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7257262852640526336?collapsed=1",
  },
  {
    id: "post-22",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7256592966394236929?collapsed=1",
  },
  {
    id: "post-23",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:activity:7256230399004037120?collapsed=1",
  },
];
