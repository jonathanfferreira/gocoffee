import { ACTS } from "./acts";

export function ActNavigation() {
  return <nav className="act-navigation" aria-label="Atos da experiência">{ACTS.map((act) => <a key={act.id} href={`#${act.anchor}`} data-nav-act={act.id} aria-current={act.id === "dark" ? "step" : undefined}><span className="act-number">{act.number}</span><span>{act.name}</span><span className="act-track" aria-hidden="true"><i className={`act-progress act-progress-${act.id}`} /></span></a>)}</nav>;
}
