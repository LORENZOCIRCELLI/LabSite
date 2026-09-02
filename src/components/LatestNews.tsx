import { Link } from "react-router-dom";
import { news } from "../lib/news";
import NewsCard from "./NewsCard";

interface LatestNewsProps {
  limit?: number;
}

export default function LatestNews({
  limit = 3,
}: LatestNewsProps) {
  const latestNews = news.slice(0, limit);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Notícias
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Últimas notícias
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Acompanhe as últimas atividades, pesquisas,
            projetos e acontecimentos do laboratório.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((article) => (
            <NewsCard
              key={article.slug}
              article={article}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/noticias"
            className="
              rounded-lg
              border
              border-gray-300
              px-6
              py-3
              font-medium
              text-gray-800
              transition
              hover:bg-gray-100
            "
          >
            Ver todas →
          </Link>
        </div>

      </div>
    </section>
  );
}