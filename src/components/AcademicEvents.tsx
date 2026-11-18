import { useState } from "react";
import { academicEvents, eventsReviewedAt } from "../data/events";

const filters = ["Todos", "2027 confirmado", "Iniciação científica", "Computação e hardware"] as const;
type EventFilter = typeof filters[number];

export default function AcademicEvents() {
  const [filter, setFilter] = useState<EventFilter>("Todos");
  const events = academicEvents.filter((event) => filter === "Todos" || (filter === "2027 confirmado" ? event.confirmed : event.area === filter));

  return (
    <section id="eventos" className="events-section" aria-labelledby="events-title">
      <div className="lab-container section-space">
        <div className="section-heading events-heading">
          <div><p className="eyebrow">Fora da bancada / Agenda 2027</p><h2 id="events-title">Sua pesquisa merece<br />outras conversas.</h2></div>
          <p>Congressos, escolas e semanas acadêmicas para aprender, apresentar ideias e conhecer quem também está construindo ciência.</p>
        </div>

        <div className="events-introduction">
          <div><h3>Por que participar?</h3><p>Você pode começar como ouvinte, mesmo sem um artigo pronto. Veja como outros pesquisadores apresentam problemas e resultados, descubra ferramentas e leve novas perguntas para o seu projeto.</p></div>
          <div><h3>Leve seu trabalho adiante.</h3><p>Quando tiver resultados, converse com seu orientador sobre um resumo ou pôster. Apresentar ajuda a explicar suas escolhas, receber críticas e encontrar pessoas com interesses próximos.</p></div>
        </div>

        <div className="events-editor-note"><p><strong>Um guia para planejar 2027.</strong> Priorizamos eventos regionais e opções com histórico de gratuidade ou taxa estudantil acessível. Apenas os cards marcados como “2027 confirmado” têm data anunciada; os demais são sugestões para acompanhar. Valores de 2026 servem como referência.</p><span className="technical-label">Fontes conferidas em {eventsReviewedAt}</span></div>

        <div className="event-filters" role="group" aria-label="Filtrar eventos">
          {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <p className="events-count technical-label" role="status" aria-live="polite">{events.length} {events.length === 1 ? "sugestão" : "sugestões"} para explorar</p>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id} aria-labelledby={`event-${event.id}`}>
              <div className="event-card-top"><span className="technical-label">{event.area}</span><span className={`event-status ${event.confirmed ? "is-confirmed" : ""}`}>{event.confirmed ? "2027 confirmado" : "Acompanhar edição 2027"}</span></div>
              <h3 id={`event-${event.id}`}>{event.name}</h3><p className="event-full-name">{event.fullName}</p>
              <dl className="event-facts"><div><dt>Quando</dt><dd>{event.date}</dd></div><div><dt>Onde</dt><dd>{event.place}</dd></div><div><dt>Inscrição</dt><dd>{event.cost}</dd></div></dl>
              <p className="event-cost-note">{event.costNote}</p>
              <div className="event-reason"><h4>Por que ir</h4><p>{event.why}</p></div>
              <details className="event-details"><summary>Como participar</summary><p>{event.participation}</p></details>
              {event.notice && <p className="event-notice"><strong>Atenção ao prazo.</strong> {event.notice}</p>}
              <div className="event-sources"><a href={event.source} target="_blank" rel="noopener noreferrer">{event.sourceLabel}<span className="sr-only"> (abre em nova aba)</span></a>{event.announcement && <a href={event.announcement} target="_blank" rel="noopener noreferrer">Data e local de 2027<span className="sr-only"> (abre em nova aba)</span></a>}</div>
            </article>
          ))}
        </div>

        <aside className="events-budget" aria-labelledby="events-budget-title"><div><p className="eyebrow">Participar com planejamento</p><h3 id="events-budget-title">A inscrição é só parte do custo.</h3></div><div><p>Some transporte, alimentação, hospedagem e impressão de pôster, se houver. Para começar, priorize eventos em Ribeirão Preto e região, compare os lotes estudantis e veja se sua instituição oferece auxílio ou transporte coletivo.</p><p>Antes de se inscrever, confira o edital, as vagas, o público aceito e os prazos no site oficial. Certificados e apresentações dependem das regras de cada organização.</p></div></aside>
      </div>
    </section>
  );
}
