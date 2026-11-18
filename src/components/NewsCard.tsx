import { Link } from "react-router-dom";
import { formatNewsDate } from "../lib/news";
import type { News } from "../types";

export default function NewsCard({ article }: { article: News }) {
  return (
    <Link to={`/noticias/${article.slug}`} className="news-card">
      <div className="news-image">
        {article.cover_image_url ? <img src={article.cover_image_url} alt={article.cover_image_alt || article.title} loading="lazy" /> : <div className="news-placeholder">LIRA</div>}
      </div>
      <div className="news-meta"><time>{formatNewsDate(article.published_at)}</time>{article.category && <span className="news-category">{article.category.name}</span>}</div>
      <h3>{article.title}</h3>
      <p className="news-excerpt">{article.excerpt || article.subtitle}</p>
      <span className="news-read">Ler notícia</span>
    </Link>
  );
}
