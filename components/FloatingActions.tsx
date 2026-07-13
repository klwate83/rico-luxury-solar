import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t bg-white p-2 shadow-2xl md:hidden">
      <Link href="/quick-quote" className="rounded-xl bg-solar px-3 py-3 text-center text-xs font-bold text-navy">Quick Quote</Link>
      <a href={whatsappLink("Hi RICO, I would like help finding a solar solution in Cape Town.")} className="px-3 py-3 text-center text-xs font-bold text-navy">WhatsApp</a>
      <a href={`tel:${siteConfig.phoneHref}`} className="px-3 py-3 text-center text-xs font-bold text-navy">Call</a>
    </div>
  );
}
