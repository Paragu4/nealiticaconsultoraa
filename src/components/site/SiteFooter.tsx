import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { NAV, SERVICES, SITE, whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="stripes-ink pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="ink" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Consultora en comunicación pública, formación y análisis de datos para gobiernos y
            organizaciones.
          </p>
        </div>
        <div>
          <h3 className="eyebrow text-brand-amber">Sitio</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow text-brand-amber">Servicios</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  to="/servicios"
                  hash={s.id}
                  className="text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow text-brand-amber">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ink-foreground">
                <MessageCircle className="size-4" /> {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-ink-foreground">
                <Mail className="size-4" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" /> {SITE.city}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-ink-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pb-20 pt-6 text-xs text-ink-muted sm:flex-row sm:justify-between sm:pb-6 sm:pr-40">
          <p>© {new Date().getFullYear()} Nealítica Consultora. Todos los derechos reservados.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
