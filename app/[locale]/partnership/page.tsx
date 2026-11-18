import type { Metadata } from "next";
import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { PartnershipForm } from "@/components/forms";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Partnership"});
  return {title: t("meta")};
}

export default async function PartnershipPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Partnership");
  return (
    <main className="pt-16">
      <section className="page-shell section-space"><div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"><div><p className="eyebrow">{t("eyebrow")}</p><h1 className="page-title mt-4">{t("title")}</h1><p className="lead-copy mt-6 text-black/70">{t("body")}</p></div><div className="relative aspect-[3/2] overflow-hidden rounded-[32px]"><Image alt={t("imageAlt")} className="object-cover" fill preload sizes="(min-width: 1024px) 50vw, 100vw" src="/images/tidea/eeafbb_9399feef31cd4dbaae0e013e46639b59~mv2.jpg" /></div></div></section>
      <section className="section-space bg-[#e7edf8]"><div className="page-shell"><h2 className="section-title">{t("formTitle")}</h2><div className="mt-12"><PartnershipForm /></div></div></section>
    </main>
  );
}
