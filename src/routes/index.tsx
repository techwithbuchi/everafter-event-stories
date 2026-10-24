import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, Intro, Services, Gallery, WhyUs, Testimonials, Faq, Footer } from "@/components/site/Sections";
import { Enquiry } from "@/components/site/Enquiry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EverAfter Events — Weddings, Corporate & Private Event Planning" },
      { name: "description", content: "Thoughtfully planned, beautifully remembered. EverAfter Events plans elegant weddings, corporate events and private celebrations." },
      { property: "og:title", content: "EverAfter Events — Event Planning Studio" },
      { property: "og:description", content: "Elegant weddings, corporate events and private celebrations, planned with care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
