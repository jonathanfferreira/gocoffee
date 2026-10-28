# Direção do Product Experience — Sprint 02

Direção aprovada no briefing: **Dark Premium → Vibrant Energy**. Urban Experimental permanece reservado ao futuro lifestyle; não foi criada uma seção editorial com imagens sem autorização.

- Fundo inicial `#101010`, texto `#F6F2E9`, luz de estúdio âmbar. Cena rosa de `#F34578` a `#FFC4C8` e texto vinho `#2D0C1C`. Terceiro ato de `#08251F` a `#71936E`, texto marfim e luz verde fria. Paleta exploratória, sem atribuição a manual oficial.
- Anton 400 para `GO DIFFERENT.`, DM Sans 400/500 para interface. Fontes servidas localmente por Fontsource. Desktop com composição assimétrica, bebida à direita e título à esquerda; mobile empilha título e bebida com sobreposição controlada.
- Logos vetoriais originais, sem substituição por texto ou redesenho. Alternância entre as versões branca e preta na navegação. Sobreposição do símbolo frontal no copo é apenas aplicação conceitual.
- Abertura: símbolo de 0–280ms; escala e revelação circular até ~1,25s; produto, título e CTA entram em sobreposição até ~1,6s. O conteúdo existe no HTML antes da animação.
- Scroll: faixa de 430svh (390svh mobile), palco `sticky`, uma timeline GSAP com scrub de 0,45s. Régua virtual de 0 a 3,4: âmbar no começo, varredura diagonal entre 0,7 e 1,32; pausa rosa no rótulo 1,5; recolhimento e luz verde entre 2,04 e 2,84; último enquadramento em 2,95. As unidades pertencem ao progresso do scroll, não a segundos de filme. Âncoras derivam dos mesmos rótulos em `acts.ts`. Ao rolar durante a abertura, ela termina antes de a narrativa avançar. Camadas de abertura e câmera permanecem separadas. Todo o percurso é reversível.
- Movimento reduzido: sem abertura, parallax ou palco sticky; cenas escura, rosa e verde em sequência. Hover apenas em ponteiro preciso. Foco de teclado visível. Cópias de cena animadas são decorativas; uma descrição estável descreve os três atos para tecnologia assistiva.
- Imagens originais preservadas; três versões WebP com alpha em `public/images/concept/`, entregues por `next/image`. Bebida e aplicação vetorial compartilham canvas 2:3, preservando alinhamento em toda proporção de viewport. Ingredientes fotográficos conceituais vêm de um atlas 3×3 com transparência; luzes e partículas são camadas cenográficas de CSS. Não há afirmação de receita real. Proveniência em `concept-assets/sprint02/README.md`.

Referência de ritmo e materialidade: [Brewns](https://www.getlayers.ai/layer/brewns). Estudos locais em `references/` orientam luz e escala; não são usados como fundo da interface.
