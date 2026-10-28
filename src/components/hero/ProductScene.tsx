import Image from "next/image";

export function ProductScene({ variant }: { variant: "dark" | "pink" }) {
  const pink = variant === "pink";
  return (
    <div className={`product product-${variant}`}>
      {/* As bebidas são placeholders gerados, sem equivalência validada no cardápio. */}
      <Image
        className="drink-image"
        src={`/images/concept/${pink ? "berry-frappe" : "iced-latte"}-placeholder.webp`}
        alt={pink ? "Bebida rosa com cobertura, renderização conceitual não oficial" : "Bebida de café gelado, renderização conceitual não oficial"}
        width={1000}
        height={1500}
        sizes="(max-width: 600px) 86vw, (max-width: 1000px) 65vw, 48vw"
        preload={!pink}
        loading={pink ? "eager" : undefined}
      />
      <Image className="cup-brand" src="/brand/gocoffee-simbolo-preto.svg" alt="" width={130} height={130} aria-hidden="true" />
    </div>
  );
}
