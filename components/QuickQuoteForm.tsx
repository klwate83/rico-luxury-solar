"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const initial = { fullName: "", email: "", mobile: "", customerType: "Homeowner", serviceRequired: "Residential solar", suburb: "", monthlySpend: "", timeline: "", preferredContact: "WhatsApp", consent: false };

export default function QuickQuoteForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function submit(e: FormEvent) {
    e.preventDefault(); setLoading(true); setError("");
    const params = new URLSearchParams(window.location.search);
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, sourcePage: window.location.pathname, utmSource: params.get("utm_source") || undefined, utmCampaign: params.get("utm_campaign") || undefined }) });
    const result = await response.json(); setLoading(false);
    if (!response.ok) { setError(result.error || "Please review your information."); return; }
    router.push(`/thank-you?ref=${encodeURIComponent(result.leadReference)}`);
  }

  return (
    <form onSubmit={submit} className={compact ? "grid gap-4" : "card grid gap-5"}>
      <div className="grid gap-4 md:grid-cols-2">
        <div><label className="label">Customer type</label><select className="input" value={form.customerType} onChange={e => setForm({ ...form, customerType: e.target.value })}><option>Homeowner</option><option>Business owner</option><option>Property manager</option><option>Body corporate or estate</option><option>Other</option></select></div>
        <div><label className="label">Service required</label><select className="input" value={form.serviceRequired} onChange={e => setForm({ ...form, serviceRequired: e.target.value })}><option>Residential solar</option><option>Commercial solar</option><option>Battery backup</option><option>Solar and battery</option><option>Existing system upgrade</option><option>Maintenance</option><option>Not sure</option></select></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2"><div><label className="label">Cape Town area or suburb</label><input required className="input" value={form.suburb} onChange={e => setForm({ ...form, suburb: e.target.value })} /></div><div><label className="label">Monthly electricity spend</label><select className="input" value={form.monthlySpend} onChange={e => setForm({ ...form, monthlySpend: e.target.value })}><option value="">Select range</option><option>Below R1,500</option><option>R1,500–R3,000</option><option>R3,000–R6,000</option><option>R6,000+</option></select></div></div>
      <div className="grid gap-4 md:grid-cols-3"><div><label className="label">Full name</label><input required className="input" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} /></div><div><label className="label">Mobile number</label><input required className="input" value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} /></div><div><label className="label">Email</label><input required type="email" className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div></div>
      <div className="grid gap-4 md:grid-cols-2"><div><label className="label">Installation timeframe</label><select className="input" value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })}><option value="">Select timeframe</option><option>Immediately</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Researching options</option></select></div><div><label className="label">Preferred contact method</label><select className="input" value={form.preferredContact} onChange={e => setForm({ ...form, preferredContact: e.target.value })}><option>WhatsApp</option><option>Phone</option><option>Email</option></select></div></div>
      <label className="flex items-start gap-3 text-sm text-slate-600"><input required type="checkbox" className="mt-1" checked={form.consent} onChange={e => setForm({ ...form, consent: e.target.checked })} /><span>I consent to RICO contacting me about this enquiry and processing my information for this purpose.</span></label>
      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      <button disabled={loading} className="btn-primary w-full disabled:opacity-60">{loading ? "Submitting..." : "Submit My Solar Enquiry"}</button>
    </form>
  );
}
