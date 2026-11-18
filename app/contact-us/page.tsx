import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = { title: "Contact Support" };

export default function ContactPage() {
  return (
    <main className="pt-16">
      <section className="mx-auto w-full max-w-[1280px] px-6 py-12 md:px-8 md:py-24 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold leading-[1.35] tracking-[0.15em] text-brand-600 uppercase">
              TIDEA Support
            </p>
            <h1 className="mt-4 text-balance text-[35px] font-semibold leading-[1.08] uppercase">
              Contact Support
            </h1>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.55] text-black/70">
              Questions, warranty claims, or replacement parts? Send us the details below. Our team typically replies within one week.
            </p>
            <Link
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/30 bg-white px-6 py-3 text-[15px] font-semibold tracking-[0.01em] transition hover:border-brand-600 hover:text-brand-700"
              href="/support-tc-100"
            >
              View TC-100 FAQs
            </Link>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[32px]">
            <Image
              alt="TIDEA cordless vacuum in a bright home"
              className="object-cover"
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/t100/imgi_3_eeafbb_3edf6561aa0445998f727019393820f4~mv2.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e7edf8] py-12 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-12">
          <h2 className="max-w-[22ch] text-balance text-[35px] font-semibold leading-[1.1] uppercase">
            We’re Here to Help
          </h2>
          <p className="mt-4 max-w-[70ch] text-base leading-[1.6] text-black/70">
            Include your order number, model, and a clear photo or short video when possible. It helps us resolve the issue more quickly.
          </p>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
