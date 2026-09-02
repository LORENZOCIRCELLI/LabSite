export interface News {
  slug: string;
  title: string;
  date: string;
  placeholder: string;
  abstract: string;
  content: string[];
}

type NewsJson = Omit<News, "slug">;

const modules = import.meta.glob<{ default: NewsJson }>(
  "../data/blog/*.json",
  {
    eager: true,
  }
);

export const news: News[] = Object.entries(modules)
  .map(([path, module]) => {
    const fileName = path.split("/").pop()!;
    const slug = fileName.replace(".json", "");

    return {
      ...module.default,
      slug,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const newsTitles = news.map((article) => ({
  slug: article.slug,
  title: article.title,
}));

export function searchNewsByTitle(query: string) {
  const normalizedQuery = query
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  if (!normalizedQuery) {
    return news;
  }

  return news.filter((article) => {
    const normalizedTitle = article.title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    return normalizedTitle.includes(normalizedQuery);
  });
}