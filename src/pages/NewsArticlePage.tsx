import { Link, useParams } from "react-router-dom";
import { getNewsBySlug } from "../lib/news";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  const article = getNewsBySlug(slug ?? "");

  if (!article) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-6 text-7xl">
            🤖
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Notícia não encontrada
          </h1>

          <p className="mt-3 text-gray-600">
            Nosso robô procurou por todo lado, mas não encontrou
            essa notícia.
          </p>

          <Link
            to="/"
            className="
              mt-8
              inline-flex
              rounded-lg
              bg-blue-600
              px-6
              py-3
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            ← Voltar para a Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-6 py-16">

        {/* Voltar */}

        <Link
          to="/noticias"
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
          ← Todas as notícias
        </Link>

        {/* Cabeçalho */}

        <header>
          <time className="text-sm font-medium text-blue-600">
            {formatDate(article.date)}
          </time>

          <h1
            className="
              mt-4
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              md:text-5xl
            "
          >
            {article.title}
          </h1>

          <p
            className="
              mt-6
              text-xl
              leading-relaxed
              text-gray-600
            "
          >
            {article.abstract}
          </p>
        </header>

        {/* Imagem */}

        <div className="mt-10 overflow-hidden rounded-2xl">
          <img
            src={article.placeholder}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {/* Conteúdo */}

        <div
          className="
            mt-12
            space-y-7
            text-lg
            leading-8
            text-gray-700
          "
        >
          {article.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer da matéria */}

        <footer className="mt-16 border-t border-gray-200 pt-8">
          <Link
            to="/noticias"
            className="font-medium text-blue-600 transition hover:text-blue-800"
          >
            ← Ver todas as notícias
          </Link>
        </footer>

      </article>
    </main>
  );
}