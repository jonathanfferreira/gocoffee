import type { Metadata } from "next";
import "@fontsource/anton/latin-400.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GO DIFFERENT. — Conceito independente XPACE LABS",
  description: "Uma exploração cinematográfica independente da XPACE LABS para Go Coffee Brasil. Estudo não oficial, com imagens conceituais.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/gocoffee-simbolo-branco.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
