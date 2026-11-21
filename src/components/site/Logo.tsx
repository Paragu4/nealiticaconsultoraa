import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-nealitica.png";
import { cn } from "@/lib/utils";

export function Logo({ tone = "default" }: { tone?: "default" | "ink" }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Nealítica Consultora, inicio">
      <span
        className={cn(
          "grid size-11 place-items-center rounded-xl transition-transform group-hover:-rotate-3",
          tone === "ink" ? "bg-ink-foreground" : "bg-card shadow-soft",
        )}
      >
        <img src={logo} alt="" width={32} height={32} className="size-8 object-contain" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-semibold",
            tone === "ink" ? "text-ink-foreground" : "text-primary",
          )}
        >
          Nealítica
        </span>
        <span
          className={cn(
            "eyebrow mt-1 block text-[0.62rem]",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          Consultora
        </span>
      </span>
    </Link>
  );
}
