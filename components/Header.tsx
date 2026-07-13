"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";

const links = [
  ["About", "/about"],
  ["Residential", "/residential-solar"],
  ["Commercial", "/commercial-solar"],
  ["Battery Storage", "/battery-storage"],
  ["How It Works", "/how-it-works"],
  ["Solar Insights", "/solar-insights"],
  ["Partner With Us", "/partner-with-us"],
  ["Contact", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="font-bold tracking-wide text-navy">RICO <span className="text-solar">LUXURY SOLAR</span></Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-slate-700 hover:text-solar">{label}</Link>)}
          <Link href="/quick-quote" className="btn-primary">Get a Quick Quote</Link>
        </nav>
        <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block h-0.5 w-7 bg-navy" /><span className="my-1.5 block h-0.5 w-7 bg-navy" /><span className="block h-0.5 w-7 bg-navy" />
        </button>
      </div>
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-4 py-5">
            {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="font-medium text-navy">{label}</Link>)}
            <Link href="/quick-quote" className="btn-primary">Get a Quick Quote</Link>
            <a href={whatsappLink("Hi RICO, I would like help finding a solar solution in Cape Town.")} className="rounded-full border border-navy px-6 py-3 text-center font-semibold text-navy">WhatsApp Us</a>
          </div>
        </div>
      )}
    </header>
  );
}
