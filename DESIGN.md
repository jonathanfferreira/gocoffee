# Direção do MVP

Direção aprovada no briefing: **Dark Premium → Vibrant Energy**. Urban Experimental permanece reservado ao futuro lifestyle; não foi criada uma seção editorial com imagens sem autorização.

- Fundo inicial `#101010`, texto `#F6F2E9`, luz de estúdio âmbar. Cena rosa com `#FF4977`, luz `#FFC2C7` e texto vinho `#2D0C1C`. Paleta exploratória, sem atribuição a manual oficial.
- Anton 400 para `GO DIFFERENT.`, DM Sans 400/500 para interface. Fontes servidas localmente por Fontsource. Desktop com composição assimétrica, bebida à direita e título à esquerda; mobile empilha título e bebida com sobreposição controlada.
- Logos vetoriais originais, sem substituição por texto ou redesenho. Alternância entre as versões branca e preta na navegação. Sobreposição do símbolo frontal no copo é apenas aplicação conceitual.
- Abertura: símbolo de 0–280ms; escala e revelação circular até ~1,25s; produto, título e CTA entram em sobreposição até ~1,6s. O conteúdo existe no HTML antes da animação.
- Scroll: faixa de 280svh (255svh mobile), palco `sticky`, timeline GSAP com scrub de 0,65s. Saída da bebida escura antes da entrada rosa; atmosfera, texto e ingredientes acompanham a mudança. Camadas de bebida e entrada são separadas para evitar disputa de transformações. Todo o percurso é reversível.
- Movimento reduzido: sem abertura, parallax ou palco sticky; cenas escura e rosa em sequência. Hover apenas em ponteiro preciso. Foco de teclado visível.
- Imagens originais preservadas; duas versões WebP com alpha em `public/images/concept/`, entregues por `next/image`. Ingredientes CSS são elementos cenográficos ilustrativos, sem afirmação de receita real.

Referência de ritmo e materialidade: [Brewns](https://www.getlayers.ai/layer/brewns). Estudos locais em `references/` orientam luz e escala; não são usados como fundo da interface.
