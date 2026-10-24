import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-background/95 text-foreground border-b backdrop-blur-sm" : "text-ink-foreground",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-background focus:px-4 focus:py-2 focus:text-foreground">
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="font-serif text-2xl tracking-wide">
          EverAfter <span className="italic">Events</span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs uppercase tracking-[0.2em] opacity-90 hover:opacity-100 hover:underline underline-offset-8">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#enquire" className={cn("border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors", solid ? "border-foreground hover:bg-foreground hover:text-background" : "border-ink-foreground/70 hover:bg-ink-foreground hover:text-ink")}>
              Enquire
            </a>
          </li>
        </ul>
        <button
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t px-6 pb-8 pt-4 md:hidden">
          {[...links, { href: "#enquire", label: "Plan your event" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-serif text-2xl">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
