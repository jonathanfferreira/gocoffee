export function Arrow({ diagonal = false, up = false }: { diagonal?: boolean; up?: boolean }) {
  return <svg className="arrow-icon" style={{ transform: up ? "rotate(-90deg)" : diagonal ? "rotate(-45deg)" : undefined }} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
