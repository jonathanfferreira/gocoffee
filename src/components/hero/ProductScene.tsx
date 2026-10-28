import Image from "next/image";
import { ACTS, type ActId } from "./acts";

export function ProductScene({ variant, decorative = false }: { variant: ActId; decorative?: boolean }) {
  const act = ACTS.find((item) => item.id === variant)!;
  return (
    <div className={`product product-${variant}`} data-product={variant} aria-hidden={decorative || undefined}>
      <div className="product-camera"><div className="product-canvas">
      {/* Canvas 2:3: bebida e marca compartilham a geometria sem letterboxing. Produtos conceituais. */}
      <Image
        className="drink-image"
        src={`/images/concept/${act.image}.webp`}
        alt={decorative ? "" : act.alt}
        width={1000}
        height={1500}
        sizes="(max-width: 700px) 85vw, (max-width: 1000px) 60vw, 48vw"
        fetchPriority={decorative ? variant === "dark" ? "high" : "low" : undefined}
        loading={decorative ? "eager" : "lazy"}
      />
      <Image className="cup-brand" src="/brand/gocoffee-simbolo-preto.svg" alt="" width={130} height={130} aria-hidden="true" />
      </div></div>
    </div>
  );
}
