#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_DIR/backend"
PYTHON="$BACKEND_DIR/.venv/bin/python"
VITE="$PROJECT_DIR/node_modules/.bin/vite"
ADMIN_URL="http://127.0.0.1:5173/admin"

if [[ ! -x "$PYTHON" ]]; then
  echo "Backend não configurado. Crie backend/.venv e instale requirements.txt."
  exit 1
fi

if [[ ! -x "$VITE" ]]; then
  echo "Frontend não configurado. Execute npm install na raiz do projeto."
  exit 1
fi

BACKEND_PID=""
FRONTEND_PID=""

cleanup() {
  echo
  echo "Encerrando frontend e backend..."
  [[ -n "$FRONTEND_PID" ]] && kill "$FRONTEND_PID" 2>/dev/null || true
  [[ -n "$BACKEND_PID" ]] && kill "$BACKEND_PID" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

"$PYTHON" -m uvicorn app.main:app \
  --app-dir "$BACKEND_DIR" \
  --reload \
  --host 127.0.0.1 \
  --port 8000 &
BACKEND_PID=$!

"$VITE" \
  --host 127.0.0.1 \
  --port 5173 \
  --strictPort &
FRONTEND_PID=$!

echo "Aguardando o CMS iniciar..."

for _ in {1..30}; do
  if curl --silent --fail "http://127.0.0.1:8000/api/v1/health" >/dev/null \
    && curl --silent --fail "$ADMIN_URL" >/dev/null; then
    break
  fi
  sleep 1
done

if ! curl --silent --fail "http://127.0.0.1:8000/api/v1/health" >/dev/null \
  || ! curl --silent --fail "$ADMIN_URL" >/dev/null; then
  echo "Não foi possível iniciar o CMS. Confira as mensagens acima."
  exit 1
fi

echo "Abrindo $ADMIN_URL"

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$ADMIN_URL" >/dev/null 2>&1 &
elif command -v gio >/dev/null 2>&1; then
  gio open "$ADMIN_URL" >/dev/null 2>&1 &
else
  echo "Abra manualmente: $ADMIN_URL"
fi

echo "CMS em execução. Pressione Ctrl+C para encerrar."
wait -n "$BACKEND_PID" "$FRONTEND_PID"
