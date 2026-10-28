import type { CSSProperties } from "react";
import Image from "next/image";

export function SceneAtmosphere() {
  return <>
    <div className="atmosphere dark-atmosphere" aria-hidden="true" /><div className="atmosphere pink-atmosphere" aria-hidden="true" /><div className="atmosphere green-atmosphere" aria-hidden="true" />
    <div className="stage-halo" aria-hidden="true" /><div className="studio-beam beam-amber" aria-hidden="true" /><div className="studio-beam beam-pink" aria-hidden="true" /><div className="studio-beam beam-green" aria-hidden="true" /><div className="light-sweep" aria-hidden="true" /><div className="stage-floor" aria-hidden="true" />
    <div className="ingredient-layers" aria-hidden="true">
      {(["dark", "pink", "green"] as const).flatMap((act, row) => (["back", "front", "near"] as const).map((depth, cell) => <div key={`${act}-${cell}`} className={`ingredient ingredient-${act} ingredient-${cell}`} data-depth={depth}><i className="ingredient-cutout"><picture>
        <source media="(min-width: 1001px)" srcSet="/images/concept/ingredient-atlas-placeholder.webp" />
        {/* Atlas já otimizado: picture escolhe a resolução; prioridade baixa preserva o LCP da bebida. */}
        <Image className="ingredient-sprite" src="/images/concept/ingredient-atlas-mobile-placeholder.webp" alt="" width={600} height={600} unoptimized loading="lazy" fetchPriority="low" style={{ left: `${cell * -100}%`, top: `${row * -100}%` }} />
      </picture></i></div>))}
    </div>
    <div className="dust-field" aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <i key={i} className="dust-mote" style={{ left: `${35 + ((i * 17) % 61)}%`, top: `${13 + ((i * 13) % 71)}%`, "--mote-size": `${i % 3 + 1}px` } as CSSProperties} />)}</div>
  </>;
}
