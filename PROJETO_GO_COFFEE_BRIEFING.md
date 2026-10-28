# Briefing de desenvolvimento — GO DIFFERENT. / A Cinematic Experience

## 1. Contexto

Projeto-conceito independente e especulativo da **XPACE LABS** para apresentar à equipe da **Go Coffee Brasil**. Não é uma encomenda nem deve ser exibido como site oficial. O objetivo é demonstrar o potencial de um website cinematográfico, com storytelling, bebidas protagonistas, movimento sofisticado, identidade fiel e excelente performance. Referência de experiência: https://www.getlayers.ai/layer/brewns (inspiração de qualidade/ritmo, **não** reprodução de layout nem de animação).

Links de pesquisa e verificação: https://gocoffee.com.br/ ; https://www.instagram.com/gocoffeebrasil/ ; https://gocoffee.com.br/cardapio-n/ . O conteúdo e cardápio podem mudar; não criar preços, características ou disponibilidade sem confirmação.

## 2. Direção visual aprovada

**Híbrida: Vibrant Energy × Dark Premium**, com uma terceira camada Urban Experimental só para lifestyle.

- Dark Premium no início: preto profundo, dramatização de luz, atmosfera de estúdio.
- Vibrant Energy após revelação: cores energéticas e mutáveis por sabor; ingredientes, ritmo, tipografia grande.
- Urban Experimental: fotografia editorial e linguagem jovem nas cenas de cultura e movimento.
- Marca com preto/branco forte. Cores temáticas por produto e campanha (paleta provisória, não manual oficial).
- Slogan conceitual: `GO DIFFERENT.`. Conferir sempre mensagens oficiais antes de atribuí-las formalmente à marca.

Paleta de exploração (não afirmar que é oficial): `#101010`, `#F6F2E9`, `#FF4977`, `#F2A13B`, `#006D49`. Escolher cores por cena, manter contraste WCAG.

## 3. Identidade

As versões vetorizadas em `logos/` provêm EXCLUSIVAMENTE das duas imagens que o cliente forneceu. Use o símbolo da segunda imagem para a abertura. O logotipo tipográfico (wordmark) da primeira para navegação e rodapé. SVGs contêm paths reais; evitar aproximações em CSS, texto com fonte substituta ou ícones recriados com formas diferentes.

O símbolo externo e o nome devem conservar geometria e proporções. Com marca licenciada, não alegar vínculo ou autorização. Mostrar discreto `Concept by XPACE LABS · Estudo independente / Não oficial` no rodapé e/ou abertura.

## 4. Experiência — storyboard

**Cena A: Cold Open** — fundo preto quase absoluto, o símbolo GO branco surge centralizado. Movimento de entrada sutil, sem um loading artificial demorado. Revelação em escala do anel até ocupar o viewport; transição usando máscara circular/clip-path (ou SVG mask) para a próxima cena. Deve degradar graciosamente em mobile e reduced-motion.

**Cena B: Product Reveal** — um copo de bebida em destaque no lado direito do layout, luz âmbar, condensação e ingredientes flutuantes. Texto `GO DIFFERENT.` monumental, CTA para explorar. Não use IA para escrever novo logo dentro de imagem do produto; aplique o SVG autêntico como overlay só quando a perspectiva permitir, ou use copo genérico de conceito.

**Cena C: Flavor Transition** — em scroll, o ambiente muda para rosa vibrante, o produto dá lugar a outro, ingredientes aparecem em camadas e a tipografia acompanha. Primeira prova de conceito: 2 estados (café escuro ↔ bebida rosa), com opção de expandir para 3 bebidas. Use alternância de imagens recortadas e parallax com GSAP para MVP; Three.js apenas se houver ganho real.

**Cena D (fase 2): Product Collection** — cards e categoria interativa de produtos reais com nomes validados.

**Cena E (fase 2): Urban Lifestyle** — vídeo/fotografia editorial e manifesto de marca (apenas material autorizado ou claramente conceitual).

**Cena F (fase 2): CTA Lojas/Franquias** — orientação para caminhos reais do site oficial, sem inventar formulários ou links.

## 5. MVP — primeira entrega do Codex

**Entregar apenas o Hero e a primeira transição cinematográfica navegáveis**, não prometer site completo antes de validar isso.

Critérios de aceite:

1. Projeto real, executável e responsivo em Next.js (App Router) + TypeScript.
2. GSAP + ScrollTrigger com animação de abertura, símbolo GO e sequência scroll-controlled.
3. Bebida em destaque e transição tonal dark → vibrant com ingredientes em parallax.
4. Uso direto dos arquivos SVG fornecidos. Sem usar os screenshots de conceito como fundo estático que finge ser o site.
5. Rolagem normal funcional, sem ScrollTrigger quebrado ou tela capturada em branco; evitar scroll hijacking. CTA funcional (âncora para sabores).
6. Adaptação de mobile/tablet e `prefers-reduced-motion`; não ocultar conteúdo ou menus por animação.
7. Otimizar assets (`next/image`, WebP/AVIF quando apropriado), evitar 3D pesado no mobile, lazy-load fora da dobra.
8. Logo legível, acessibilidade de teclado, `alt`, contraste e boa leitura.
9. Rodar build/lint e verificar desktop e mobile com screenshots reais do frontend.
10. Incluir aviso discreto de conceito independente e não oficial.

## 6. Stack sugerida

Next.js (App Router), React, TypeScript, Tailwind CSS, GSAP/ScrollTrigger. Adicionar Three.js / React Three Fiber **somente** após protótipo visual aprovado ou quando necessário. Preferir movimento suave a quantidade excessiva de efeitos. Usar animação com transform/opacity quando possível, SVG masks para transições, CSS variables para temas.

## 7. Estrutura inicial sugerida

```
src/
  app/page.tsx
  app/globals.css
  components/hero/CinematicHero.tsx
  components/hero/LogoReveal.tsx
  components/hero/ProductScene.tsx
  components/hero/FlavorTransition.tsx
  lib/animation.ts
  data/products.ts
public/
  brand/*.svg
  images/concept/*
```

## 8. Materiais — ressalvas importantes

As referências de Hero já geradas são composições para aprovação estética, **não interfaces funcionais**. Os três recortes de bebida em `concept-assets/` são imagens geradas, com copos e ingredientes conceptuais, **não correspondências comprovadas do cardápio oficial**. Devem ser marcados no código como `placeholder`. Não reutilizar títulos, preços, fotos de franquias, textos de campanha, reels e postagens sem verificar autoria e autorização. Não clonar o site Brewns.

## 9. Processo de trabalho com Codex

1. Criar/revisar plano e design tokens.
2. Construir Hero e transição com assets fornecidos.
3. Testar em navegador com scroll, responsive e reduced-motion.
4. Registrar screenshots de antes/depois e corrigir alinhamento.
5. Apresentar resultado para aprovação visual.
6. Só então expandir para coleção de produtos, lifestyle e CTA.

**Não transformar o protótipo num template SaaS genérico.** Prioridade: composição editorial, timing, produto fotorealista e momentos memoráveis de movimento.
