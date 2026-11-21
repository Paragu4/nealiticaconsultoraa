import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/Section";
import { SERVICES, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import capacitacionImg from "@/assets/capacitacion.webp";
import investigacionImg from "@/assets/investigacion.webp";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Nealítica Consultora" },
      {
        name: "description",
        content:
          "Formación de equipos, investigación y opinión pública, planificación estratégica, comunicación digital, diseño y gestión de proyectos.",
      },
      { property: "og:title", content: "Servicios — Nealítica Consultora" },
      {
        property: "og:description",
        content: "Seis servicios para que la comunicación de tu gestión se apoye en datos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiciosPage,
});

const IMAGES: Record<string, { src: string; alt: string }> = {
  formacion: { src: capacitacionImg, alt: "Taller de comunicación para equipos de gobierno" },
  investigacion: { src: investigacionImg, alt: "Informe de encuesta de opinión pública con gráficos" },
};

function ServiciosPage() {
  return (
    <>
      <PageHero eyebrow="Servicios" title="Estrategia, datos y formación para comunicar mejor la gestión">
        Diseñamos estrategias de comunicación pública, formación y gestión digital pensadas para
        equipos de gobierno y organizaciones. Cada propuesta se arma a medida.
      </PageHero>

      {/* Índice */}
      <nav aria-label="Servicios" className="sticky top-20 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3">
          {SERVICES.map(({ id, title, icon: Icon }) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" /> {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-5">
        {SERVICES.map((s, i) => {
          const img = IMAGES[s.id];
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              className={cn(
                "grid gap-10 border-b border-border py-20 last:border-b-0 lg:grid-cols-[1fr_1.1fr] lg:gap-16",
              )}
            >
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-7" strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-5xl text-border">0{i + 1}</span>
                </div>
                <h2 className="mt-6 text-4xl font-medium leading-tight text-primary">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.intro}</p>
                <Button asChild variant="accent" size="xl" className="mt-8">
                  <a
                    href={whatsappUrl(`Hola Nealítica, quiero consultar por: ${s.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle /> Consultar
                  </a>
                </Button>
              </div>

              <div className={cn("flex flex-col gap-6", i % 2 === 1 && "lg:order-1")}>
                {img && (
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1448}
                    height={1086}
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-3xl object-cover shadow-soft"
                  />
                )}
                <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <h3 className="eyebrow text-accent">{s.listTitle}</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-3 text-foreground">
                        <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-medium text-primary">¿No sabés por dónde empezar?</h2>
            <p className="mt-2 text-muted-foreground">
              Muchas gestiones arrancan con un diagnóstico. Te ayudamos a definir el primer paso.
            </p>
          </div>
          <Button asChild variant="default" size="xl">
            <Link to="/contacto">
              Pedir un diagnóstico <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
