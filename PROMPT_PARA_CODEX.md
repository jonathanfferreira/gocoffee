# Prompt pronto para Codex — primeira tarefa

> Cole o texto abaixo em um chat de desenvolvimento Codex, anexando este pacote de assets ou colocando-o na pasta do repositório.

Você é o desenvolvedor criativo e motion engineer de um site-conceito independente da XPACE LABS para a Go Coffee Brasil. Quero construir uma experiência *premium, cinematográfica e responsiva*, não um site de template.

Leia integralmente `PROJETO_GO_COFFEE_BRIEFING.md` e `LEIA-ME.md`. Verifique os SVGs de `logos/` e os estudos de Hero em `references/`, sem copiar os estudos literalmente como imagens estáticas. A direção aprovada é **Dark Premium na abertura + Vibrant Energy nas interações com bebidas + toques Urban Experimental em lifestyle**. A referência de sofisticação/ritmo é https://www.getlayers.ai/layer/brewns , mas o visual e as interações precisam ter identidade própria, sem clonagem.

**Tarefa neste ciclo:** construir um MVP funcional e refinado do HERO de uma página: 1) abertura escura com o monograma GO branco vetorial, 2) animação rápida e precisa de escala/revelação do círculo usando GSAP, 3) entrada de uma bebida com luz de estúdio, 4) tipografia `GO DIFFERENT.` e CTA, 5) uma transição interativa controlada por scroll da bebida escura para bebida rosa com mudança de atmosfera, camadas/ingredientes e movimento de profundidade. Mantenha o resto da página como seções simples para haver scroll natural; não implemente o site completo antes da validação.

Stack: Next.js App Router, TypeScript, Tailwind e GSAP + ScrollTrigger. Use Three.js somente se for justificável e garantir performance; imagens transparentes animadas em camadas podem ser o MVP. Aproveite `logos/` em `public/brand/` com fidelidade geométrica. As imagens em `concept-assets/` são *placeholders conceptuais*, não fotos oficiais de produtos. No rodapé, incluir `Conceito independente XPACE LABS — não oficial`.

Requisitos: desktop cinematográfico, mobile polido, `prefers-reduced-motion`, animações limpas e reversíveis pelo scroll, contraste, acessibilidade, performance e boa tipografia. Não invente preços, descrições, logomarcas ou afirmações comerciais. Não basta gerar apenas JSX: execute o projeto, rode lint/build, abra a página no navegador se possível, confira imagens e transições e corrija problemas antes de apresentar.

Primeiro responda com plano enxuto (componentes, timeline de animação, uso de assets e critérios de aceite); em seguida implemente o MVP no repositório. O foco é uma demo que possa impressionar a equipe da Go Coffee em um pitch da XPACE LABS.
