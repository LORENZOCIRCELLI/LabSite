import { news } from "../lib/news";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

export default function NewsPage() {
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
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            LIRA
          </span>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Todas as Notícias
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Acompanhe as últimas novidades, projetos, pesquisas, eventos e
            atividades desenvolvidas pelo laboratório.
          </p>
        </div>

        {news.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <div className="mb-5 text-6xl">
              🤖
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">
              Nenhuma notícia publicada ainda
            </h2>

            <p className="mt-3 max-w-md text-gray-600">
              Nosso robô ainda está esperando pelas primeiras novidades do
              laboratório.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

