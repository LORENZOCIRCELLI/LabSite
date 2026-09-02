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


export function getNewsBySlug(slug: string): News | undefined {
  return news.find((article) => article.slug === slug);
}