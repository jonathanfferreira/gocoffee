# GO COFFEE × XPACE LABS — Kit de marca vetorizado

**Finalidade:** material de estudo para uma apresentação comercial não oficial da XPACE LABS.

## O que foi entregue

`logos/` contém sete SVGs com curvas e contornos vetoriais reais (sem imagens raster embutidas):

- `gocoffee-logo-completo-preto.svg` — lockup completo da referência enviada, para fundo claro.
- `gocoffee-logo-completo-branco.svg` — versão monocromática branca para fundo escuro.
- `gocoffee-wordmark-preto.svg` — apenas o nome, em preto.
- `gocoffee-wordmark-branco.svg` — apenas o nome, em branco.
- `gocoffee-simbolo-preto.svg` — símbolo GO isolado, da segunda imagem, em preto.
- `gocoffee-simbolo-branco.svg` — símbolo GO isolado, da segunda imagem, em branco.
- `gocoffee-simbolo-currentColor.svg` — variante do símbolo que herda `currentColor` quando usada inline no HTML/React.
- `gocoffee-simbolo-original-preto.svg` — extração alternativa do símbolo da primeira imagem (difere em espessura/proporção).

As formas foram reconstruídas por traçado de contornos das imagens fornecidas, e **não redesenhadas com outra fonte**. O fundo dos SVGs é transparente. Não possuem `<image>` ou bitmap embutido.

`previews/` contém PNGs de conferência (não são a fonte vetorial).

`source-raster/` contém as imagens fornecidas, guardadas para conferir fidelidade.

`concept-assets/` contém renderizações de bebidas geradas para exploração visual: **não são fotos oficiais nem comprovam que esses produtos/embalagens existem exatamente assim**.

`references/` contém direções de Hero feitas durante a exploração criativa.

## Cuidados

Vetorização de um PNG é uma **reconstrução aproximada**, não substitui arquivos-mestre oficiais (AI, SVG ou EPS). Antes da entrega definitiva à Go Coffee, solicitar os arquivos de identidade e validar espessuras, espaçamentos e curvas. Não alterar as proporções das marcas. O projeto é um conceito independente da XPACE LABS e não tem endosso oficial da Go Coffee.

## Uso em Next.js

Copie `logos/` para `public/brand/` e importe assim:

```tsx
<img src="/brand/gocoffee-simbolo-branco.svg" alt="Go Coffee" width={96} height={96} />
```

O SVG em `currentColor` foi preparado para ser inserido **inline** (por exemplo, como componente React) e permitir animações de cor. Para escala e translação por GSAP, versões como arquivos externos também funcionam.
