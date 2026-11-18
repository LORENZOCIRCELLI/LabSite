import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../lib/news";
import type { News } from "../types";
import NewsCard from "./NewsCard";

export default function LatestNews({ limit = 3 }: { limit?: number }) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getNews(limit)
      .then(setNews)
      .catch(() => setError("Não foi possível carregar as notícias agora."))
      .finally(() => setLoading(false));
  }, [limit]);

  return (
    <section id="noticias" className="lab-news">
      <div className="lab-container">
        <div className="section-heading">
          <div><p className="eyebrow">Caderno do laboratório</p><h2>Notícias & registros</h2></div>
          <Link to="/noticias" className="text-link">Todas as notícias</Link>
        </div>
        {loading && <p className="lab-news-state">Carregando notícias…</p>}
        {error && <p className="lab-news-state" role="alert">{error}</p>}
        {!loading && !error && news.length === 0 && <p className="lab-news-state">Nenhuma notícia publicada ainda.</p>}
        {news.length > 0 && <div className="lab-news-grid">{news.map((article) => <NewsCard key={article.id} article={article} />)}</div>}
      </div>
    </section>
  );
}
