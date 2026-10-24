import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { enquirySchema, eventTypes } from "@/lib/enquiry";
import detail from "@/assets/detail.jpg";
import { Btn } from "./Button";

type Errors = Partial<Record<string, string>>;
const field = "mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base focus:border-accent focus:outline-none focus:ring-0 aria-[invalid=true]:border-destructive";
const label = "text-xs uppercase tracking-[0.18em] text-muted-foreground";

export function Enquiry() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = enquirySchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("enquiries").insert({
      name: d.name, email: d.email, event_type: d.event_type, message: d.message,
      event_date: d.event_date ?? null, guest_count: d.guest_count ?? null,
    });
    if (error) return setStatus("error");
    setStatus("sent");
    form.reset();
  }

  const err = (n: string) => errors[n] && <p id={`${n}-err`} className="mt-2 text-sm text-destructive">{errors[n]}</p>;
  const a = (n: string) => ({ name: n, id: n, "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? `${n}-err` : undefined });

  return (
    <section id="enquire" className="grid lg:grid-cols-2">
      <div className="relative hidden min-h-[40rem] lg:block">
        <img src={detail} alt="Place setting with a calligraphy name card and olive sprig" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <p className="eyebrow">Enquire</p>
        <h2 className="mt-6 text-4xl sm:text-5xl">Let's plan <em>your</em> event</h2>
        <p className="mt-4 max-w-md text-muted-foreground">Share a few details and we'll reply within two business days.</p>

        {status === "sent" ? (
          <div role="status" className="mt-12 border-l-2 border-accent bg-card p-8">
            <h3 className="text-3xl">Thank you.</h3>
            <p className="mt-3 text-muted-foreground">Your enquiry has been received. We'll be in touch soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-6 text-xs uppercase tracking-[0.2em] underline underline-offset-4">Send another enquiry</button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-12 grid gap-8 sm:grid-cols-2">
            <div><label htmlFor="name" className={label}>Name</label><input {...a("name")} autoComplete="name" className={field} />{err("name")}</div>
            <div><label htmlFor="email" className={label}>Email</label><input {...a("email")} type="email" autoComplete="email" className={field} />{err("email")}</div>
            <div className="sm:col-span-2">
              <label htmlFor="event_type" className={label}>Event type</label>
              <select {...a("event_type")} defaultValue="" className={field}>
                <option value="" disabled>Select one</option>
                {eventTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>{err("event_type")}
            </div>
            <div><label htmlFor="event_date" className={label}>Approximate date</label><input {...a("event_date")} type="date" className={field} />{err("event_date")}</div>
            <div><label htmlFor="guest_count" className={label}>Estimated guests</label><input {...a("guest_count")} type="number" min={1} max={5000} inputMode="numeric" className={field} />{err("guest_count")}</div>
            <div className="sm:col-span-2"><label htmlFor="message" className={label}>Tell us about your event</label><textarea {...a("message")} rows={4} className={field} />{err("message")}</div>
            {status === "error" && <p role="alert" className="text-sm text-destructive sm:col-span-2">Sorry, something went wrong and your enquiry wasn't sent. Please try again.</p>}
            <div className="sm:col-span-2"><Btn type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</Btn></div>
          </form>
        )}
      </div>
    </section>
  );
}
