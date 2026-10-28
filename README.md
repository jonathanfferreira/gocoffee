# GO DIFFERENT.

MVP cinematográfico independente XPACE LABS para apresentação à Go Coffee Brasil. **Não oficial.** Bebidas e ingredientes são conceituais, sem equivalência validada no cardápio.

## Executar

Requisitos: Node 20.9+ e Bun. Desenvolvido com Node 24 e Bun 1.4.4.

```powershell
bun install --frozen-lockfile
bun run dev
```

Abra [localhost:3000](http://127.0.0.1:3000). Use “Explore os sabores” ou role para mudar a atmosfera; role de volta para reverter.

```powershell
bun run lint
bun run typecheck
bun run build
bun run start
```

## Estrutura

- `src/components/hero/CinematicHero.tsx`: coordenação da abertura e da timeline de scroll, com limpeza via `gsap.matchMedia().revert()`.
- `ProductScene.tsx` e `LogoReveal.tsx`: bebidas e símbolo vetorial.
- `src/app/globals.css`: composição, tokens, camadas, responsive e fallback estático de movimento reduzido/sem JavaScript.
- `src/app/page.tsx`: Hero, duas seções simples de apoio e rodapé.
- `scripts/optimize-assets.mjs`: gera WebP dos PNGs sem modificar os originais (`bun run assets`).

Fontes locais, sem requisição a Google Fonts em runtime. Sem Three.js, scroll hijacking, API, analytics ou formulários. Página marcada `noindex` por ser estudo. SVGs em `public/brand/` devem permanecer idênticos aos fornecidos em `logos/`.

Leia [o briefing](PROJETO_GO_COFFEE_BRIEFING.md), [as ressalvas de identidade](LEIA-ME.md), [o escopo](PRODUCT.md) e [a direção visual](DESIGN.md) antes de expandir. Arquivos-mestre oficiais de marca e imagens de produtos aprovadas são necessários antes de uma eventual entrega oficial.

Capturas e evidências locais ficam em `artifacts/qa/` (ignoradas no Git). Este repositório é separado do Git do contêiner XPACE-LABS e tem como destino [jonathanfferreira/gocoffee](https://github.com/jonathanfferreira/gocoffee). Publicação na Vercel autorizada pelo usuário; o ambiente de deploy deve ser conferido na plataforma. Builds da Vercel usam Node 24 e o lockfile Bun versionado.
