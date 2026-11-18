import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { collectionProducts, type ProductData } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const collectionCards: Record<ProductData["slug"], { image: string; position: string }> = {
  "tc-100": { image: "/images/tidea/collection/imgi_5_R1.png", position: "object-center" },
  "tc-200": { image: "/images/tidea/collection/imgi_7_TC-200_dry_wet.png", position: "object-[88%_center]" },
  "tc-500": { image: "/images/tidea/collection/imgi_6_tc-500.png", position: "object-center" },
};

export const metadata: Metadata = { title: "Cordless Vacuum Cleaners" };

const reasons = [
  { icon: Gauge, number: "1", title: "Save Time, Without Compromise", body: "Cordless stick vacuums make everyday cleaning easier, reducing effort while delivering reliable performance and helping you keep your home effortlessly clean." },
  { icon: Sparkles, number: "2", title: "Low-Maintenance by Design", body: "Smart design choices reduce the need for frequent cleaning and upkeep, keeping maintenance quick, clean, and out of the way." },
  { icon: ShieldCheck, number: "3", title: "Built for Everyday Spaces", body: "From open living areas to hard-to-reach corners, cordless stick vacuums adapt to real-life spaces and surfaces, delivering consistent results throughout your home." },
];

export default function CollectionPage() {
  return (
    <main>
      <section className="relative min-h-[690px] overflow-hidden">
        <Image alt="TIDEA vacuum collection" className="object-cover" fill preload sizes="100vw" src="/images/tidea/eeafbb_591680091eac41fa9d0924a156fad624~mv2.jpg" />
        <div className="hero-overlay absolute inset-0" />
        <div className="page-shell relative flex min-h-[690px] items-end pb-16 pt-16 text-white">
          <div className="max-w-3xl">
            <h1 className="page-title">Designed for Everyday Living</h1>
            <p className="lead-copy mt-6 text-white/90">Built for modern homes, balancing performance with comfort to help you stay ahead of dust, debris and daily clutter. Cleaning becomes less of a task, and more of a natural part of everyday life.</p>
          </div>
        </div>
      </section>

      <section className="page-shell section-space" id="collection">
        <div className="grid gap-4 md:grid-cols-3">
          {collectionProducts.map((product, index) => {
            const card = collectionCards[product.slug];
            return (
              <Reveal className="group" delay={index * 0.08} key={product.slug}>
                <Link className="relative block aspect-[3/5] overflow-hidden rounded-[32px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#567dbd]" href={`/${product.slug}`}>
                  <Image alt="" className={`object-cover transition duration-500 group-hover:scale-[1.04] ${card.position}`} fill sizes="(min-width: 768px) 33vw, 100vw" src={card.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em]">TIDEA</p>
                      <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[0.03em] md:text-3xl">{product.model}</h2>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-black">
                      <ChevronDown aria-hidden className="transition-transform duration-300 group-hover:-rotate-90" size={22} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-space bg-[#e7edf8]">
        <div className="page-shell">
          <h2 className="section-title">Why TIDEA?</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div className="rounded-[28px] bg-white p-8" key={reason.number}>
                <div className="flex items-center justify-between text-[#567dbd]"><reason.icon aria-hidden size={30} /><span className="text-sm">0{reason.number}</span></div>
                <h3 className="card-title mt-8">{reason.title}</h3>
                <p className="card-copy mt-4 text-black/70">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
