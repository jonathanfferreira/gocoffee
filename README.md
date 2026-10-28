# GO DIFFERENT.

Product Experience da Sprint 02: três atos cinematográficos independentes XPACE LABS para apresentação à Go Coffee Brasil. **Não oficial.** Bebidas e ingredientes são conceituais, sem equivalência validada no cardápio. A produção anterior permanece preservada até a revisão da prévia desta sprint.

## Executar

Requisitos: Node 24 e Bun. Desenvolvido com Bun 1.4.4.

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

Para os testes de navegação, use um servidor de produção local e Chrome instalado:

```powershell
bun run build
bun run start --port 3002
# Em outro terminal:
$env:GO_COFFEE_QA_URL='http://127.0.0.1:3002'
bun run test:e2e
```

A suíte cobre desktop/mobile, três atos para frente e para trás, interrupção da abertura, teclado, viewport curto e troca de movimento reduzido. Relatórios e capturas ficam ignorados no Git. Lighthouse compara o build local com a medição inicial; resultados de desktop com throttling não representam testes em telefone físico.

## Estrutura

- `src/components/hero/CinematicHero.tsx`: composição do palco, navegação por ato e sequência estática acessível.
- `useCinematicStory.ts`: abertura e uma timeline de scroll com limpeza via `gsap.matchMedia().revert()`.
- `acts.ts`: três atos, âncoras e pausas de leitura; `SceneAtmosphere.tsx`: ingredientes, partículas e luzes.
- `ProductScene.tsx` e `LogoReveal.tsx`: bebidas e símbolo vetorial.
- `src/app/globals.css`: composição, tokens, camadas, responsive e fallback estático de movimento reduzido/sem JavaScript.
- `src/app/page.tsx`: Hero, duas seções simples de apoio e rodapé.
- `scripts/optimize-assets.mjs`: gera WebP dos PNGs sem modificar os originais (`bun run assets`).

Fontes locais, sem requisição a Google Fonts em runtime. Sem Three.js, scroll hijacking, API, analytics ou formulários. Página marcada `noindex` por ser estudo. SVGs em `public/brand/` devem permanecer idênticos aos fornecidos em `logos/`.

Leia [o briefing](PROJETO_GO_COFFEE_BRIEFING.md), [as ressalvas de identidade](LEIA-ME.md), [o escopo](PRODUCT.md) e [a direção visual](DESIGN.md) antes de expandir. Arquivos-mestre oficiais de marca e imagens de produtos aprovadas são necessários antes de uma eventual entrega oficial.

Capturas e evidências locais ficam em `artifacts/qa/` (ignoradas no Git). Este repositório é separado do Git do contêiner XPACE-LABS e tem como destino [jonathanfferreira/gocoffee](https://github.com/jonathanfferreira/gocoffee). Publicação na Vercel autorizada pelo usuário; o ambiente de deploy deve ser conferido na plataforma. Builds da Vercel usam Node 24 e o lockfile Bun versionado.
