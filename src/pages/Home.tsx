import { useState } from "react";
import LatestNews from "../components/LatestNews";
import AcademicEvents from "../components/AcademicEvents";
import GroupMembers from "../components/GroupMembers";
import ConicShowcase from "../components/ConicShowcase";
import "./Editorial.css";

const researchAreas = [
  { title: "Inteligência artificial", description: "Aprendizado de máquina, redes neurais e métodos computacionais aplicados a problemas científicos e tecnológicos.", detail: "Modelos · Aprendizado · Dados" },
  { title: "Computação de alto desempenho", description: "Computação paralela, GPU e desenvolvimento de soluções para processamento científico em larga escala.", detail: "GPU · Sistemas paralelos · Simulação" },
  { title: "FPGA & Edge AI", description: "Aceleração de algoritmos e sistemas inteligentes de baixo consumo, com processamento na borda.", detail: "Hardware · Sistemas embarcados" },
  { title: "Robótica e automação", description: "Sistemas autônomos, controle, percepção e integração entre inteligência artificial e sistemas físicos.", detail: "Percepção · Controle · Autonomia" },
];
const projects = [
  { category: "Robótica e automação", title: "Automação industrial com sensores embarcados", description: "Estudos e experimentação de técnicas embarcadas para conferência e análise de linhas de produção." },
  { category: "Edge AI", title: "Computação inteligente na borda", description: "Investigação de arquiteturas FPGA e sistemas embarcados para execução eficiente de modelos de inteligência artificial." },
  { category: "HPC", title: "Computação de alto desempenho", description: "Pesquisa em arquiteturas paralelas, processamento acelerado e aplicações científicas de alto desempenho." },
];
const navigation = [
  ["Pesquisa", "/pesquisa"], ["Projetos", "/projetos"], ["Pessoas", "#grupo"],
  ["Publicações", "/publicacoes"], ["Notícias", "/noticias"], ["Eventos 2027", "#eventos"], ["Contato", "/contato"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="editorial-site">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="lab-header lab-container">
        <div className="institution-line"><span>Universidade de Ribeirão Preto</span><span>Pesquisa, ensino e experimentação</span></div>
        <div className="masthead">
          <a href="#" className="lab-brand" aria-label="LIRA — início"><img src="/NewCoat.png" alt="" /><span>LIRA</span></a>
          <p className="brand-description">Laboratório de Inteligência Artificial,<br />Robótica e Automação</p>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="lab-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Fechar menu" : "Menu"}</button>
        </div>
        <nav id="lab-navigation" aria-label="Navegação principal" className={`lab-navigation ${menuOpen ? "is-open" : ""}`}>
          {navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <span className="nav-location">Ribeirão Preto · SP</span>
        </nav>
      </header>

      <section id="conteudo" className="lab-hero lab-container">
        <div className="hero-copy"><p className="eyebrow">Ciência da computação, na prática</p>
          <h1>Entre a hipótese<br />e o <em>experimento.</em></h1>
          <p className="hero-introduction">Investigamos inteligência artificial, robótica e automação. Construímos modelos, sistemas e protótipos para aproximar a pesquisa dos problemas do mundo real.</p>
          <a href="#pesquisa" className="text-link">Conheça nossas linhas de pesquisa</a>
          <div className="hero-note"><span className="technical-label">LIRA / UNAERP</span><p>Um espaço de pesquisa e formação, onde professores e estudantes trabalham juntos.</p></div>
        </div>
        <figure className="hero-figure"><div className="photo-mount"><img src="/robodente.png" alt="Robô Robodente com olhos iluminados e painel eletrônico, cercado por crianças em um espaço aberto" fetchPriority="high" /></div>
          <figcaption><span className="technical-label">Registro de robótica</span><span>Robodente — tecnologia em contato com as pessoas.</span></figcaption>
        </figure>
      </section>

      <LatestNews />
      <GroupMembers />
      <ConicShowcase />

      <section id="pesquisa" className="research-section lab-container section-space">
        <div className="section-heading"><div><p className="eyebrow">Linhas de investigação</p><h2>O que pesquisamos</h2></div><p>Da construção dos modelos à implementação em hardware, quatro áreas conectam o trabalho do laboratório.</p></div>
        <div className="research-grid">{researchAreas.map((area) => <article key={area.title}><h3>{area.title}</h3><p>{area.description}</p><span className="technical-label">{area.detail}</span></article>)}</div>
      </section>

      {/* Seção temporariamente oculta; remova hidden para exibi-la novamente. */}
      <section hidden className="feature-band"><div className="lab-container feature-layout">
        <div className="feature-heading"><p className="eyebrow">Pesquisa em destaque</p><span className="technical-label">Infraestrutura / ML + HPC</span></div>
        <div className="feature-body"><h2>A infraestrutura também<br />faz parte da pesquisa.</h2><p>Um cluster desenvolvido pelo laboratório para acelerar experimentos de aprendizado de máquina, redes neurais e computação científica.</p>
          <dl className="technical-sheet"><div><dt>Campo</dt><dd>Computação de alto desempenho</dd></div><div><dt>Aplicação</dt><dd>Machine learning e redes neurais</dd></div><div><dt>Abordagem</dt><dd>Processamento paralelo</dd></div></dl>
          <a href="#" className="text-link">Explorar pesquisa</a>
        </div>
      </div></section>

      <section id="projetos" className="lab-container section-space">
        <div className="section-heading"><div><p className="eyebrow">Da investigação à construção</p><h2>Projetos do laboratório</h2></div><a href="#" className="text-link">Todos os projetos</a></div>
        <div className="project-grid">{projects.map((project) => <article key={project.title}><p className="technical-label">{project.category} / 2026</p><h3>{project.title}</h3><p>{project.description}</p></article>)}</div>
      </section>

      <section id="publicacoes" className="lab-container section-space publications-section">
        <div className="section-heading"><div><p className="eyebrow">Produção científica</p><h2>Publicações</h2></div><p>Conhecimento desenvolvido e compartilhado pelo grupo.</p></div>
        {[
          "Machine Learning applied to structural molecular descriptors",
          "Computational approaches for biological systems",
          "High-performance computing for scientific applications",
        ].map((publication) => <article key={publication} className="publication-row"><h3>{publication}</h3><span className="technical-label">2026</span></article>)}
      </section>

      <AcademicEvents />

      <footer id="contato" className="lab-footer"><div className="lab-container">
        <div className="footer-contact"><div><p className="eyebrow">Contato</p><h2>Uma conversa pode ser<br />o próximo começo.</h2></div><div><p>Entre em contato com o laboratório</p><p className="contact-address">laboratorio@liralab.com.br</p></div></div>
        <div className="footer-bottom"><div><strong>LIRA</strong><p>Laboratório de Inteligência Artificial,<br />Robótica e Automação</p></div><div><p>Universidade de Ribeirão Preto — UNAERP<br />Ribeirão Preto, São Paulo · Brasil</p></div><nav aria-label="Navegação do rodapé"><a href="#pesquisa">Pesquisa</a><a href="#projetos">Projetos</a><a href="#grupo">Pessoas</a><a href="#publicacoes">Publicações</a><a href="#noticias">Notícias</a><a href="#eventos">Eventos 2027</a><a href="#conic2026">CONIC 2026</a></nav><span className="technical-label">© 2026 LIRA</span></div>
      </div></footer>
    </main>
  );
}
