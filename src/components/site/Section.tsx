import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "default",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "ink";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", tone === "ink" ? "text-brand-amber" : "text-accent")}>
        <span className="stripes-brand inline-block h-3 w-8 rounded-sm" aria-hidden />
        {eyebrow}
      </p>
      <h2 className={cn("mt-4 text-4xl font-medium leading-[1.08] md:text-5xl", tone === "ink" ? "text-ink-foreground" : "text-primary")}>
        {title}
      </h2>
      {children && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>
          {children}
        </p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="stripes-brand pointer-events-none absolute -right-10 top-10 h-40 w-72 rotate-0 opacity-15 [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-20 md:pt-24 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[1.04] text-primary md:text-6xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</p>}
      </div>
    </section>
  );
}
