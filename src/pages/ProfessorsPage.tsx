import MemberCard from "../components/MemberCard";
import { professors } from "../lib/members";
import { Link } from "react-router-dom";
export default function ProfessorsPage() {
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

        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Nossa equipe
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Professores
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Conheça os professores e pesquisadores responsáveis pelas
            atividades de pesquisa, orientação e desenvolvimento do
            laboratório.
          </p>
        </header>

        {professors.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {professors.map((professor) => (
              <MemberCard
                key={professor.slug}
                member={professor}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="text-6xl">
              🤖
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">
              Nenhum professor cadastrado
            </h2>

            <p className="mt-2 text-gray-600">
              Os membros serão adicionados em breve.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}