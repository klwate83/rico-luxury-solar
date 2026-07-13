import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        <div><h2 className="text-xl font-bold">RICO Luxury Solar Energy</h2><p className="mt-3 text-sm text-white/70">Connecting Cape Town homes and businesses with vetted solar installation partners.</p></div>
        <div><h3 className="font-semibold text-solar">Explore</h3><div className="mt-3 grid gap-2 text-sm text-white/75"><Link href="/residential-solar">Residential Solar</Link><Link href="/commercial-solar">Commercial Solar</Link><Link href="/partner-with-us">Partner With Us</Link><Link href="/solar-insights">Solar Insights</Link></div></div>
        <div><h3 className="font-semibold text-solar">Contact</h3><div className="mt-3 grid gap-2 text-sm text-white/75"><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>{siteConfig.serviceArea}</span></div></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} RICO Luxury Solar Energy (Pty) Ltd.</div>
    </footer>
  );
}
