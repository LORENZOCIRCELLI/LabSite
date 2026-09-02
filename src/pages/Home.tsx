"use client";

import { useState } from "react";

import LatestNews from "../components/LatestNews"

const researchAreas = [
  {
    number: "01",
    title: "Inteligência Artificial",
    description:
      "Aprendizado de máquina, redes neurais e métodos computacionais aplicados a problemas científicos e tecnológicos.",
  },
  {
    number: "02",
    title: "Computação de Alto Desempenho",
    description:
      "Computação paralela, GPU, otimização e desenvolvimento de soluções para processamento científico em larga escala.",
  },
  {
    number: "03",
    title: "FPGA & Edge AI",
    description:
      "Aceleração de algoritmos e desenvolvimento de sistemas inteligentes de baixo consumo e processamento na borda.",
  },
  {
    number: "04",
    title: "Robótica e Automação",
    description:
      "Sistemas autônomos, controle, percepção e integração entre inteligência artificial e sistemas físicos.",
  },
];

const projects = [
  {
    category: "Robótica e Automação",
    title: "Automação Industrial com Sensores Embarcados",
    description:
      "Estudos e experimentação de técnicas embarcadas de alta precisão para conferência e análise de linhas de produção.",
    year: "2026",
  },
  {
    category: "EDGE AI",
    title: "Computação Inteligente na Borda",
    description:
      "Investigação de arquiteturas FPGA e sistemas embarcados para execução eficiente de modelos de inteligência artificial.",
    year: "2026",
  },
  {
    category: "HPC",
    title: "Computação de Alto Desempenho",
    description:
      "Pesquisa em arquiteturas paralelas, processamento acelerado e aplicações científicas de alto desempenho.",
    year: "2026",
  },
];


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-6 md:px-10">
          {/* Logo */}

          <a href="#" className="group flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center bg-[#111] text-lg font-black tracking-tighter text-white transition-transform group-hover:rotate-[-4deg]">
              L
            </div>

            <div className="leading-none">
              <div className="text-[24px] font-black tracking-[-0.07em]">
                LIRA
              </div>

              <div className="mt-1 hidden text-[8px] font-semibold uppercase tracking-[0.22em] text-black/50 sm:block">
                Laboratório de Inteligência Artificial,
                <br />
                Robótica e Automação
              </div>
            </div>
          </a>

          {/* Desktop navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="/pesquisa"
              className="text-[12px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Pesquisa
            </a>

            <a
              href="/projetos"
              className="text-[12px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Projetos
            </a>

            <a
              href="/membros"
              className="text-[12px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Pessoas
            </a>

            <a
              href="/publicacoes"
              className="text-[12px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Publicações
            </a>

            <a
              href="/noticias"
              className="text-[12px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
            >
              Notícias
            </a>

            <a
              href="/contato"
              className="border border-black px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-all hover:bg-black hover:text-white"
            >
              Contato
            </a>
          </nav>

          {/* Mobile button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center border border-black lg:hidden"
            aria-label="Abrir menu"
          >
            <div className="space-y-1.5">
              <span className="block h-[1px] w-5 bg-black" />
              <span className="block h-[1px] w-5 bg-black" />
              <span className="block h-[1px] w-5 bg-black" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f7f7f5] px-6 py-8 lg:hidden">
            <nav className="flex flex-col gap-6">
              {["Pesquisa", "Projetos", "Pessoas", "Publicações", "Notícias"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-black tracking-tight"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-screen items-end overflow-hidden border-b border-black/10 pt-[78px]">
        {/* Decorative grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Large background number */}

        <div className="pointer-events-none absolute right-[-30px] top-[100px] select-none text-[25vw] font-black leading-none tracking-[-0.1em] text-black/[0.025]">
          01
        </div>

        <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-12 px-6 pb-16 md:px-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:pb-24">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-black" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                Universidade de Ribeirão Preto
              </span>
            </div>

            <h1 className="max-w-[1100px] text-[15vw] font-black leading-[0.78] tracking-[-0.09em] sm:text-[110px] md:text-[130px] lg:text-[145px]">
              LIRA
            </h1>

            <div className="mt-8 max-w-[850px]">
              <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
                Inteligência artificial,
                <br />
                robótica e automação
                <br />
                para a ciência.
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <a
                href="#pesquisa"
                className="inline-flex items-center justify-center bg-black px-7 py-4 text-[14px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:bg-[#222]"
              >
                Conheça nossa pesquisa
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center border border-black px-7 py-4 text-[14px] font-bold uppercase tracking-[0.16em] transition-all hover:bg-black hover:text-white"
              >
                Ver projetos
              </a>
            </div>
          </div>

          {/* Hero information */}

          <div className="border-l border-black/20 pl-6 lg:mb-2">
            <div className="mb-10">
              <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Laboratório
              </div>

              <p className="text-lg font-medium leading-snug">
                Um espaço dedicado à pesquisa, desenvolvimento e aplicação de
                tecnologias computacionais.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-black/15 pt-6">
              <div>
                <div className="text-4xl font-black tracking-tight">04+</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                  Áreas de pesquisa
                </div>
              </div>

              <div>
                <div className="text-4xl font-black tracking-tight">∞</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                  Possibilidades
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LatestNews/>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="border-b border-black/10 bg-black py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.4fr_1.6fr]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                Sobre o LIRA
              </span>
            </div>

            <div>
              <p className="max-w-[1100px] text-3xl font-medium leading-[1.12] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Desenvolvemos tecnologia para investigar problemas que
                atravessam a ciência, a engenharia e o mundo real.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 md:grid-cols-3">
                <div>
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    01 — Descobrir
                  </div>
                  <p className="text-sm leading-relaxed text-white/65">
                    Investigamos problemas e transformamos perguntas em
                    hipóteses computacionais.
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    02 — Desenvolver
                  </div>
                  <p className="text-sm leading-relaxed text-white/65">
                    Criamos modelos, algoritmos e sistemas para resolver
                    problemas complexos.
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    03 — Aplicar
                  </div>
                  <p className="text-sm leading-relaxed text-white/65">
                    Levamos resultados de pesquisa para aplicações científicas
                    e tecnológicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH AREAS
      ====================================================== */}

      <section
        id="pesquisa"
        className="border-b border-black/10 py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                01 / Pesquisa
              </div>

              <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
                Áreas de pesquisa
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-black/55">
              Nossas pesquisas conectam diferentes áreas da computação para
              desenvolver soluções capazes de lidar com problemas complexos.
            </p>
          </div>

          <div className="border-t border-black">
            {researchAreas.map((area) => (
              <div
                key={area.number}
                className="group grid grid-cols-[60px_1fr] gap-6 border-b border-black/15 py-8 transition-all md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-10"
              >
                <div className="text-[11px] font-bold text-black/35">
                  {area.number}
                </div>

                <h3 className="text-2xl font-black tracking-[-0.04em] transition-transform group-hover:translate-x-2 md:text-4xl">
                  {area.title}
                </h3>

                <p className="col-start-2 text-sm leading-relaxed text-black/55 md:col-start-3">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED RESEARCH
      ====================================================== */}

      <section className="border-b border-black/10 bg-[#e8e8e5] py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-14 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
            Pesquisa em destaque
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Visual */}

            <div className="relative min-h-[450px] overflow-hidden bg-black md:min-h-[600px]">
              {/* abstract molecular visual */}

              <div className="absolute inset-0 opacity-80">
                <div className="absolute left-[25%] top-[20%] h-40 w-40 rounded-full border border-white/30" />
                <div className="absolute left-[48%] top-[35%] h-28 w-28 rounded-full border border-white/40" />
                <div className="absolute left-[60%] top-[55%] h-48 w-48 rounded-full border border-white/20" />
                <div className="absolute left-[35%] top-[65%] h-20 w-20 rounded-full border border-white/50" />

                <div className="absolute left-[32%] top-[33%] h-px w-[25%] rotate-[25deg] bg-white/30" />
                <div className="absolute left-[45%] top-[52%] h-px w-[25%] rotate-[-35deg] bg-white/30" />
                <div className="absolute left-[38%] top-[65%] h-px w-[20%] rotate-[20deg] bg-white/30" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                <span>Cluster Computacional</span>
                <span>2026</span>
              </div>
            </div>

            {/* Text */}

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Machine Learning × HPC
                </div>

                <h2 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
                  Utilização de Infraestrutura de Alto Desempenho para IA
                </h2>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-black/60">
                  Utilizamos um cluster desenvolvido pelo Laboratório
                  com o propósito de acelerar as pesquisas de Machine
                  Learning e Redes Neurais aplicadas.
                </p>
              </div>

              <div className="mt-12">
                <div className="grid grid-cols-2 border-y border-black/15 py-6">
                  <div>
                    <div className="text-3xl font-black">ML</div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                      Machine Learning
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-black">HPC</div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                      High-Performance Computing
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.15em]"
                >
                  Explorar pesquisa
                  <span className="ml-5 text-xl transition-transform hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projetos"
        className="border-b border-black/10 py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-16">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              02 / Projetos
            </div>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
                O que estamos
                <br />
                construindo.
              </h2>

              <a
                href="#"
                className="text-[11px] font-bold uppercase tracking-[0.15em] underline underline-offset-4"
              >
                Todos os projetos →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-black/15 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative flex min-h-[480px] flex-col justify-between bg-[#f7f7f5] p-7 transition-all hover:bg-black hover:text-white md:p-9"
              >
                <div>
                  <div className="flex justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-45">
                      {project.category}
                    </span>

                    <span className="text-[9px] font-bold opacity-35">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-20 text-3xl font-black leading-[0.95] tracking-[-0.05em] md:text-4xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-relaxed opacity-55">
                    {project.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-current/15 pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] opacity-40">
                      {project.year}
                    </span>

                    <span className="text-xl transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PEOPLE
      ====================================================== */}

      <section
        id="pessoas"
        className="border-b border-black/10 bg-black py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                03 / Pessoas
              </div>

              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Pessoas
                <br />
                movem a
                <br />
                pesquisa.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-2xl font-medium leading-snug text-white/80 md:text-4xl">
                O LIRA reúne estudantes, professores e pesquisadores
                interessados em transformar problemas científicos em
                oportunidades computacionais.
              </p>

              <div className="mt-14 border-t border-white/15">
                <a  
                href="/membros/professores" 
                className="flex items-center justify-between border-b border-white/15 py-6 hover:bg-gray-950">
                  <p className="text-sm font-bold">Professores</p>                  
                  <span className="text-2xl">→</span>
                </a>

                <a  
                href="/membros/estudantes" 
                className="flex items-center justify-between border-b border-white/15 py-6 hover:bg-gray-950">
                  <p className="text-sm font-bold">Estudantes</p>                  
                  <span className="text-2xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PUBLICATIONS
      ====================================================== */}

      <section
        id="publicacoes"
        className="border-b border-black/10 py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-14">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              04 / Publicações
            </div>

            <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
              Conhecimento
              <br />
              compartilhado.
            </h2>
          </div>

          <div className="border-t border-black">
            {[
              "Machine Learning applied to structural molecular descriptors",
              "Computational approaches for biological systems",
              "High-performance computing for scientific applications",
            ].map((publication, index) => (
              <div
                key={publication}
                className="group grid grid-cols-[45px_1fr] gap-6 border-b border-black/15 py-7 md:grid-cols-[70px_1fr_100px]"
              >
                <span className="text-[10px] font-bold text-black/35">
                  0{index + 1}
                </span>

                <h3 className="text-lg font-bold leading-tight md:text-xl">
                  {publication}
                </h3>

                <span className="hidden text-right text-[9px] font-bold uppercase tracking-[0.15em] text-black/35 md:block">
                  2026 ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWS
      ====================================================== */}
      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contato"
        className="border-b border-black/10 bg-black py-24 text-white md:py-36"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="max-w-[1100px]">
            <div className="mb-8 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              06 / Contato
            </div>

            <h2 className="text-6xl font-black leading-[0.85] tracking-[-0.08em] md:text-8xl lg:text-[120px]">
              Vamos
              <br />
              pesquisar
              <br />
              juntos.
            </h2>
            <h3 className="mt-10 text-2xl font-black leading-[0.85] tracking-[-0.08em]">
              Entre em Contato Conosco!
            </h3>
            <p
              className="mt-4 inline-flex items-center border border-white/30 px-7 py-4 text-[16px] font-bold uppercase tracking-[0.15em] transition-all hover:bg-white hover:text-black"
            >
              laboratorio@liralab.com.br
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#111] py-12 text-white">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="text-4xl font-black tracking-[-0.08em]">
                LIRA
              </div>

              <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/40">
                Laboratório de Inteligência Artificial, Robótica e Automação.
              </p>
            </div>

            <div>
              <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                Navegação
              </div>

              <div className="grid grid-cols-2 gap-y-3 text-sm text-white/65">
                <a href="#pesquisa">Pesquisa</a>
                <a href="#projetos">Projetos</a>
                <a href="#pessoas">Pessoas</a>
                <a href="#publicacoes">Publicações</a>
                <a href="#noticias">Notícias</a>
                <a href="#contato">Contato</a>
              </div>
            </div>

            <div>
              <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                Instituição
              </div>

              <p className="text-sm leading-relaxed text-white/55">
                Universidade de Ribeirão Preto
                <br />
                UNAERP
                <br />
                Ribeirão Preto — SP
                <br />
                Brasil
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25 md:flex-row">
            <span>© 2026 LIRA</span>
            <span>Laboratório de Inteligência Artificial, Robótica e Automação</span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          GLOBAL STYLE
      ====================================================== */}

    <style>{`
      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background: #f7f7f5;
      }

      ::selection {
        background: #111;
        color: white;
      }

      a {
        text-decoration: none;
      }
    `}</style>
    </main>
  );
}