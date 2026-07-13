import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,166,58,0.28),transparent_38%)]" />

      <div className="container-shell relative flex min-h-[680px] items-center py-20 md:py-24">
        <div className="w-full max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-[.2em] text-solar">
            Cape Town Solar Matching Platform
          </p>

          <h1 className="max-w-6xl text-5xl font-bold leading-[1.08] md:text-7xl lg:text-8xl">
            Smarter solar connections for Cape Town homes and businesses.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
            Tell us what you need and get connected with a vetted solar installation partner suited to your property, budget and energy goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quick-quote" className="btn-primary">
              Get a Quick Quote
            </Link>
            <a
              href={whatsappLink(
                "Hi RICO, I would like help finding a solar solution in Cape Town."
              )}
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
