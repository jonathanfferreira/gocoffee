import Image from "next/image";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { Arrow } from "@/components/hero/Arrow";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#experiencia">Pular para a experiência</a>
      <main>
        <CinematicHero />
        <section className="manifesto px-6 md:px-16" id="conceito" aria-labelledby="concept-title">
          <div className="manifesto-heading"><h2 id="concept-title">O mesmo GO.<br /><span>Outra atmosfera.</span></h2><svg className="concept-asterisk" width="100" height="100" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" stroke="currentColor" strokeWidth="10" /></svg></div>
          <div className="manifesto-bottom"><p>Uma exploração de cor, forma e movimento.<br />Um novo olhar para a experiência digital.</p><p className="concept-caption">Estudo visual XPACE LABS<br />Bebidas e ingredientes conceituais.</p></div>
        </section>
        <section className="next-chapter px-6 md:px-16" aria-labelledby="next-title">
          <h2 id="next-title">O próximo capítulo<br />começa com um <span>GO.</span></h2>
          <a className="text-link" href="https://gocoffee.com.br/" target="_blank" rel="noopener noreferrer">Conheça a Go Coffee no site oficial <Arrow diagonal /><span className="sr-only"> (abre em nova aba)</span></a>
        </section>
      </main>
      <footer className="site-footer px-6 md:px-16">
        <a href="#experiencia" aria-label="Go Coffee — voltar ao início"><Image src="/brand/gocoffee-wordmark-branco.svg" alt="Go Coffee" width={142} height={42} /></a>
        <p>Conceito independente XPACE LABS — não oficial</p>
        <a className="back-top" href="#experiencia">Voltar ao topo <Arrow up /></a>
      </footer>
    </>
  );
}
