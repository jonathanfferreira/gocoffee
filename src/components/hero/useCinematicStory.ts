"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ACTS, STORY_DURATION, type ActId } from "./acts";

gsap.registerPlugin(ScrollTrigger);

export function useCinematicStory(root: RefObject<HTMLElement | null>) {
  const didOpen = useRef(false);
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    const select = gsap.utils.selector(element);
    let currentAct: ActId | undefined;
    const showAct = (id: ActId) => {
      if (currentAct === id) return;
      currentAct = id;
      element.dataset.activeAct = id;
      element.querySelectorAll<HTMLAnchorElement>("[data-nav-act]").forEach((link) => {
        if (link.dataset.navAct === id) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
    };

    media.add({ motion: "(prefers-reduced-motion: no-preference)", mobile: "(max-width: 700px)", desktop: "(min-width: 701px)" }, (context) => {
      if (!context.conditions?.motion) { showAct("dark"); return; }
      const mobile = context.conditions.mobile;
      let opening: gsap.core.Timeline | undefined;
      const story = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: "go-product-story", trigger: element, start: "top top", end: "bottom bottom", scrub: 0.45, invalidateOnRefresh: true,
          onUpdate: (self) => {
            // O primeiro scroll termina a abertura sem bloquear a rolagem nativa.
            if (self.scroll() > 60 && opening && opening.progress() < 1) opening.progress(1);
          },
        },
        onUpdate: function () { showAct(this.time() >= 2.34 ? "green" : this.time() >= 1.02 ? "pink" : "dark"); },
      });
      ACTS.forEach((act) => story.addLabel(act.id, act.at));
      story
        // Ato I: detalhe, enquadramento e luz âmbar. Camadas de abertura ficam no wrapper externo.
        .fromTo(".product-stage [data-product='dark'] .product-camera", { scale: 1.07, rotation: 9, yPercent: 3 }, { scale: 1, rotation: 6, yPercent: 0, duration: 0.52 }, 0)
        .to(".beam-amber", { xPercent: -24, rotation: -11, opacity: 0.65, duration: 0.62 }, 0)
        .to(".stage-halo", { rotation: -12, scale: 1.08, duration: 0.72 }, 0)
        // Ato II: varredura diagonal e câmera em contramovimento; pausa de leitura após a entrada.
        .fromTo(".pink-atmosphere", { clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)" }, { clipPath: "polygon(0% 0,100% 0,100% 100%,-30% 100%)", duration: 0.62 }, 0.7)
        .to(".dark-atmosphere", { opacity: 0, duration: 0.35 }, 1.08)
        .to(".product-stage [data-product='dark'] .product-camera", { xPercent: -26, yPercent: -7, rotation: -19, scale: 1.17, duration: 0.52 }, 0.72)
        .to(".product-stage [data-product='dark']", { opacity: 0, duration: 0.22 }, 1.02)
        .to(".copy-dark", { opacity: 0, y: -28, duration: 0.23 }, 0.83)
        .fromTo(".copy-pink", { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: 0.31 }, 1.09)
        .fromTo(".product-stage [data-product='pink'] .product-camera", { xPercent: 32, yPercent: 24, rotation: 23, scale: 0.88 }, { xPercent: 0, yPercent: 0, rotation: -8, scale: 1.03, duration: 0.57 }, 0.89)
        .to(".product-stage [data-product='pink']", { opacity: 1, duration: 0.28 }, 1.05)
        .to(".beam-amber", { opacity: 0, duration: 0.25 }, 0.82)
        .fromTo(".beam-pink", { xPercent: 35, opacity: 0 }, { xPercent: -4, opacity: 0.7, duration: 0.5 }, 0.91)
        .fromTo(".light-sweep", { xPercent: 110, opacity: 0 }, { xPercent: -150, opacity: 0.22, duration: 0.5 }, 0.78)
        .to(".light-sweep", { opacity: 0, duration: 0.12 }, 1.22)
        .to(".ingredient-dark", { y: mobile ? -95 : -210, x: -55, rotation: -55, opacity: 0, stagger: 0.035, duration: 0.45 }, 0.73)
        .fromTo(".ingredient-pink", { y: mobile ? 80 : 140, x: 70, rotation: -30, scale: 0.72 }, { y: 0, x: 0, rotation: 12, scale: 1, opacity: 1, stagger: 0.035, duration: 0.56 }, 0.96)
        .to(".product-stage [data-product='pink'] .product-camera", { yPercent: -2, rotation: -5, scale: 1.06, duration: 0.43 }, 1.47)
        .to(".ingredient-pink", { y: -25, rotation: 27, stagger: 0.02, duration: 0.45 }, 1.48)
        // Ato III: a energia se recolhe e uma luz verde mais contida abre a última cena.
        .fromTo(".green-atmosphere", { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: 0.62 }, 2.04)
        .to(".pink-atmosphere", { opacity: 0, duration: 0.4 }, 2.29)
        .to(".copy-pink", { opacity: 0, y: -22, duration: 0.24 }, 2.04)
        .fromTo(".copy-green", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.37 }, 2.4)
        .to(".product-stage [data-product='pink'] .product-camera", { xPercent: 17, yPercent: -12, rotation: 17, scale: 0.9, duration: 0.43 }, 2.02)
        .to(".product-stage [data-product='pink']", { opacity: 0, duration: 0.25 }, 2.21)
        .fromTo(".product-stage [data-product='green'] .product-camera", { xPercent: -22, yPercent: 20, rotation: -18, scale: 1.15 }, { xPercent: 0, yPercent: 0, rotation: 5, scale: 1, duration: 0.62 }, 2.18)
        .to(".product-stage [data-product='green']", { opacity: 1, duration: 0.28 }, 2.34)
        .to(".beam-pink", { xPercent: -30, opacity: 0, duration: 0.34 }, 2.08)
        .fromTo(".beam-green", { xPercent: 24, rotation: 18, opacity: 0 }, { xPercent: -8, rotation: 6, opacity: 0.65, duration: 0.65 }, 2.19)
        .to(".ingredient-pink", { y: -120, x: 55, rotation: 65, scale: 0.84, opacity: 0, stagger: 0.035, duration: 0.43 }, 2.02)
        .fromTo(".ingredient-green", { y: 90, x: -55, rotation: -25, scale: 0.8 }, { y: 0, x: 0, rotation: 8, scale: 1, opacity: 1, stagger: 0.04, duration: 0.62 }, 2.32)
        .to(".product-stage [data-product='green'] .product-camera", { rotation: 2, yPercent: -2, scale: 1.015, duration: 0.5 }, 2.84)
        .to(".ingredient-green", { y: -18, rotation: 18, stagger: 0.02, duration: 0.45 }, 2.9)
        .to(".stage-halo", { scale: 1.22, rotation: 16, opacity: 0.35, duration: 1.3 }, 2.1)
        .to(".dust-mote", { y: (i) => -45 - i * 7, x: (i) => (i % 2 ? 1 : -1) * 32, stagger: 0.006, duration: 3.2 }, 0)
        .to(".product-shadow", { scaleX: 0.87, opacity: 0.55, duration: 0.65 }, 2.24)
        .to(".act-progress-dark", { scaleX: 1, duration: 1.02 }, 0)
        .to(".act-progress-pink", { scaleX: 1, duration: 1.32 }, 1.02)
        .to(".act-progress-green", { scaleX: 1, duration: STORY_DURATION - 2.34 }, 2.34);

      const shouldOpen = !didOpen.current && window.scrollY < 60;
      didOpen.current = true;
      if (shouldOpen) {
        gsap.set(select(".logo-reveal"), { visibility: "visible" });
        opening = gsap.timeline({ defaults: { ease: "power3.out" } })
          .fromTo(select(".opening-symbol"), { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.28 })
          .to(select(".opening-symbol"), { scale: 16, opacity: 0, duration: 0.7, ease: "power3.inOut" }, 0.28)
          .fromTo(select(".scene-window"), { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", duration: 0.85, clearProps: "clipPath", ease: "power3.inOut" }, 0.4)
          .set(select(".logo-reveal"), { visibility: "hidden" }, 0.95)
          .from(select(".product-entrance"), { y: 60, rotation: 5, opacity: 0, duration: 0.9 }, 0.7)
          .from(select(".hero-copy-stack"), { y: 35, opacity: 0, duration: 0.7 }, 0.78)
          .from(select(".hero-cta"), { y: 18, opacity: 0, duration: 0.5 }, 1.05);
      }
      return () => { showAct("dark"); };
    }, element);
    return () => { media.revert(); didOpen.current = false; };
  }, [root]);
}
