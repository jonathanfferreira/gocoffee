export type ActId = "dark" | "pink" | "green";
// Âncoras e pausas compartilham a régua da timeline, inclusive no scroll reverso.
export const STORY_DURATION = 3.4;
export const ACTS = [
  { id: "dark", anchor: "ato-intensidade", number: "01", name: "Intensidade", at: 0, title: ["GO", "DIFFERENT."], lines: ["Luz que revela.", "Um instante que prende."], image: "iced-latte-placeholder", alt: "Bebida de café gelado, renderização conceitual não oficial" },
  { id: "pink", anchor: "ato-energia", number: "02", name: "Energia", at: 1.5, title: ["MUDE", "O RITMO."], lines: ["Cor em expansão.", "Energia em movimento."], image: "berry-frappe-placeholder", alt: "Bebida rosa com cobertura, renderização conceitual não oficial" },
  { id: "green", anchor: "ato-perspectiva", number: "03", name: "Novo olhar", at: 2.95, title: ["UM NOVO", "OLHAR."], lines: ["Mude a atmosfera.", "Continue diferente."], image: "green-latte-placeholder", alt: "Bebida verde com gelo, renderização conceitual não oficial" },
] as const;
