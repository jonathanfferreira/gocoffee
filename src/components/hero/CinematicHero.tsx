"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Arrow";
import { LogoReveal } from "./LogoReveal";
import { ProductScene } from "./ProductScene";

gsap.registerPlugin(ScrollTrigger);

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  const didOpen = useRef(false);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add({ motion: "(prefers-reduced-motion: no-preference)", mobile: "(max-width: 700px)", desktop: "(min-width: 701px)" }, (context) => {
      if (!context.conditions?.motion) return;
      const mobile = context.conditions.mobile;
      const select = gsap.utils.selector(root);

      // O quadro adere via CSS; GSAP acompanha o scroll sem substituir a rolagem nativa.
      const transition = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.65, invalidateOnRefresh: true },
      });
      transition
        .to(".dark-light", { opacity: 0, duration: 0.65 }, 0.1)
        .to(".pink-atmosphere", { opacity: 1, duration: 0.65 }, 0.1)
        .to(".hero-foreground", { color: "#2d0c1c", duration: 0.6 }, 0.18)
        .to(".headline-dot", { color: "#2d0c1c", duration: 0.6 }, 0.18)
        .to(".nav-logo-white", { opacity: 0, duration: 0.35 }, 0.25)
        .to(".nav-logo-black", { opacity: 1, duration: 0.35 }, 0.25)
        .to(".product-dark", { xPercent: -12, yPercent: -14, rotation: -17, scale: 0.88, opacity: 0, duration: 0.42 }, 0.13)
        .fromTo(".product-stage .product-pink", { xPercent: 25, yPercent: 30, rotation: 17, scale: 0.88 }, { xPercent: 0, yPercent: 0, rotation: -6, scale: 1, opacity: 1, duration: 0.48 }, 0.35)
        .to(".scene-note-dark", { opacity: 0, y: -12, duration: 0.15 }, 0.29)
        .to(".scene-note-pink", { opacity: 1, y: 0, duration: 0.15 }, 0.5)
        .to(".bean", { y: mobile ? -90 : -220, x: -45, rotation: -65, opacity: 0, stagger: 0.025, duration: 0.5 }, 0.12)
        .fromTo(".berry", { y: 140, rotation: -40, scale: 0.75 }, { y: -45, rotation: 25, scale: 1, opacity: 1, stagger: 0.04, duration: 0.55 }, 0.31)
        .to(".ice", { y: -95, rotation: 70, duration: 0.8 }, 0.08)
        .to(".orbit", { rotation: 35, scale: 1.15, opacity: 0.4, duration: 0.85 }, 0.1)
        .to(".scene-progress-fill", { scaleX: 1, duration: 1 }, 0);

      // Não repetir a abertura ao mudar de breakpoint depois de uma âncora.
      const shouldOpen = !didOpen.current && window.scrollY < 60;
      didOpen.current = true;
      if (shouldOpen) {
        gsap.set(select(".logo-reveal"), { visibility: "visible" });
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .fromTo(select(".opening-symbol"), { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.28 })
          .to(select(".opening-symbol"), { scale: 16, opacity: 0, duration: 0.7, ease: "power3.inOut" }, 0.28)
          .fromTo(select(".scene-window"), { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", duration: 0.85, clearProps: "clipPath", ease: "power3.inOut" }, 0.4)
          .set(select(".logo-reveal"), { visibility: "hidden" }, 0.95)
          .from(select(".product-entrance"), { y: 60, rotation: 5, opacity: 0, duration: 0.9 }, 0.7)
          .from(select(".headline-line"), { yPercent: 102, stagger: 0.09, duration: 0.75 }, 0.78)
          .from(select(".hero-intro, .hero-cta"), { y: 18, opacity: 0, stagger: 0.06, duration: 0.5 }, 1.05);
      }
      return () => { /* matchMedia restaura estilos e remove os ScrollTriggers desta cena. */ };
    }, root);
    return () => {
      media.revert();
      // Strict Mode remonta o efeito no desenvolvimento; a segunda abertura precisa ficar completa.
      didOpen.current = false;
    };
  }, []);

  return (
    <section ref={root} className="hero-track" id="experiencia" aria-labelledby="hero-title">
      <div id="sabores" className="flavor-anchor" aria-hidden="true" />
      <div className="hero-sticky">
        <LogoReveal />
        <div className="scene-window">
          <div className="dark-light" aria-hidden="true" />
          <div className="pink-atmosphere" aria-hidden="true" />
          <div className="orbit orbit-outer" aria-hidden="true" />
          <div className="orbit orbit-inner" aria-hidden="true" />
          <header className="hero-nav hero-foreground px-6 md:px-16">
            <a className="nav-brand" href="#experiencia" aria-label="Go Coffee — início"><Image className="nav-logo-white" src="/brand/gocoffee-wordmark-branco.svg" alt="" width={156} height={46} preload /><Image className="nav-logo-black" src="/brand/gocoffee-wordmark-preto.svg" alt="" width={156} height={46} aria-hidden="true" /></a>
            <nav aria-label="Navegação principal"><a href="#sabores">Explore os sabores</a><a href="#conceito">O conceito <Arrow diagonal /></a></nav>
          </header>
          <div className="hero-foreground">
            <div className="hero-copy">
              <h1 id="hero-title" aria-label="GO DIFFERENT."><span className="headline-clip"><span className="headline-line">GO</span></span><span className="headline-clip"><span className="headline-line">DIFFERENT<span className="headline-dot">.</span></span></span></h1>
              <p className="hero-intro">Mude a perspectiva.<br />Explore outra atmosfera.</p>
              <a className="hero-cta" href="#sabores"><span>Explore os sabores</span><span className="cta-arrow"><Arrow /></span></a>
            </div>
            <div className="scene-label"><span className="scene-note-dark">A intensidade encontra a luz.</span><span className="scene-note-pink">A cor muda tudo.</span></div>
            <div className="hero-bottom"><div className="scene-index"><span>01</span><div className="scene-progress"><i className="scene-progress-fill" /></div><span>02</span></div><a className="scroll-cue" href="#sabores">Role para transformar <Arrow /></a><p>Estudo independente — não oficial</p></div>
            <span className="vertical-caption" aria-hidden="true">UMA EXPLORAÇÃO XPACE LABS</span>
          </div>
          <div className="product-stage"><div className="product-entrance"><div className="product-shadow" /><ProductScene variant="dark" /><ProductScene variant="pink" /></div></div>
          <div className="ingredients" aria-hidden="true">
            <i className="bean bean-one" /><i className="bean bean-two" /><i className="bean bean-three" /><i className="bean bean-four" />
            <i className="berry berry-one" /><i className="berry berry-two" /><i className="berry berry-three" />
            <i className="ice ice-one" /><i className="ice ice-two" />
          </div>
          <p className="product-disclaimer">Imagem conceitual · bebida ilustrativa</p>
        </div>
      </div>
      <section className="static-pink" aria-labelledby="static-pink-title"><div><h2 id="static-pink-title">A cor<br />muda tudo.</h2><p>Outra atmosfera. O mesmo GO.</p></div><ProductScene variant="pink" /></section>
    </section>
  );
}
