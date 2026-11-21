import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

export function CtaBand({
  title = "¿Querés comunicar mejor lo que hace tu gestión?",
  text = "Contanos en qué está tu equipo y te proponemos un primer diagnóstico, sin compromiso.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-ink px-8 py-14 text-ink-foreground shadow-lift md:px-14">
        <div className="stripes-brand pointer-events-none absolute -right-6 -top-6 h-48 w-64 opacity-70 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]" aria-hidden />
        <div className="relative grid items-end gap-8 md:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-3xl font-medium leading-tight md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-ink-muted">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row md:justify-end">
            <Button asChild variant="accent" size="xl">
              <a href={whatsappUrl("Hola Nealítica, quiero coordinar una reunión.")} target="_blank" rel="noreferrer">
                <MessageCircle /> Escribinos
              </a>
            </Button>
            <Button asChild variant="ink" size="xl">
              <Link to="/contacto">
                Formulario <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
