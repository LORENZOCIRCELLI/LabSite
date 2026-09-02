import { useMemo, useState } from "react";
import { news } from "../lib/news";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function NewsPage() {
  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    const query = normalizeText(search.trim());

    if (!query) {
      return news;
    }

    return news.filter((article) =>
      normalizeText(article.title).includes(query)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
          <Link
          to="/"
          className="
            mb-10
            inline-flex
            items-center
            text-sm
            font-medium
            text-gray-500
            transition
            hover:text-blue-600
          "
        >
          ← Página Inicial
        </Link>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            LIRA
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Notícias
          </h1>
        </header>

        <div className="mb-10 max-w-2xl">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Pesquisar pelo título..."
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              shadow-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

          {search && (
            <p className="mt-3 text-sm text-gray-500">
              {filteredNews.length}{" "}
              {filteredNews.length === 1
                ? "notícia encontrada"
                : "notícias encontradas"}
            </p>
          )}
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((article) => (
              <NewsCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="text-6xl">🔎</div>

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">
              Nenhuma notícia encontrada
            </h2>

            <p className="mt-2 text-gray-600">
              Não encontramos nenhuma notícia com esse título.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}