import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, MessageCircleQuestion, PackageSearch } from "lucide-react";
import { Faq } from "@/components/faq";

export const metadata: Metadata = { title: "TC-100 Support" };

const tc100Manual = "https://www.tidea-tech.com/_files/ugd/eeafbb_e85a5e7e4a26463fa68419150c7dfb26.pdf";

export default function SupportPage() {
  return (
    <main className="bg-[#e7edf8] pb-16 pt-16">
      <section className="page-shell pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Product Care</p>
            <h1 className="page-title mt-4">TC-100 Support</h1>
            <p className="lead-copy mt-6 text-black/70">Find quick answers, care guidance, product manuals, and the right way to contact the TIDEA support team.</p>
            <p className="mt-6 rounded-2xl border border-brand-200 bg-white p-5 text-sm leading-6 text-black/70">New TC-100? Charge it fully, about 5.5 hours, before your first clean. Batteries lose some charge in transit, so a partly empty battery out of the box is normal.</p>
          </div>
          <div className="relative mt-8 aspect-square overflow-hidden rounded-[32px] bg-white lg:mt-16">
            <Image alt="TIDEA TC-100 cordless stick vacuum" className="object-contain p-8" fill preload sizes="(min-width: 1024px) 50vw, 100vw" src="/images/tidea/eeafbb_9f0479f55e2a4c4ab850c0379d0601e7~mv2.jpg" />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a className="rounded-[28px] bg-white p-8 transition hover:-translate-y-1" href="#faqs"><MessageCircleQuestion className="text-[#567dbd]" size={30} /><h2 className="card-title mt-8">Frequently Asked Questions</h2><p className="card-copy mt-3 text-black/70">Troubleshoot common issues and keep your vacuum performing at its best.</p><span className="mt-6 inline-flex border-b border-black text-sm font-semibold">View FAQs →</span></a>
          <a className="rounded-[28px] bg-white p-8 transition hover:-translate-y-1" href="#manuals"><Download className="text-[#567dbd]" size={30} /><h2 className="card-title mt-8">Instruction Manuals</h2><p className="card-copy mt-3 text-black/70">Find setup, operation, and care instructions for your product.</p><span className="mt-6 inline-flex border-b border-black text-sm font-semibold">Download manual →</span></a>
          <a className="rounded-[28px] bg-white p-8 transition hover:-translate-y-1" href="#parts"><PackageSearch className="text-[#567dbd]" size={30} /><h2 className="card-title mt-8">Replacement Parts</h2><p className="card-copy mt-3 text-black/70">Contact support for compatible replacement parts and warranty help.</p><span className="mt-6 inline-flex border-b border-black text-sm font-semibold">Request a part →</span></a>
        </div>
      </section>
      <section className="page-shell mt-16 scroll-mt-24" id="faqs"><h2 className="section-title">Frequently Asked Questions</h2><div className="mt-8"><Faq /></div></section>
      <section className="page-shell mt-16 scroll-mt-24" id="manuals">
        <h2 className="section-title">Instruction Manuals</h2>
        <div className="mt-8 overflow-hidden rounded-[28px] bg-white">
          <a className="flex flex-col gap-3 border-b border-black/10 p-6 transition hover:bg-brand-50 sm:flex-row sm:items-center sm:justify-between" href={tc100Manual} rel="noreferrer" target="_blank"><span className="font-semibold">TC-100 Instruction Manual (PDF) · English / Français / Español</span><span className="text-sm text-brand-700">Download →</span></a>
          {["TC-200", "TC-500"].map((model) => (
            <div className="flex flex-col gap-3 border-b border-black/10 p-6 last:border-0 sm:flex-row sm:items-center sm:justify-between" key={model}><span className="font-semibold">{model} Instruction Manual (PDF) · English / Français / Español</span><span className="text-sm text-black/40">Available soon</span></div>
          ))}
        </div>
      </section>
      <section className="page-shell mt-16 scroll-mt-24" id="parts">
        <div className="rounded-[28px] bg-brand-600 p-8 text-white md:p-12">
          <h2 className="section-title">Need a Replacement Part?</h2>
          <p className="lead-copy mt-4 text-white/85">Tell us your model, serial number, and the part you need. Our support team will help identify the correct replacement.</p>
          <Link className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black" href="/contact-us">Request a part</Link>
        </div>
      </section>
    </main>
  );
}
