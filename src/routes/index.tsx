import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Landmark,
  MessageCircle,
  Scale,
  Search,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/Section";
import { SERVICES, whatsappUrl } from "@/lib/site";
import heroImg from "@/assets/hero-equipo.webp";
import capacitacionImg from "@/assets/capacitacion.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nealítica Consultora — Comunicación pública basada en datos" },
      {
        name: "description",
        content:
          "Ayudamos a gobiernos y organizaciones a comunicar mejor: investigación de opinión pública, estrategia, formación de equipos y comunicación digital.",
      },
      { property: "og:title", content: "Nealítica Consultora — Comunicación pública basada en datos" },
      {
        property: "og:description",
        content: "Investigación, estrategia y formación para equipos de gobierno y organizaciones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Search,
    title: "Investigamos",
    text: "Encuestas, censos y estudios de opinión para entender qué piensa y necesita la ciudadanía.",
  },
  {
    icon: Target,
    title: "Planificamos",
    text: "Convertimos los datos en un norte estratégico, un mensaje claro y un plan de acción.",
  },
  {
    icon: Users,
    title: "Comunicamos",
    text: "Formamos equipos, gestionamos canales digitales y diseñamos campañas que se miden.",
  },
];

const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Relevamos la situación de la gestión y la percepción ciudadana." },
  { n: "02", title: "Estrategia", text: "Definimos objetivos, mensaje, públicos y prioridades." },
  { n: "03", title: "Implementación", text: "Acompañamos al equipo en la ejecución, día a día." },
  { n: "04", title: "Evaluación", text: "Medimos resultados y ajustamos con evidencia." },
];

const AUDIENCES = [
  { icon: Building2, label: "Municipios" },
  { icon: Landmark, label: "Gobiernos provinciales" },
  { icon: Scale, label: "Concejos y legislaturas" },
  { icon: Users, label: "Organizaciones sociales" },
];

function Index() {
  return (
    <>
      {/* Portada */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span className="stripes-brand inline-block h-3 w-8 rounded-sm" aria-hidden />
              Consultora en comunicación pública
            </p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] text-primary md:text-7xl">
              Comunicación pública que se apoya en{" "}
              <em className="text-gradient-brand not-italic md:italic">datos</em>.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Acompañamos a gobiernos y organizaciones a entender a la ciudadanía, ordenar su mensaje
              y formar equipos que comunican con claridad.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="xl">
                <a
                  href={whatsappUrl("Hola Nealítica, quiero hablar sobre mi gestión.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> Hablemos de tu gestión
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="bg-card">
                <Link to="/servicios">
                  Ver servicios <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="stripes-brand absolute -right-2 -top-3 h-32 w-32 rounded-2xl opacity-80 sm:-right-4 sm:-top-4 sm:h-40 sm:w-40" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={heroImg}
                alt="Equipo de consultores revisando informes de opinión pública"
                width={1672}
                height={940}
                className="aspect-[4/3.4] w-full object-cover"
              />
            </div>
            <div className="relative mx-4 -mt-10 max-w-[16rem] rounded-2xl bg-card p-5 shadow-lift sm:absolute sm:-bottom-6 sm:left-6 sm:mx-0 sm:mt-0 md:-left-8">
              <p className="eyebrow text-accent">Nuestro método</p>
              <p className="mt-2 font-display text-xl leading-snug text-primary">
                Del dato a la decisión, y de la decisión al mensaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Con quién trabajamos */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-muted-foreground">Trabajamos con</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-10">
            {AUDIENCES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 font-semibold text-primary">
                <Icon className="size-5 text-accent" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pilares */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Qué hacemos" title="Tres capacidades, un mismo objetivo: una gestión que se entiende.">
          Unimos la rigurosidad del análisis estadístico con la experiencia en comunicación de
          gobierno.
        </SectionHeading>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative rounded-2xl border border-border bg-card p-8 shadow-soft">
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              <Icon className="mt-6 size-8 text-accent" strokeWidth={1.6} />
              <h3 className="mt-5 text-2xl font-medium text-primary">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Servicios" title="Lo que podemos hacer por tu equipo" />
            <Button asChild variant="link" className="h-auto px-0 text-base font-semibold">
              <Link to="/servicios">
                Ver todos los servicios <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ id, title, summary, icon: Icon }) => (
              <Link
                key={id}
                to="/servicios"
                hash={id}
                className="group flex flex-col bg-card p-8 transition-colors hover:bg-background"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="relative overflow-hidden bg-gradient-ink py-24 text-ink-foreground">
        <div className="stripes-ink pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHeading tone="ink" eyebrow="Cómo trabajamos" title="Un proceso claro, de principio a fin">
            Cada proyecto sigue cuatro etapas, para que sepas siempre en qué punto estamos y qué
            resultados esperar.
          </SectionHeading>
          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t border-ink-border pt-6">
                <span className="font-display text-4xl text-gradient-brand">{s.n}</span>
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formación destacada */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <div className="relative">
          <img
            src={capacitacionImg}
            alt="Capacitación en comunicación para un equipo de gobierno"
            width={1448}
            height={1086}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="stripes-brand absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-2xl opacity-70" aria-hidden />
        </div>
        <div>
          <SectionHeading eyebrow="Formación a medida" title="Equipos que comunican con seguridad">
            Capacitaciones diseñadas para cada área de gestión: relación con la prensa, voceros,
            comunicación de crisis, comunicación digital y con perspectiva de género.
          </SectionHeading>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SERVICES[0]?.items.slice(0, 6).map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild variant="default" size="xl" className="mt-10">
            <Link to="/servicios" hash="formacion">
              Ver capacitaciones <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
