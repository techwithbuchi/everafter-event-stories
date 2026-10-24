import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import wedding from "@/assets/wedding.jpg";
import corporate from "@/assets/corporate.jpg";
import privateImg from "@/assets/private.jpg";
import detail from "@/assets/detail.jpg";
import { LinkButton } from "./Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img src={hero} alt="Candlelit wedding table dressed with ivory linen, white roses and olive branches at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/20" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p className="eyebrow reveal text-sage">Event planning · New York & the Hudson Valley</p>
        <h1 className="reveal mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl lg:text-[6.5rem]">
          Thoughtfully planned.<br /><em>Beautifully remembered.</em>
        </h1>
        <div className="reveal mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-ink-foreground/85">
            Weddings, corporate gatherings and private celebrations, designed with care and run so smoothly you'll only remember the moments.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="#enquire" className="bg-ink-foreground text-ink hover:bg-sage">Plan your event</LinkButton>
            <LinkButton href="#services" variant="light">Explore our services</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-12 lg:px-10 lg:py-40">
      <div className="lg:col-span-5">
        <p className="eyebrow">About the studio</p>
        <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">A small studio for occasions that <em>matter</em>.</h2>
      </div>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
        <p>Founded in 2014, EverAfter Events is a team of six planners, designers and producers. We take on a limited number of events each season so every client has our full attention.</p>
        <p>From the first conversation to the last guest leaving, we handle venues, vendors, design and timelines, so you can be present for the day itself.</p>
        <dl className="grid grid-cols-3 gap-6 border-t pt-8 text-foreground">
          {[["400+", "Events planned"], ["12", "Years in business"], ["60", "Trusted vendors"]].map(([n, l]) => (
            <div key={l}><dt className="sr-only">{l}</dt><dd className="font-serif text-4xl">{n}</dd><dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const services = [
  { title: "Wedding Planning", img: wedding, alt: "Couple standing beneath a floral arch in an olive grove", text: "Full planning or month-of coordination, from the first venue tour to the final dance." },
  { title: "Corporate Events", img: corporate, alt: "Corporate gala dinner with round tables and warm pendant lighting", text: "Launches, retreats and gala dinners that reflect your brand and run on schedule." },
  { title: "Private Celebrations", img: privateImg, alt: "Friends raising a toast at a candlelit terrace dinner", text: "Milestone birthdays, anniversaries and intimate dinners, styled down to the place cards." },
];

export function Services() {
  return (
    <section id="services" className="bg-card py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">Services</p><h2 className="mt-6 text-4xl sm:text-5xl">What we plan</h2></div>
          <p className="max-w-sm text-muted-foreground">Three areas of focus, each with its own team.</p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <article key={s.title} className={`group ${i === 1 ? "md:mt-16" : ""}`}>
              <div className="overflow-hidden"><img src={s.img} alt={s.alt} width={896} height={1152} loading="lazy" className="img-zoom aspect-[4/5] w-full object-cover" /></div>
              <p className="mt-6 font-serif text-sm italic text-accent">0{i + 1}</p>
              <h3 className="mt-1 text-3xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              <a href="#enquire" className="mt-5 inline-flex items-center gap-2 border-b border-foreground pb-1 text-xs uppercase tracking-[0.2em] hover:text-accent hover:border-accent">
                Enquire about {s.title.split(" ")[0].toLowerCase()} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const items = [
    { img: hero, alt: "Long candlelit reception table in a garden at dusk", cap: "The Whitmore wedding · Hudson Valley", cls: "md:col-span-8 aspect-[16/10]" },
    { img: wedding, alt: "Bride and groom under a white floral arch", cap: "Ceremony · Rhinebeck", cls: "md:col-span-4 aspect-[4/5] md:aspect-auto" },
    { img: corporate, alt: "Gala dinner tables in an industrial loft", cap: "Northstar annual gala · Brooklyn", cls: "md:col-span-4 aspect-[4/5]" },
    { img: detail, alt: "Place setting with calligraphy card and olive sprig", cap: "Table details", cls: "md:col-span-5 aspect-[4/5] md:aspect-auto" },
    { img: privateImg, alt: "Guests toasting at a terrace dinner under string lights", cap: "A 40th birthday · Montauk", cls: "md:col-span-3 aspect-[4/5]" },
  ];
  return (
    <section id="events" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <p className="eyebrow">Featured events</p>
      <h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl">Recent work, <em>in detail</em>.</h2>
      <p className="mt-4 text-sm text-muted-foreground">Illustrative imagery for this demonstration site.</p>
      <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-6">
        {items.map((it) => (
          <figure key={it.cap} className={`group relative overflow-hidden ${it.cls}`}>
            <img src={it.img} alt={it.alt} loading="lazy" className="img-zoom absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-16 text-sm text-ink-foreground">{it.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function WhyUs() {
  const points = [
    ["One lead planner", "You work with the same person from first call to final toast."],
    ["Honest budgets", "Itemised estimates up front, with no surprise fees later."],
    ["Vetted vendors", "Florists, caterers and musicians we've worked with for years."],
    ["Calm on the day", "A detailed run-of-show and a team on site from setup to close."],
  ];
  return (
    <section className="bg-ink py-28 text-ink-foreground lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="eyebrow text-sage">Why EverAfter</p>
          <h2 className="mt-6 text-4xl sm:text-5xl">The details, <em>handled</em>.</h2>
        </div>
        <ol className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {points.map(([t, d], i) => (
            <li key={t} className="border-t border-ink-foreground/20 pt-6">
              <span className="font-serif italic text-sage">0{i + 1}</span>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-2 leading-relaxed text-ink-foreground/75">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    ["We barely noticed the logistics, which is exactly what we hoped for.", "Sample client, wedding"],
    ["Our retreat ran on time, felt personal, and the team loved it.", "Sample client, corporate retreat"],
    ["They turned a backyard dinner into the night of the year.", "Sample client, 50th birthday"],
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <p className="eyebrow">Kind words</p>
      <p className="mt-3 text-sm text-muted-foreground">Fictional testimonials written for this demonstration. They are not real customer reviews.</p>
      <div className="mt-14 grid gap-12 md:grid-cols-3">
        {quotes.map(([q, a]) => (
          <figure key={a}>
            <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">“{q}”</blockquote>
            <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    ["How far in advance should we book?", "For weddings, 9 to 14 months is ideal. Corporate and private events can often be planned in 6 to 12 weeks."],
    ["Do you travel outside New York?", "Yes. Most of our events are in New York and the Hudson Valley, and we plan destination events throughout the Northeast and beyond."],
    ["How does pricing work?", "Full planning starts from $9,500 and coordination from $3,200. After our first call, we send a fixed-fee proposal."],
    ["Can we use our own vendors?", "Of course. We're happy to work with vendors you love, and we can recommend others where needed."],
    ["What happens after I enquire?", "We reply within two business days to arrange a free 30-minute consultation."],
  ];
  return (
    <section id="faq" className="bg-card py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4"><p className="eyebrow">FAQ</p><h2 className="mt-6 text-4xl sm:text-5xl">Questions, answered</h2></div>
        <Accordion type="single" collapsible className="lg:col-span-7 lg:col-start-6">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="py-6 text-left font-serif text-xl hover:no-underline sm:text-2xl">{q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <p className="font-serif text-3xl">EverAfter <em>Events</em></p>
          <p className="mt-3 text-sm text-ink-foreground/70">A fictional event-planning studio, built as a portfolio demonstration.</p>
        </div>
        <address className="not-italic text-sm leading-7 text-ink-foreground/80">
          Studio by appointment<br />New York, NY<br />hello@everafter.example
        </address>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {[["#services", "Services"], ["#events", "Featured events"], ["#faq", "FAQ"], ["#enquire", "Enquire"]].map(([h, l]) => (
            <a key={h} href={h} className="text-ink-foreground/80 hover:text-ink-foreground">{l}</a>
          ))}
        </nav>
      </div>
      <p className="border-t border-ink-foreground/15 px-6 py-6 text-center text-xs text-ink-foreground/60">© {new Date().getFullYear()} EverAfter Events · Demo content</p>
    </footer>
  );
}
