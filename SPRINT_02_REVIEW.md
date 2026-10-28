# Sprint 02 — Product Experience

Implementação pronta para revisão de **prévia**. Não promover ou mesclar em `main` antes da revisão pelo usuário. O commit de produção ao início desta sprint era `293c506a7a6a7331a39e5fe38ae4bee298e50650`.

## Auditoria e mudanças

| Implementação anterior | Tratamento nesta sprint |
| --- | --- |
| Abertura e scrub em relógios independentes | Primeiro scroll significativo conclui a abertura; wrapper de entrada separado da câmera por ato |
| Âncora de sabor em posição fixa de viewport | Rótulos e âncoras compartilham `acts.ts` e a duração virtual da timeline |
| Duas bebidas e ingredientes estilizados em CSS | Três atos com pausas, transições de texto/luz/câmera e atlas fotográfico conceitual |
| Marca alinhada ao container com `object-fit` | Bebida e SVG sobrepostos no mesmo canvas 2:3 |
| Cenas invisíveis ainda expostas a leitores de tela | Palco animado decorativo, descrição estável e três atos estáticos acessíveis |
| Altura mínima maior que telas curtas | Composição específica para mobile curto e landscape |

Preservados: abertura vetorial GO, GO DIFFERENT., fontes, SVGs, proporções das marcas, rolagem nativa e seções de apoio. Uma timeline GSAP com `matchMedia().revert()`; sem renderer 3D ou dependência nova de produção. Playwright foi adicionado apenas para desenvolvimento.

## Narrativa

1. **Intensidade:** café em luz âmbar; câmera sai do detalhe para o enquadramento.
2. **Energia:** varredura diagonal, atmosfera rosa e ingredientes em contramovimento.
3. **Novo olhar:** a energia se recolhe, a luz verde abre a composição e a câmera assenta.

Os valores da timeline são unidades de progresso, não segundos de filme. Todos os movimentos seguem a mesma régua para reversão. Não há autoplay contínuo depois da abertura nem bloqueio da rolagem.

## Verificações executadas

- Lint, TypeScript e build: passaram.
- Playwright: 8/8 no build de produção local; desktop/mobile, navegação nos dois sentidos, scroll durante a abertura, teclado, viewport curto e troca de movimento reduzido.
- Next MCP: nenhuma falha de compilação ou runtime na verificação do desenvolvimento.
- Browser: três atos e imagens carregando; sem erros de console na passagem final. Composição revista em 1440×900, 390×844 e 844×390.
- JavaScript desativado: cenas estáticas rosa/verde presentes, sem overflow horizontal.
- Hashes dos oito SVGs em `public/brand/`: idênticos aos de `logos/`.
- Detector visual: nenhum apontamento mecânico. Revisor independente aprovou a prévia e confirmou o contraste da navegação sobre a bebida e os recortes do atlas.

## Desempenho — Lighthouse 13.6.0 local

| Perfil | MVP anterior | Sprint 02 | Acessibilidade | LCP final | CLS final | TBT final |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile simulado | 97 | 92 | 100 | 3,3 s | 0,027 | 10 ms |
| Desktop | 100 | 99 | 100 | 0,7 s | 0,040 | 0 ms |

A primeira versão da sprint caiu a 84 no mobile. A correção reduziu o atlas mobile de 223 KB para 89 KB e trocou o fundo CSS de alta prioridade por `picture` de baixa prioridade. A bebida principal recebe prioridade alta; as demais, baixa. Relatórios de todas as etapas permanecem localmente em `artifacts/qa/`, ignorados no Git. O LCP mobile ainda está acima de 2,5 s: esta é uma limitação conhecida, não um resultado perfeito de desempenho.

Diagnóstico complementar de scroll com CPU 4× mais lenta, 240 amostras: mediana de intervalo rAF 15,2 ms, p95 36,2 ms, uma amostra acima de 50 ms e nenhuma long task observada. É simulação em Chromium desktop, sem garantia de 60 fps em telefone real. Safari/iPhone físico não foram testados.

## Assets e limites

As três bebidas fornecidas continuam conceituais. O atlas foi gerado com Image Gen integrado; fonte e prompt estão em `concept-assets/sprint02/README.md`. Não é prova de produtos, receitas ou embalagens oficiais. A aplicação frontal do símbolo também é conceitual. Não foram geradas novas logomarcas ou alterados os traçados existentes.
