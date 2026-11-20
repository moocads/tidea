import type { Metadata } from "next";
import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { Download, MessageCircleQuestion, PackageSearch } from "lucide-react";
import { Faq } from "@/components/faq";
import {Link} from "@/i18n/navigation";

const tc100Manual = "https://www.tidea-tech.com/_files/ugd/eeafbb_e85a5e7e4a26463fa68419150c7dfb26.pdf";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Support"});
  return {title: t("meta")};
}

export default async function SupportPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Support");
  return (
    <main className="bg-[#e7edf8] pb-16 pt-16">
      <section className="page-shell pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1 className="page-title mt-4">{t("title")}</h1>
            <p className="lead-copy mt-6 text-black/70">{t("body")}</p>
            <p className="mt-6 rounded-2xl border border-brand-200 bg-white p-5 text-sm leading-6 text-black/70">{t("notice")}</p>
          </div>
          <div className="relative mt-8 aspect-square overflow-hidden rounded-[32px] bg-white lg:mt-16">
            <Image alt={t("imageAlt")} className="object-contain p-8" fill preload sizes="(min-width: 1024px) 50vw, 100vw" src="/images/tidea/eeafbb_9f0479f55e2a4c4ab850c0379d0601e7~mv2.jpg" />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a className="rounded-[28px] bg-white p-8 transition hover:-translate-y-1" href="#faqs"><MessageCircleQuestion className="text-[#567dbd]" size={30} /><h2 className="card-title mt-8">{t("faqTitle")}</h2><p className="card-copy mt-3 text-black/70">{t("faqBody")}</p><span className="mt-6 inline-flex border-b border-black text-sm font-semibold">{t("viewFaqs")}</span></a>
          <a className="rounded-[28px] bg-white p-8 transition hover:-translate-y-1" href="#manuals"><Download className="text-[#567dbd]" size={30} /><h2 className="card-title mt-8">{t("manualTitle")}</h2><p className="card-copy mt-3 text-black/70">{t("manualBody")}</p><span className="mt-6 inline-flex border-b border-black text-sm font-semibold">{t("downloadManual")}</span></a>
          <a className="rounded-[28px] bg-white p-8 transition hover:-translate-y-1" href="#parts"><PackageSearch className="text-[#567dbd]" size={30} /><h2 className="card-title mt-8">{t("partsTitle")}</h2><p className="card-copy mt-3 text-black/70">{t("partsBody")}</p><span className="mt-6 inline-flex border-b border-black text-sm font-semibold">{t("requestPart")}</span></a>
        </div>
      </section>
      <section className="page-shell mt-16 scroll-mt-24" id="faqs"><h2 className="section-title">{t("faqTitle")}</h2><div className="mt-8"><Faq /></div></section>
      <section className="page-shell mt-16 scroll-mt-24" id="manuals">
        <h2 className="section-title">{t("manualTitle")}</h2>
        <div className="mt-8 overflow-hidden rounded-[28px] bg-white">
          <a className="flex flex-col gap-3 border-b border-black/10 p-6 transition hover:bg-brand-50 sm:flex-row sm:items-center sm:justify-between" href={tc100Manual} rel="noreferrer" target="_blank"><span className="font-semibold">{t("manualAvailable", {model: "TC-100"})}</span><span className="text-sm text-brand-700">{t("download")}</span></a>
          {["TC-200", "TC-500"].map((model) => (
            <div className="flex flex-col gap-3 border-b border-black/10 p-6 last:border-0 sm:flex-row sm:items-center sm:justify-between" key={model}><span className="font-semibold">{t("manualAvailable", {model})}</span><span className="text-sm text-black/40">{t("availableSoon")}</span></div>
          ))}
        </div>
      </section>
      <section className="page-shell mt-16 scroll-mt-24" id="parts">
        <div className="rounded-[28px] bg-brand-600 p-8 text-white md:p-12">
          <h2 className="section-title">{t("needPart")}</h2>
          <p className="lead-copy mt-4 text-white/85">{t("needPartBody")}</p>
          <Link className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black" href="/contact-us">{t("requestPartButton")}</Link>
        </div>
      </section>
    </main>
  );
}
