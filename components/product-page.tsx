import Image from "next/image";
import {getTranslations} from "next-intl/server";
import { ChevronDown } from "lucide-react";
import type { ProductData } from "@/lib/content";
import { ProductGallery } from "@/components/product-gallery";
import {
  RegionalPrice,
  RegionalPurchaseActions,
} from "@/components/regional-purchase-panel";
import { Reveal } from "@/components/reveal";
import {Link} from "@/i18n/navigation";

export async function ProductPage({ product }: { product: ProductData }) {
  const t = await getTranslations("ProductUI");
  return (
    <main className="bg-white pb-16 pt-16">
      <section className="page-shell py-8 md:py-12">
        <nav aria-label={t("breadcrumbs")} className="mb-8 flex gap-2 text-sm text-black/55">
          <Link className="hover:text-[#567dbd]" href="/">{t("home")}</Link>
          <span>/</span>
          <span>{product.model}</span>
        </nav>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <ProductGallery images={product.gallery} model={product.model} />
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4">{product.model}</p>
            <h1 className="text-balance text-[50px] font-semibold leading-[1.08] tracking-[-0.015em]">{product.title}</h1>
            <RegionalPrice slug={product.slug} />
            <h2 className="card-title mt-8">{product.tagline}</h2>
            <p className="body-copy mt-4 text-black/70">{product.description}</p>
            <RegionalPurchaseActions
              manualUrl={product.manualUrl}
              slug={product.slug}
              status={product.status}
            />
            <details className="group mt-8 overflow-hidden rounded-[24px] border border-black/10 bg-[#f5f7fb] shadow-[0_12px_32px_rgba(29,45,70,0.06)]" open>
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold transition-colors hover:bg-[#edf2f9]">
                <span>{t("details")}</span>
                <span className="grid size-9 place-items-center rounded-full border border-black/10 bg-white">
                  <ChevronDown className="transition-transform duration-500 ease-out group-open:rotate-180" size={18} />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-open:grid-rows-[1fr] group-open:opacity-100">
                <div className="min-h-0 overflow-hidden">
                  <div className="px-6 pb-6">
                    <p className="body-copy mb-4 text-black/60">{product.includesIntro}</p>
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                      <table aria-label={t("includedItems", {model: product.model})} className="w-full border-collapse text-left">
                        <tbody className="divide-y divide-black/10">
                          {product.includes.map((item, index) => (
                            <tr className="transition-colors hover:bg-[#edf3fb]" key={item}>
                              <th className="w-16 px-4 py-3 text-xs font-semibold tracking-[0.12em] text-[#567dbd]" scope="row">0{index + 1}</th>
                              <td className="px-4 py-3 text-sm leading-6 text-black/75">{item}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section-space mt-12 bg-[#e7edf8]">
        <div className="page-shell space-y-16">
          {product.features.map((feature, index) => (
            <Reveal className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${index % 2 ? "md:[&>div:first-child]:order-2" : ""}`} key={feature.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-white/55">
                <Image alt={feature.title} className="object-contain" fill sizes="(min-width: 768px) 50vw, 100vw" src={feature.image} />
              </div>
              <div>
                <p className="eyebrow mb-4">0{index + 1}</p>
                <h2 className="max-w-[20ch] text-balance text-[30px] font-semibold leading-[1.14] tracking-[-0.01em]">{feature.title}</h2>
                <p className="body-copy mt-6 text-black/70">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <h2 className="section-title mx-auto text-center">{product.runtimeTitle}</h2>
        {product.runtimeNote ? <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-black/60">{product.runtimeNote}</p> : null}
        <div className={`mx-auto mt-12 grid max-w-5xl gap-4 ${product.runtimes.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {product.runtimes.map((runtime) => (
            <div className="rounded-[28px] bg-[#f0f4fa] p-8 text-center" key={runtime.mode}>
              <p className="text-6xl font-semibold leading-none text-[#5479b8]">{runtime.minutes}</p>
              <p className="mt-1 text-lg font-semibold">{t("minutes")}</p>
              <p className="mt-6 text-xs font-semibold tracking-[0.14em]">{t("mode", {mode: runtime.mode})}</p>
              <p className="card-copy mt-3 text-black/70">{runtime.body}</p>
            </div>
          ))}
        </div>
      </section>

      {product.lifestyle ? (
        <section className="section-space bg-[#587dbd] text-white">
          <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 className="section-title">{product.lifestyle.title}</h2>
              <div className="mt-8 space-y-6">
                {product.lifestyle.columns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-lg font-semibold leading-6">{column.title}</h3>
                    <p className="body-copy mt-2 text-white/90">{column.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-[28px] bg-white">
              <Image alt={product.lifestyle.title} className="object-contain" fill sizes="(min-width: 1024px) 55vw, 100vw" src={product.lifestyle.image} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="page-shell section-space">
        <h2 className="section-title">{t("specs")}</h2>
        <dl className="mt-12 grid overflow-hidden rounded-[28px] border border-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {product.specs.map((spec) => (
            <div className="border-b border-black/10 p-6 sm:border-r" key={spec.label}>
              <dt className="text-sm text-black/55">{spec.label}</dt>
              <dd className="mt-2 font-semibold leading-6">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
