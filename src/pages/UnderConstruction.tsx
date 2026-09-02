import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">
          🚧
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          Página em Construção!
        </h1>

        <p className="mt-4 text-gray-600">
          Estamos preparando este conteúdo. Em breve esta página estará disponível.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}