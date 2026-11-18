import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

function conicPosterPreviews(): Plugin {
  const script = new URL('./scripts/conic-previews.mjs', import.meta.url).href;
  const posters = fileURLToPath(new URL('./public/conic2026/posters/', import.meta.url));
  const generate = () => import(`${script}?run=${Date.now()}`);
  return {
    name: 'conic-poster-previews',
    async buildStart() { await generate(); },
    configureServer(server) {
      let queue = Promise.resolve();
      server.watcher.add(posters);
      const onChange = (event: string, file: string) => {
        if (!['add', 'change'].includes(event) || !file.startsWith(posters) || !file.endsWith('.pdf')) return;
        queue = queue.then(async () => {
          await generate();
          server.ws.send({ type: 'full-reload' });
        }).catch((error: Error) => { server.config.logger.error(error.message); });
      };
      server.watcher.on('all', onChange);
      server.httpServer?.once('close', () => server.watcher.off('all', onChange));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), conicPosterPreviews()],
})
