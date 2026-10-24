import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-accent",
  outline: "border border-current hover:bg-foreground hover:text-background",
  light: "border border-ink-foreground/70 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
} as const;

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 disabled:opacity-50";

type V = keyof typeof variants;

export function LinkButton({ variant = "solid", className, ...p }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: V }) {
  return <a className={cn(base, variants[variant], className)} {...p} />;
}

export function Btn({ variant = "solid", className, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: V }) {
  return <button className={cn(base, variants[variant], className)} {...p} />;
}
