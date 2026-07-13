import Link from "next/link";
export default function PageHero({ eyebrow, title, description, cta = "Get a Quick Quote" }: { eyebrow: string; title: string; description: string; cta?: string }) {
  return <section className="bg-navy py-24 text-white"><div className="container-shell"><p className="font-semibold uppercase tracking-[.2em] text-solar">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p><Link href="/quick-quote" className="btn-primary mt-8">{cta}</Link></div></section>;
}
