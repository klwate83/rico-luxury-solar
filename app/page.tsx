import Hero from "@/components/Hero";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Link from "next/link";

const services = [
  ["Residential Solar", "Lower household electricity costs and improve energy resilience.", "/residential-solar"],
  ["Commercial Solar", "Support operational continuity and reduce long-term energy exposure.", "/commercial-solar"],
  ["Battery Storage", "Explore backup power and energy-storage options for your property.", "/battery-storage"],
  ["Maintenance & Upgrades", "Inspect, maintain, expand or modernise an existing solar system.", "/maintenance-upgrades"]
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-b bg-white"><div className="container-shell grid gap-4 py-6 text-center text-sm font-semibold text-navy sm:grid-cols-2 lg:grid-cols-5"><span>Cape Town focused</span><span>Residential enquiries</span><span>Commercial enquiries</span><span>Vetted partner network</span><span>No-obligation enquiry</span></div></section>
      <section className="section-pad bg-mist"><div className="container-shell"><div className="max-w-3xl"><p className="font-semibold text-solar">Choose your solar need</p><h2 className="mt-3 text-4xl font-bold text-navy">A clearer path from enquiry to suitable solar support.</h2></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map(([title, text, href]) => <Link key={href} href={href} className="card transition hover:-translate-y-1"><h3 className="text-xl font-bold text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><span className="mt-6 inline-block font-semibold text-solar">Explore →</span></Link>)}</div></div></section>
      <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-2"><div><p className="font-semibold text-solar">How it works</p><h2 className="mt-3 text-4xl font-bold text-navy">Three steps to a better-qualified solar conversation.</h2><div className="mt-8 grid gap-6">{[["01", "Tell us what you need", "Complete the quick online assessment."],["02", "RICO reviews your enquiry", "We assess customer type, location and solar requirements."],["03", "Connect with a vetted partner", "A suitable solar installation company receives the qualified opportunity."]].map(([n,t,d]) => <div key={n} className="flex gap-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-solar font-bold text-navy">{n}</div><div><h3 className="font-bold text-navy">{t}</h3><p className="mt-1 text-slate-600">{d}</p></div></div>)}</div></div><div><QuickQuoteForm compact /></div></div></section>
      <section className="section-pad bg-navy text-white"><div className="container-shell grid gap-10 lg:grid-cols-2"><div><p className="font-semibold text-solar">Partner network</p><h2 className="mt-3 text-4xl font-bold">Grow your solar business with qualified Cape Town opportunities.</h2><p className="mt-5 max-w-xl text-white/70">Apply to join a future-focused partner network built around customer qualification, local relevance and accountable service delivery.</p><Link href="/partner-with-us" className="btn-primary mt-8">Apply to Become a Partner</Link></div><div className="grid gap-4 sm:grid-cols-2">{["Relevant enquiries", "Flexible commercial models", "Cape Town launch focus", "Future marketing support"].map(x => <div className="rounded-3xl border border-white/15 p-6" key={x}><h3 className="font-semibold text-solar">{x}</h3></div>)}</div></div></section>
    </>
  );
}
