import Image from "next/image";

export function LogoReveal() {
  return <div className="logo-reveal" aria-hidden="true"><Image className="opening-symbol" src="/brand/gocoffee-simbolo-branco.svg" alt="" width={132} height={132} preload /></div>;
}
