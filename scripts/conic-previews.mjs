import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const slugs = ['lorenzo-calabrese-circelli', 'hugo-franca', 'nicolas-giussani-vieira', 'igor-palazzo'];
const manifestPath = path.join(root, 'src/data/conic2026-assets.json');
const previous = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
const manifest = {};
for (const slug of slugs) {
  const pdf = path.join(root, `public/conic2026/posters/${slug}.pdf`);
  const bytes = readFileSync(pdf);
  const version = createHash('sha256').update(bytes).digest('hex').slice(0, 12);
  const output = path.join(root, `public/conic2026/previews/${slug}`);
  if (previous[slug]?.version !== version || !existsSync(`${output}.jpg`)) {
    try {
      execFileSync('pdftoppm', ['-f', '1', '-singlefile', '-scale-to', '1600', '-jpeg', '-jpegopt', 'quality=88', pdf, output], { stdio: 'pipe' });
    } catch (error) {
      throw new Error(`Não foi possível gerar a prévia de ${slug}. Instale o Poppler (pdftoppm) e execute npm run conic:previews.`, { cause: error });
    }
  }
  manifest[slug] = { version, placeholder: bytes.includes(Buffer.from('/LIRAPlaceholder')) };
}
const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
if (!existsSync(manifestPath) || readFileSync(manifestPath, 'utf8') !== serialized) writeFileSync(manifestPath, serialized);
