import PageHero from "./PageHero";
import QuickQuoteForm from "./QuickQuoteForm";

export default function ServicePage({ eyebrow, title, description, bullets }: { eyebrow: string; title: string; description: string; bullets: string[] }) {
  return <><PageHero eyebrow={eyebrow} title={title} description={description} /><section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-2"><div><h2 className="text-3xl font-bold text-navy">What this enquiry can help you explore</h2><div className="mt-6 grid gap-4">{bullets.map(b => <div key={b} className="rounded-2xl bg-mist p-5 font-medium text-navy">{b}</div>)}</div><p className="mt-6 text-sm leading-6 text-slate-500">Final system design, pricing and engineering recommendations are provided by the selected installation partner after a technical assessment.</p></div><QuickQuoteForm /></div></section></>;
}
