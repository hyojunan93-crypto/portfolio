import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

export interface Project {
  id: string;
  title: string;
  date: string;
  category: string;
  aiTool: string;
  situation: string;
  content: string;
  result: string;
  linkedin: string;
  done: boolean;
}

function extractRichText(items: RichTextItemResponse[]): string {
  return items.map((item) => item.plain_text).join("");
}

function mapPageToProject(page: PageObjectResponse): Project {
  const props = page.properties;

  const titleProp = props["제목"];
  const dateProp = props["날짜"];
  const categoryProp = props["카테고리"];
  const aiToolProp = props["AI 도구"];
  const situationProp = props["상황"];
  const contentProp = props["내용"];
  const resultProp = props["결과"];
  const linkedinProp = props["LinkedIn"];
  const doneProp = props["완료"];

  return {
    id: page.id,
    title:
      titleProp.type === "title" ? extractRichText(titleProp.title) : "",
    date: dateProp.type === "date" ? (dateProp.date?.start ?? "") : "",
    category:
      categoryProp.type === "select"
        ? (categoryProp.select?.name ?? "")
        : "",
    aiTool:
      aiToolProp.type === "select" ? (aiToolProp.select?.name ?? "") : "",
    situation:
      situationProp.type === "rich_text"
        ? extractRichText(situationProp.rich_text)
        : "",
    content:
      contentProp.type === "rich_text"
        ? extractRichText(contentProp.rich_text)
        : "",
    result:
      resultProp.type === "rich_text"
        ? extractRichText(resultProp.rich_text)
        : "",
    linkedin:
      linkedinProp.type === "url" ? (linkedinProp.url ?? "") : "",
    done: doneProp.type === "checkbox" ? doneProp.checkbox : false,
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "완료",
        checkbox: { equals: true },
      },
      sorts: [{ property: "날짜", direction: "descending" }],
    });

    return (response.results as PageObjectResponse[]).map(mapPageToProject);
  } catch {
    return [];
  }
}

export async function getProject(id: string): Promise<Project | null> {
  try {
    const page = (await notion.pages.retrieve({
      page_id: id,
    })) as PageObjectResponse;
    return mapPageToProject(page);
  } catch {
    return null;
  }
}
