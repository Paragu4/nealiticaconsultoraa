import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/Section";
import { SERVICES, SITE, buildContactMessage, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Nealítica Consultora" },
      {
        name: "description",
        content: "Escribinos por WhatsApp o email y coordinemos una primera reunión sin compromiso.",
      },
      { property: "og:title", content: "Contacto — Nealítica Consultora" },
      {
        property: "og:description",
        content: "Coordinemos una primera reunión para conocer tu gestión.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre").max(100),
  organizacion: z.string().trim().max(120).optional(),
  servicio: z.string().max(80).optional(),
  mensaje: z.string().trim().min(10, "Contanos un poco más (mínimo 10 caracteres)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactoPage() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const { nombre, mensaje, organizacion, servicio } = parsed.data;
    const text = buildContactMessage({
      nombre,
      mensaje,
      ...(organizacion ? { organizacion } : {}),
      ...(servicio ? { servicio } : {}),
    });
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero eyebrow="Contacto" title="Hablemos de tu gestión">
        Contanos qué necesitás y te respondemos a la brevedad. La primera reunión es sin compromiso.
      </PageHero>

      <section id="contacto" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4">
          <a
            href={whatsappUrl("Hola Nealítica, quiero hacer una consulta.")}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-whatsapp"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-whatsapp text-whatsapp-foreground">
              <MessageCircle className="size-6" />
            </span>
            <span>
              <span className="eyebrow block text-muted-foreground">WhatsApp</span>
              <span className="mt-1 block text-lg font-semibold text-primary">{SITE.whatsappDisplay}</span>
              <span className="text-sm text-muted-foreground">La vía más rápida para contactarnos</span>
            </span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-accent"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Mail className="size-6" />
            </span>
            <span>
              <span className="eyebrow block text-muted-foreground">Email</span>
              <span className="mt-1 block break-all text-lg font-semibold text-primary">{SITE.email}</span>
            </span>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
              <MapPin className="size-6" />
            </span>
            <span>
              <span className="eyebrow block text-muted-foreground">Dónde estamos</span>
              <span className="mt-1 block text-lg font-semibold text-primary">{SITE.city}</span>
              <span className="text-sm text-muted-foreground">Trabajamos en todo el país, también a distancia</span>
            </span>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-8 shadow-lift md:p-10"
        >
          <h2 className="text-3xl font-medium text-primary">Envianos tu consulta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Al enviar se abre WhatsApp con tu mensaje listo para mandar.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Nombre y apellido" name="nombre" error={errors.nombre}>
              <Input id="nombre" name="nombre" autoComplete="name" maxLength={100} className="h-11" />
            </Field>
            <Field label="Organización (opcional)" name="organizacion" error={errors.organizacion}>
              <Input id="organizacion" name="organizacion" placeholder="Ej.: Municipio de…" maxLength={120} className="h-11" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="¿Qué servicio te interesa?" name="servicio" error={errors.servicio}>
                <select
                  id="servicio"
                  name="servicio"
                  defaultValue=""
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Todavía no sé / varios</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Mensaje" name="mensaje" error={errors.mensaje}>
                <Textarea id="mensaje" name="mensaje" rows={5} maxLength={1000} placeholder="Contanos brevemente qué necesitás." />
              </Field>
            </div>
          </div>
          <Button type="submit" variant="accent" size="xl" className="mt-8 w-full sm:w-auto">
            <Send /> Enviar por WhatsApp
          </Button>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="font-semibold text-primary">
        {label}
      </Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
