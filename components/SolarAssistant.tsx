"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function SolarAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-24 right-5 z-50 hidden md:block">
      {open && (
        <div className="mb-3 w-80 rounded-3xl border bg-white p-5 shadow-premium">
          <div className="flex items-start justify-between"><div><h3 className="font-bold text-navy">RICO Solar Assistant</h3><p className="mt-1 text-sm text-slate-600">How can we help?</p></div><button onClick={() => setOpen(false)} aria-label="Close">×</button></div>
          <div className="mt-4 grid gap-2">
            <Link href="/quick-quote" className="rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy">Get a Quick Quote</Link>
            <Link href="/residential-solar" className="rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy">Residential Solar</Link>
            <Link href="/commercial-solar" className="rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy">Commercial Solar</Link>
            <a href={whatsappLink("Hi RICO, I would like to speak to the team about solar.")} className="rounded-xl bg-solar px-4 py-3 text-center text-sm font-semibold text-navy">Speak on WhatsApp</a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-navy px-5 py-4 font-semibold text-white shadow-premium">Solar Assistant</button>
    </div>
  );
}
