import Image from "next/image";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { Reveal } from "@/components/reveal";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { TideaWordmark } from "@/components/shared/tidea-wordmark";
import { ShoppingBag } from "lucide-react";
import {Link} from "@/i18n/navigation";

const featureImages = [
  "/images/tidea/eeafbb_661262815c764a4d8ab35af4fc976f64~mv2.png",
  "/images/tidea/eeafbb_c651c8113b574eefae05e180cbd5cd1d~mv2.png",
  "/images/tidea/eeafbb_c7cce1e160a8468db4013514ffc82352~mv2.png",
  "/images/tidea/eeafbb_9ca44939ca81436dba1f2a79cc93ce05~mv2.png",
];

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const features = t.raw("features") as {title: string; body: string}[];
  const marqueeItems = [
    {label: t("marquee1"), accent: false},
    {label: t("marquee2"), accent: true},
    {label: t("marquee3"), accent: false},
  ];
  return (
    <main>
      <section className="relative min-h-[760px] overflow-hidden">
        <video
          aria-label={t("heroAria")}
          autoPlay
          className="absolute inset-0 size-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/tidea-home-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
        <div className="page-shell relative flex min-h-[760px] items-center justify-start pb-12 pt-16 text-left text-white">
          <div className="w-full max-w-5xl">
            <h1 className="max-w-[24ch] text-[60px] font-semibold leading-[1] uppercase"><span className="block whitespace-nowrap">{t("heroTitle1")}</span><span className="block whitespace-nowrap">{t("heroTitle2")}</span></h1>
            <p className="mt-6 text-white/90">{t("heroBody")}</p>
            <Link className="button-primary mt-8" href="/vacuums"><ShoppingBag aria-hidden size={17} /> {t("shopNow")}</Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-[#000000] py-4 text-white">
        <div className="marquee-track flex whitespace-nowrap font-[family-name:var(--font-ubuntu)] text-base font-medium ">
          {Array.from({ length: 2 }, (_, groupIndex) => (
            <div aria-hidden={groupIndex === 1 || undefined} className="flex shrink-0 items-center" key={groupIndex}>
              {Array.from({ length: 2 }, (_, cycleIndex) => (
                <div className="flex shrink-0 items-center" key={cycleIndex}>
                  {marqueeItems.map((item) => (
                    <span className="flex items-center gap-12 pr-12" key={item.label}>
                      <span className={item.accent ? "text-[#567dbd]" : undefined}>{item.label}</span>
                
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section-space relative overflow-hidden bg-[#ffffff] text-white">
        <TideaWordmark
          className="pointer-events-none absolute inset-x-0 top-1/2 h-auto w-full -translate-y-1 select-none"
          color="#e7edf8"
        />
        <div className="page-shell relative z-10 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow text-black/85">{t("featured")}</p>
            <h2 className="mt-4 text-[50px] font-semibold leading-[1.14] tracking-[-0.01em] text-black">{t("featuredTitle")}</h2>
     
              <Link className="button-primary mt-8" href="/vacuums"><ShoppingBag aria-hidden size={17} /> {t("shopNow")}</Link>
          </Reveal>
          <Reveal className="flex justify-center" delay={0.08}>
            <Image alt="TIDEA TC-100 Cordless Stick Vacuum" className="h-auto w-[150%] max-w-none shrink-0 object-contain" height={1000} sizes="(min-width: 768px) 60vw, 100vw" src="/t100/home-t100-banner3.png" width={1500} />
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <h2 className="mx-auto text-center text-[35px] font-semibold leading-[1.1]">{t("built")}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal className="rounded-[28px] bg-[#e7edf8] p-6 text-center hover:bg-brand-300 hover:shadow-[0_12px_32px_rgba(29,45,70,0.06)] hover:scale-105 transition-all duration-300" delay={index * 0.05} key={feature.title}>
                <div className="mx-auto flex w-fit items-center justify-center rounded-full bg-brand-200 p-[18px]">
                <Image alt="" className="mx-auto size-28 object-contain" height={160} src={featureImages[index]} width={160} />
                </div>
                <h3 className="card-title text-[20px] mt-6">{feature.title}</h3>
                <p className="card-copy mt-3 text-black/70">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#e7edf8]">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white"><Image alt={t("vacuumAlt")} className="object-contain" fill sizes="40vw" src="/images/tidea/eeafbb_237b9285ed3642418accddf4d45e5eb9~mv2.jpg" /></div>
            <div className="relative mt-12 aspect-[4/5] overflow-hidden rounded-[28px] bg-white"><Image alt={t("accessoriesAlt")} className="object-cover" fill sizes="40vw" src="/images/tidea/eeafbb_11c06ee96c06417b97fb73832e959e2d~mv2.jpg" /></div>
          </div>
          <div>
            <p className="eyebrow">{t("ourProducts")}</p>
            <h2 className="section-title mt-4">{t("collectionTitle")}</h2>
            <p className="lead-copy mt-6 text-black/70">{t("collectionBody")}</p>
            <Link className="button-dark mt-8" href="/vacuums">{t("browse")}</Link>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </main>
  );
}
