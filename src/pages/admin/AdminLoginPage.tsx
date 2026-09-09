import { useState } from "react";
import type { SubmitEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "7891214";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authenticated =
    sessionStorage.getItem("lira_admin_authenticated") === "true";

  if (authenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (
      username === ADMIN_USERNAME &&
      password === ADMIN_PASSWORD
    ) {
      sessionStorage.setItem(
        "lira_admin_authenticated",
        "true"
      );

      navigate("/admin/dashboard");
      return;
    }

    setError("Usuário ou senha incorretos.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200 px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            LIRA
          </p>

          <h1 className="mt-2 text-3xl font-bold text-black">
            Administração
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-gray-800">
            Acesse o painel para gerenciar notícias,
            tutoriais, membros e arquivos do laboratório.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-gray-300 p-8 shadow-2xl"
        >
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-300"
            >
              Usuário
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              placeholder="Digite seu usuário"
              autoComplete="username"
              required
              className="
                mt-2
                w-full
                rounded-xl
                bg-gray-400
                px-4
                py-3
                text-white
                outline-none
                transition
                placeholder:text-gray-500
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              "
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-300"
            >
              Senha
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Digite sua senha"
              autoComplete="current-password"
              required
              className="
                mt-2
                w-full
                rounded-xl
                bg-gray-400
                px-4
                py-3
                text-white
                outline-none
                transition
                placeholder:text-gray-500
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10
              "
            />
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-900/50 bg-red-950/40 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="
              mt-7
              w-full
              rounded-xl
              bg-blue-600
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-500
              active:scale-[0.99]
            "
          >
            Entrar no painel
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-600">
          Painel administrativo do LIRA
        </p>
      </div>
    </main>
  );
}
