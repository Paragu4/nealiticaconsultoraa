import { createFileRoute } from "@tanstack/react-router";
import { Building2, HandHeart, Handshake, Landmark, LineChart, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — Nealítica Consultora" },
      {
        name: "description",
        content:
          "Trabajamos con municipios, gobiernos provinciales, concejos deliberantes y organizaciones sociales que quieren comunicar con evidencia.",
      },
      { property: "og:title", content: "Clientes — Nealítica Consultora" },
      {
        property: "og:description",
        content: "Gobiernos y organizaciones que confían en nuestros datos y nuestra estrategia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientesPage,
});

const SECTORS = [
  {
    icon: Building2,
    title: "Municipios",
    need: "Comunicar obras y servicios cotidianos y estar cerca del vecino.",
    how: "Encuestas barriales, plan de comunicación de gestión y formación de voceros.",
  },
  {
    icon: Landmark,
    title: "Gobiernos provinciales",
    need: "Ordenar la comunicación de muchas áreas bajo un mismo rumbo.",
    how: "Norte estratégico, manual de comunicación y tableros de opinión pública.",
  },
  {
    icon: Scale,
    title: "Concejos y legislaturas",
    need: "Explicar proyectos y dar visibilidad al trabajo legislativo.",
    how: "Construcción del mensaje, relación con la prensa y comunicación digital.",
  },
  {
    icon: HandHeart,
    title: "ONGs y organizaciones",
    need: "Medir el impacto de sus programas y sumar apoyos.",
    how: "Evaluación de proyectos, relevamientos y campañas de sensibilización.",
  },
];

const VALUES = [
  { icon: LineChart, title: "Evidencia primero", text: "Cada recomendación se apoya en datos relevados con rigor." },
  { icon: Handshake, title: "Trabajo a la par", text: "Nos sumamos a tu equipo, no lo reemplazamos: dejamos capacidades instaladas." },
  { icon: ShieldCheck, title: "Confidencialidad", text: "La información de cada gestión se trata con total reserva." },
  { icon: Sparkles, title: "A medida", text: "No hay paquetes cerrados: cada propuesta se arma según la realidad local." },
];

function ClientesPage() {
  return (
    <>
      <PageHero eyebrow="Clientes" title="Gobiernos y organizaciones que confían en nuestros datos">
        Acompañamos a equipos del sector público y social que quieren entender mejor a la ciudadanía
        y comunicar con claridad lo que hacen.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Con quién trabajamos" title="Cada tipo de institución, una necesidad distinta" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SECTORS.map(({ icon: Icon, title, need, how }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary text-accent">
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>
                <h3 className="text-2xl font-medium text-primary">{title}</h3>
              </div>
              <dl className="mt-6 grid gap-4 text-sm">
                <div>
                  <dt className="eyebrow text-muted-foreground">El desafío</dt>
                  <dd className="mt-1 text-base leading-relaxed text-foreground">{need}</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="eyebrow text-accent">Cómo ayudamos</dt>
                  <dd className="mt-1 text-base leading-relaxed text-foreground">{how}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-ink py-24 text-ink-foreground">
        <div className="stripes-ink pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionHeading tone="ink" eyebrow="Por qué elegirnos" title="Lo que nuestros clientes valoran" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-8 text-brand-amber" strokeWidth={1.6} />
                <h3 className="mt-5 text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="¿Tu institución podría ser la próxima?" text="Contanos qué querés lograr y armamos una propuesta a medida." />
    </>
  );
}
