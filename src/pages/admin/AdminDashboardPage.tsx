import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const authenticated =
    sessionStorage.getItem("lira_admin_authenticated") === "true";

  if (!authenticated) {
    return <Navigate to="/admin" replace />;
  }

  function handleLogout() {
    sessionStorage.removeItem("lira_admin_authenticated");
    navigate("/admin");
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#111111]">

      {/* HEADER */}

      <header className="border-b border-[#d9d9d5] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-4"
          >
            <div className="flex h-11 w-11 items-center justify-center bg-[#101b3d] text-lg font-black text-white">
              L
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-[#101b3d]">
                LIRA
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Administração
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-gray-500
                transition
                hover:text-[#101b3d]
              "
            >
              Ver site ↗
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="
                border
                border-[#101b3d]
                px-5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#101b3d]
                transition
                hover:bg-[#101b3d]
                hover:text-white
              "
            >
              Sair
            </button>

          </div>
        </div>
      </header>


      {/* RED DETAIL */}

      <div className="h-1 bg-[#b6202a]" />


      {/* CONTENT */}

      <main className="mx-auto max-w-7xl px-6 py-14">

        {/* PAGE HEADER */}

        <section className="border-b border-[#cfcfca] pb-12">

          <p className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#b6202a]
          ">
            LIRA / CMS
          </p>

          <div className="
            mt-4
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
          ">

            <div>
              <h1 className="
                max-w-4xl
                text-4xl
                font-black
                tracking-tight
                text-[#101b3d]
                md:text-6xl
              ">
                Painel Administrativo
              </h1>

              <p className="
                mt-5
                max-w-2xl
                text-lg
                leading-relaxed
                text-gray-600
              ">
                Gerencie notícias, tutoriais, membros e arquivos
                publicados no site do laboratório.
              </p>
            </div>

            <Link
              to="/admin/publicacoes/nova"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#b6202a]
                px-6
                py-4
                text-sm
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition
                hover:bg-[#971922]
              "
            >
              + Nova publicação
            </Link>

          </div>
        </section>


        {/* METRICS */}

        <section className="py-12">

          <SectionLabel>
            Visão geral
          </SectionLabel>

          <div className="
            mt-6
            grid
            border-l
            border-t
            border-[#cfcfca]
            sm:grid-cols-2
            lg:grid-cols-4
          ">

            <MetricCard
              label="Notícias"
              value="5"
              description="Publicadas"
            />

            <MetricCard
              label="Tutoriais"
              value="0"
              description="Publicados"
            />

            <MetricCard
              label="Membros"
              value="6"
              description="Cadastrados"
            />

            <MetricCard
              label="Arquivos"
              value="0"
              description="No armazenamento"
            />

          </div>
        </section>


        {/* ACTIONS */}

        <section className="border-t border-[#cfcfca] py-12">

          <SectionLabel>
            Ações rápidas
          </SectionLabel>

          <div className="
            mt-6
            grid
            gap-px
            overflow-hidden
            border
            border-[#cfcfca]
            bg-[#cfcfca]
            md:grid-cols-2
            lg:grid-cols-4
          ">

            <AdminAction
              number="01"
              title="Nova publicação"
              description="Crie uma nova notícia ou tutorial."
              href="/admin/publicacoes/nova"
            />

            <AdminAction
              number="02"
              title="Publicações"
              description="Edite e gerencie o conteúdo existente."
              href="/admin/publicacoes"
            />

            <AdminAction
              number="03"
              title="Membros"
              description="Gerencie estudantes e professores."
              href="/admin/membros"
            />

            <AdminAction
              number="04"
              title="Arquivos"
              description="Visualize imagens e documentos enviados."
              href="/admin/arquivos"
            />

          </div>
        </section>


        {/* RECENT PUBLICATIONS */}

        <section className="border-t border-[#cfcfca] py-12">

          <div className="
            flex
            flex-col
            justify-between
            gap-5
            sm:flex-row
            sm:items-end
          ">

            <div>
              <SectionLabel>
                Conteúdo
              </SectionLabel>

              <h2 className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                text-[#101b3d]
              ">
                Publicações recentes
              </h2>
            </div>

            <Link
              to="/admin/publicacoes"
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#b6202a]
                hover:underline
              "
            >
              Ver todas →
            </Link>

          </div>


          <div className="
            mt-8
            border-t
            border-[#101b3d]
          ">

            <PublicationRow
              title="Laboratório avança na construção de cluster computacional"
              type="Notícia"
              status="Publicado"
              date="02 set. 2026"
            />

            <PublicationRow
              title="Novo estudo investiga navegação autônoma com drones"
              type="Notícia"
              status="Publicado"
              date="28 ago. 2026"
            />

            <PublicationRow
              title="Como configurar um cluster Linux com SLURM"
              type="Tutorial"
              status="Rascunho"
              date="26 ago. 2026"
            />

          </div>

        </section>

      </main>
    </div>
  );
}


/* --------------------------------------------------------- */
/* SECTION LABEL                                             */
/* --------------------------------------------------------- */

interface SectionLabelProps {
  children: React.ReactNode;
}

function SectionLabel({
  children,
}: SectionLabelProps) {
  return (
    <p className="
      text-[11px]
      font-bold
      uppercase
      tracking-[0.22em]
      text-gray-500
    ">
      {children}
    </p>
  );
}


/* --------------------------------------------------------- */
/* METRIC                                                    */
/* --------------------------------------------------------- */

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
}

function MetricCard({
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <div className="
      border-b
      border-r
      border-[#cfcfca]
      bg-white
      p-7
    ">

      <p className="
        text-xs
        font-bold
        uppercase
        tracking-[0.15em]
        text-gray-500
      ">
        {label}
      </p>

      <p className="
        mt-6
        text-5xl
        font-black
        tracking-tight
        text-[#101b3d]
      ">
        {value}
      </p>

      <p className="
        mt-2
        text-sm
        text-gray-500
      ">
        {description}
      </p>

    </div>
  );
}


/* --------------------------------------------------------- */
/* ACTION                                                    */
/* --------------------------------------------------------- */

interface AdminActionProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

function AdminAction({
  number,
  title,
  description,
  href,
}: AdminActionProps) {
  return (
    <Link
      to={href}
      className="
        group
        min-h-56
        bg-white
        p-7
        transition
        hover:bg-[#101b3d]
      "
    >

      <p className="
        text-xs
        font-bold
        text-[#b6202a]
      ">
        {number}
      </p>

      <div className="mt-16">

        <h3 className="
          text-xl
          font-black
          tracking-tight
          text-[#101b3d]
          transition
          group-hover:text-white
        ">
          {title}
        </h3>

        <p className="
          mt-3
          max-w-xs
          text-sm
          leading-relaxed
          text-gray-500
          transition
          group-hover:text-gray-300
        ">
          {description}
        </p>

        <p className="
          mt-6
          font-bold
          text-[#b6202a]
        ">
          →
        </p>

      </div>

    </Link>
  );
}


/* --------------------------------------------------------- */
/* PUBLICATION ROW                                           */
/* --------------------------------------------------------- */

interface PublicationRowProps {
  title: string;
  type: string;
  status: string;
  date: string;
}

function PublicationRow({
  title,
  type,
  status,
  date,
}: PublicationRowProps) {
  return (
    <div className="
      grid
      gap-5
      border-b
      border-[#cfcfca]
      bg-white
      px-5
      py-6
      transition
      hover:bg-[#f1f1ef]
      md:grid-cols-[1fr_130px_130px_120px]
      md:items-center
    ">

      <p className="
        font-bold
        text-[#101b3d]
      ">
        {title}
      </p>

      <span className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.12em]
        text-gray-500
      ">
        {type}
      </span>

      <span
        className={`
          w-fit
          px-3
          py-1
          text-[10px]
          font-bold
          uppercase
          tracking-[0.12em]
          ${
            status === "Publicado"
              ? "bg-[#101b3d] text-white"
              : "border border-[#b6202a] text-[#b6202a]"
          }
        `}
      >
        {status}
      </span>

      <span className="
        text-xs
        text-gray-400
      ">
        {date}
      </span>

    </div>
  );
}
