# Pôsteres do CONIC 2026

Os PDFs definitivos de Lorenzo e Hugo foram preservados sem alterações.
Nicolas e Igor têm cópias de exemplo com tarja de conteúdo provisório. Gabriel aparece junto com Hugo no trabalho sobre cluster e AWS.

## Substituir um pôster

Salve o PDF definitivo por cima do arquivo correspondente em `public/conic2026/posters/`:

- `lorenzo-calabrese-circelli.pdf`
- `hugo-franca.pdf`
- `nicolas-giussani-vieira.pdf`
- `igor-palazzo.pdf`

Com `npm run dev` aberto, a prévia é gerada novamente automaticamente. O build também verifica os PDFs e gera as prévias que mudaram. Um PDF definitivo novo perde a marca de provisório automaticamente; os PDFs de exemplo são identificados por um campo próprio nos metadados.

Para regenerar manualmente: `npm run conic:previews`.

Para PDFs alterados, é necessário ter o Poppler (`pdftoppm`) instalado na máquina que gera as prévias. As prévias e o manifesto já estão incluídos no projeto: um build sem mudanças nos PDFs não precisa do conversor.

Títulos, nomes dos autores, resumos e associação às fotos ficam em `src/data/conic2026.ts`. Os dois espaços reservados ainda precisam dessas informações quando seus PDFs forem enviados. A troca do PDF não extrai automaticamente título e autores.

Ao enviar atualizações ao repositório, inclua os PDFs, as imagens de `public/conic2026/previews/` e o manifesto `src/data/conic2026-assets.json`.
