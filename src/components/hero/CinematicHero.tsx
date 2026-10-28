"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { Arrow } from "./Arrow";
import { LogoReveal } from "./LogoReveal";
import { ProductScene } from "./ProductScene";
import { ActNavigation } from "./ActNavigation";
import { SceneAtmosphere } from "./SceneAtmosphere";
import { ACTS, STORY_DURATION } from "./acts";
import { useCinematicStory } from "./useCinematicStory";

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  useCinematicStory(root);
  return (
    <section ref={root} className="hero-track" id="experiencia" aria-labelledby="hero-title" aria-describedby="experience-summary" data-active-act="dark">
      <p className="sr-only" id="experience-summary">GO DIFFERENT. Uma experiência visual em três atos: café e luz âmbar, energia em rosa e uma nova perspectiva em verde. Bebidas e ingredientes conceituais, não oficiais. Use os links dos atos ou role para explorar.</p>
      <span className="act-anchor" id="ato-intensidade" style={{ "--act-progress": 0 } as CSSProperties} />
      <div className="hero-sticky">
        <LogoReveal />
        <div className="scene-window">
          <SceneAtmosphere />
          <header className="hero-nav hero-ui px-6 md:px-16">
            <a className="nav-brand" href="#experiencia" aria-label="Go Coffee — início"><Image className="nav-logo-white" src="/brand/gocoffee-wordmark-branco.svg" alt="" width={156} height={46} preload /><Image className="nav-logo-black" src="/brand/gocoffee-wordmark-preto.svg" alt="" width={156} height={46} aria-hidden="true" /></a>
            <nav aria-label="Navegação principal"><a href="#sabores">Explore os três atos</a><a href="#conceito">O conceito <Arrow diagonal /></a></nav>
          </header>
          <div className="hero-copy-stack">
            {ACTS.map((act) => <div key={act.id} className={`act-copy copy-${act.id}`} aria-hidden={act.id !== "dark" || undefined}>
              {act.id === "dark" ? <h1 id="hero-title" aria-label="GO DIFFERENT."><span className="headline-clip"><span className="headline-line">GO</span></span><span className="headline-clip"><span className="headline-line">DIFFERENT<span className="headline-dot">.</span></span></span></h1> : <p className="act-display">{act.title.map((line) => <span key={line} className="headline-clip"><span className="act-title-line">{line}</span></span>)}</p>}
              <p className="act-intro">{act.lines[0]}<br />{act.lines[1]}</p>
            </div>)}
          </div>
          <a className="hero-cta" href="#ato-energia"><span>Explore os três atos</span><span className="cta-arrow"><Arrow /></span></a>
          <div className="product-stage" aria-hidden="true"><div className="product-entrance"><div className="product-shadow" />{ACTS.map((act) => <ProductScene key={act.id} variant={act.id} decorative />)}</div></div>
          <div className="hero-bottom hero-ui"><ActNavigation /><a className="scroll-cue" href="#ato-energia">Role para transformar <Arrow /></a><p>Estudo independente — não oficial</p></div>
          <span className="vertical-caption hero-ui" aria-hidden="true">GO DIFFERENT. / XPACE LABS</span>
          <p className="product-disclaimer">Bebidas e ingredientes conceituais · não oficiais</p>
        </div>
      </div>
      {ACTS.slice(1).map((act) => <div className="static-act-wrap" key={act.id}>
        {act.id === "pink" && <span id="sabores" className="act-anchor" style={{ "--act-progress": act.at / STORY_DURATION } as CSSProperties} />}
        <span className="act-anchor" id={act.anchor} style={{ "--act-progress": act.at / STORY_DURATION } as CSSProperties} />
        <section className={`static-act static-${act.id}`} aria-labelledby={`static-${act.id}-title`}><div className="static-act-copy"><p className="static-act-label">Ato {act.number} / {act.name}</p><h2 id={`static-${act.id}-title`}>{act.title[0]}<br />{act.title[1]}</h2><p>{act.lines[0]}<br />{act.lines[1]}</p></div><ProductScene variant={act.id} /><p className="static-disclaimer">Bebida conceitual · não oficial</p></section>
      </div>)}
    </section>
  );
}
