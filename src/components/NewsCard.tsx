import { Link } from "react-router-dom";
import type { News } from "../lib/news";

interface NewsCardProps {
  article: News;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link
      to={`/noticias/${article.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={article.placeholder}
          alt={article.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <time className="text-sm text-gray-500">
          {formatDate(article.date)}
        </time>

        <h3
          className="
            mt-2
            text-xl
            font-semibold
            text-gray-900
            transition-colors
            group-hover:text-blue-600
          "
        >
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-gray-600">
          {article.abstract}
        </p>

        <div className="mt-5 font-medium text-blue-600">
          Ler notícia →
        </div>
      </div>
    </Link>
  );
}