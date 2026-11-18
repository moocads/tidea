import type { Metadata } from "next";
import Image from "next/image";
import { PartnershipForm } from "@/components/forms";
export const metadata: Metadata = { title: "Partnership" };

export default function PartnershipPage() {
  return (
    <main className="pt-16">
      <section className="page-shell section-space"><div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"><div><p className="eyebrow">Retail & Distribution Partners</p><h1 className="page-title mt-4">Partnership</h1><p className="lead-copy mt-6 text-black/70">Interested in carrying TIDEA? Tell us about your business and we’ll get back to you within one week.</p></div><div className="relative aspect-[3/2] overflow-hidden rounded-[32px]"><Image alt="Business partners shaking hands" className="object-cover" fill preload sizes="(min-width: 1024px) 50vw, 100vw" src="/images/tidea/eeafbb_9399feef31cd4dbaae0e013e46639b59~mv2.jpg" /></div></div></section>
      <section className="section-space bg-[#e7edf8]"><div className="page-shell"><h2 className="section-title">Look Forward to Connecting</h2><div className="mt-12"><PartnershipForm /></div></div></section>
    </main>
  );
}
