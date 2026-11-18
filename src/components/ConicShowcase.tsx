import { useEffect, useRef, useState } from "react";
import { conicWorks } from "../data/conic2026";
import type { ConicWork } from "../data/conic2026";

export default function ConicShowcase() {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);
  const [activeWork, setActiveWork] = useState<ConicWork | null>(null);

  function updateScrollButtons() {
    const element = track.current;
    if (!element) return;
    setCanGoBack(element.scrollLeft > 2);
    setCanGoForward(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
  }

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(updateScrollButtons);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeWork && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [activeWork]);

  function move(direction: -1 | 1) {
    const element = track.current;
    if (!element) return;
    const first = element.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(element).columnGap) : element.clientWidth;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * step, behavior: reduceMotion ? "instant" : "smooth" });
  }

  return (
    <section id="conic2026" className="conic-section" aria-labelledby="conic-title">
      <div className="lab-container section-space">
        <div className="conic-introduction">
          <figure className="conic-group-photo"><img src="/conic2026/grupo.webp" alt="Grupo do LIRA reunido no laboratório com pôsteres de pesquisa, Robodente e um protótipo robótico durante o CONIC 2026" loading="lazy" width="1600" height="900" /><figcaption>CONIC 2026 · Pesquisas, protótipos e pessoas do LIRA.</figcaption></figure>
          <div className="conic-event-copy"><p className="eyebrow">Registro de participação / 2026</p><h2 id="conic-title">LIRA no<br />{" "}<em>CONIC 2026.</em></h2><p>Da bancada à apresentação: nossos trabalhos ganharam espaço para compartilhar métodos, discutir resultados e trocar experiências com a comunidade acadêmica.</p><dl className="conic-event-facts"><div><dt>Encontro</dt><dd>27º Congresso de Iniciação Científica e Pesquisa</dd></div><div><dt>Quando</dt><dd><time dateTime="2026-11-11">11 de novembro de 2026</time></dd></div><div><dt>Onde</dt><dd>UNAERP · Ribeirão Preto, SP</dd></div></dl><a className="text-link" href="https://lp.unaerp.br/conic/" target="_blank" rel="noopener noreferrer">Sobre o congresso<span className="sr-only"> (abre em nova aba)</span></a></div>
        </div>

        <div className="section-heading conic-work-heading"><div><p className="eyebrow">Acervo do encontro</p><h3 id="conic-works-title">Conheça os trabalhos</h3></div><div className="conic-carousel-controls" role="group" aria-label="Navegar pelos trabalhos"><button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-controls="conic-works">Anterior</button><button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-controls="conic-works">Próximo</button></div></div>
        <p className="conic-gallery-note" id="conic-help">Deslize para explorar os pôsteres. Selecione uma prévia para ampliar ou abra o PDF completo. Os espaços provisórios estão identificados.</p>
        <div id="conic-works" className="conic-carousel" ref={track} onScroll={updateScrollButtons} role="region" aria-labelledby="conic-works-title" aria-describedby="conic-help" tabIndex={0}>
          {conicWorks.map((work, index) => (
            <article className={`conic-work-card ${work.placeholder ? "is-placeholder" : ""}`} key={work.id} aria-labelledby={`conic-work-${work.id}`}>
              <div className="conic-work-person"><div className={`conic-person-photos ${work.partnerPhoto ? "has-partner" : ""}`}><img src={work.photo} alt={work.photoAlt} loading="lazy" width="52" height="52" />{work.partnerPhoto && <img src={work.partnerPhoto.src} alt={work.partnerPhoto.alt} loading="lazy" width="52" height="52" />}</div><div><span className="technical-label">{work.placeholder ? "Espaço reservado para" : "Registro do grupo"}</span><p>{work.participant}</p></div><span className="conic-card-position" aria-label={`Cartão ${index + 1} de ${conicWorks.length}`}>{index + 1} / {conicWorks.length}</span></div>
              <button type="button" className="conic-poster-preview" onClick={() => setActiveWork(work)} aria-label={`Ampliar ${work.placeholder ? "pôster provisório de " + work.participant : "pôster: " + work.title}`}><img src={work.preview} alt={work.placeholder ? `Prévia provisória para ${work.participant}; conteúdo de exemplo` : `Pôster completo: ${work.title}`} loading="lazy" width="1200" height="1600" /><span>Ampliar pôster</span></button>
              <div className="conic-work-description"><p className={`conic-work-label ${work.placeholder ? "is-placeholder" : ""}`}>{work.placeholder ? "Pôster provisório" : work.topic}</p><h4 id={`conic-work-${work.id}`}>{work.title}</h4><p className="conic-work-summary">{work.summary}</p>{work.authors.length > 0 && <details className="conic-authors"><summary>Autoria e orientação</summary><p>{work.authors.join("; ")}.</p></details>}<a href={work.pdf} target="_blank" rel="noopener noreferrer" className="text-link">{work.placeholder ? "Abrir PDF provisório" : "Abrir pôster em PDF"}<span className="sr-only"> (abre em nova aba)</span></a></div>
            </article>
          ))}
        </div>
        <p className="conic-archive-caption technical-label">Pôsteres enviados por Lorenzo e Hugo · Acervo em atualização</p>
      </div>

      <dialog ref={dialog} className="conic-poster-dialog" aria-labelledby="conic-dialog-title" onClose={() => setActiveWork(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        {activeWork && <><header className="conic-dialog-header"><div><p className="technical-label">CONIC 2026 {activeWork.placeholder && " / Pôster provisório"}</p><h3 id="conic-dialog-title">{activeWork.title}</h3></div><button type="button" onClick={() => dialog.current?.close()} autoFocus>Fechar</button></header><div className="conic-dialog-actions"><a href={activeWork.pdf} target="_blank" rel="noopener noreferrer">Abrir PDF completo<span className="sr-only"> (abre em nova aba)</span></a><a href={activeWork.pdf} download={`${activeWork.id}.pdf`}>Baixar PDF</a></div>{activeWork.placeholder && <p className="conic-dialog-notice">Este arquivo é uma cópia de exemplo. O conteúdo não representa o trabalho de {activeWork.participant}.</p>}<img className="conic-dialog-image" src={activeWork.preview} alt={`Pôster ${activeWork.placeholder ? "provisório" : "completo"}: ${activeWork.title}`} width="1200" height="1600" /></>}
      </dialog>
    </section>
  );
}
