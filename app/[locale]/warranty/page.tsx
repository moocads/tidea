import type { Metadata } from "next";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { Search, Smile, Tag } from "lucide-react";
import {Link} from "@/i18n/navigation";
import {FrenchWarrantyTerms} from "@/lib/legal-translations";

const cardIcons = [Tag, Search, Smile];

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Warranty"});
  return {title: t("meta")};
}

export default async function WarrantyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Warranty");
  const cards = t.raw("cards") as {title: string; body: string}[];
  const claimSteps = t.raw("steps") as string[];
  return (
    <main className="pb-16 pt-16">
      <section className="mx-auto w-full max-w-[1280px] px-6 pt-12 text-center md:px-8 lg:px-12">
        <h1 className="mx-auto max-w-[20ch] text-balance text-[clamp(2.5rem,5.6vw,4.25rem)] font-semibold leading-[1.08] tracking-[0.045em] uppercase">
          {t("titleBefore")} <span className="text-brand-600">{t("titleAccent")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[62ch] text-[clamp(1.0625rem,1.5vw,1.125rem)] leading-[1.55] text-black/70">
          {t("intro")}
        </p>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
            <div className="bg-[#e7edf8] rounded-[24px] p-8 md:p-12" key={card.title}>
              <Icon className="text-[#3768d8]" size={30} />
              <h2 className="mt-8 text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-[1.25]">
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-[1.6] text-black/70">
                {card.body}
              </p>
            </div>
          )})}
        </div>
      </section>

      <section className="mt-16 bg-[#e7edf8] py-12 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-12">
          <h2 className="text-balance text-[35px] font-semibold leading-[1.1] uppercase">
            {t("claimTitle")}
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {claimSteps.map((item, index) => (
              <li
                className="rounded-[24px] border border-brand-200 bg-white p-6 shadow-[0_12px_32px_rgba(56,84,127,0.08)] md:p-8"
                key={item}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-100 font-[family-name:var(--font-ubuntu)] text-[20px] font-semibold text-brand-700">
                  0{index + 1}
                </span>
                <strong className="mt-2 block text-xl leading-6">
                  {item}
                </strong>
              </li>
            ))}
          </ol>
          <Link
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-[15px] font-semibold tracking-[0.01em] text-white transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 uppercase"
            href="/contact-us"
          >
            {t("start")}
          </Link>
          <p className="mt-4 text-sm leading-6">
            {t("registration")}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-24 lg:px-12">
        <details className="group border-y border-black py-6" open>
          <summary className="cursor-pointer list-none text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-[1.25]">
            {t("fullTerms")}
          </summary>
          <div className="mt-6 bg-[#f5f5f5] p-6 text-base leading-[1.65] [&>*+*]:mt-4 md:p-12">
            {locale === "fr" ? <FrenchWarrantyTerms /> : <>
            <h2 className="text-xl font-semibold leading-[1.25] text-[#567dbd]">{t("limitedTitle")}</h2>
            <p>
              This appliance is covered by a 12-month limited warranty from the date of purchase. If this product has any faults, you also have statutory rights as a buyer. These statutory rights are not restricted in any way by the warranty described below.
            </p>
            <LegalHeading>Warranty conditions</LegalHeading>
            <p>
              The warranty period begins on the date of original purchase. Please keep your receipt or order confirmation in a safe place, as it is required as proof of purchase.
            </p>
            <p>
              If a material or manufacturing fault occurs within 12 months of the date of purchase, TIDEA will, at its discretion, supply a replacement part, replace the affected component, or replace the appliance. TIDEA does not issue refunds. Refunds and exchanges are handled solely by the retailer from whom the product was purchased, under that retailer&apos;s own return policy.
            </p>
            <p>
              The repair or replacement of a product does not begin a new warranty period. Replacement parts and appliances are covered for the remainder of the original 12-month period.
            </p>
            <LegalHeading>
              Warranty period and statutory claims for defects
            </LegalHeading>
            <p>
              The warranty period is not extended by warranty service. This also applies to replaced and repaired components. Any damage or defect present at the time of purchase must be reported immediately after unpacking. Service carried out after expiry of the warranty period is subject to a fee.
            </p>
            <LegalHeading>Scope of the warranty</LegalHeading>
            <p>
              The warranty covers material faults and manufacturing faults under normal household use in accordance with the operating instructions.
            </p>
            <p>
              The rechargeable battery is covered for the same 12-month period against defects such as failure to charge, failure to hold a charge due to a cell fault, swelling or short circuit.
            </p>
            <p>This warranty does not cover:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Consumable and wear parts, including the filters and the brush roll.
              </li>
              <li>
                Gradual reduction in battery capacity or running time resulting from normal use and charge cycles.
              </li>
              <li>Damage caused by misuse, abuse, dropping or accident.</li>
              <li>
                Damage caused by vacuuming water or other liquids, hot ash, embers, cigarette butts, plaster, cement, stone dust, sharp objects or glass shards.
              </li>
              <li>
                Damage caused by failure to clean or replace the filters, or by reinstalling a filter that was not completely dry.
              </li>
              <li>
                Damage caused by using parts, accessories, filters or mains adapters not supplied or approved by TIDEA.
              </li>
              <li>
                Appliances that have been opened, modified or repaired by anyone other than TIDEA or a TIDEA-authorized service provider.
              </li>
              <li>
                Appliances on which the model number or serial number has been removed, altered or made illegible.
              </li>
              <li>
                Commercial, rental or industrial use. This product is intended solely for private household use.
              </li>
              <li>
                Products purchased from an unauthorized reseller, or purchased second-hand.
              </li>
              <li>Normal cosmetic wear, scratches and discoloration.</li>
            </ul>
            <LegalHeading>Disclaimers and limitation of liability</LegalHeading>
            <p className="uppercase">
              To the extent permitted by applicable law, this limited warranty is the sole and exclusive warranty for this product and replaces all other warranties, whether oral or written, express or implied.
            </p>
            <p className="uppercase">
              Any implied warranties, including any implied warranty of merchantability or fitness for a particular purpose, are limited in duration to the 12-month warranty period set out above.
            </p>
            <p className="uppercase">
              To the extent permitted by applicable law, TIDEA shall not be liable for any incidental, indirect, special or consequential damages arising from the use of, or the inability to use, this product, including but not limited to loss of time, inconvenience, property damage or commercial loss. The maximum liability of TIDEA under this warranty shall not exceed the original purchase price paid for the product.
            </p>
            <p>
              Some states and provinces do not allow limitations on how long an implied warranty lasts, or the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you.
            </p>
            <p>
              This warranty gives you specific legal rights. You may also have other rights that vary by state or province. Nothing in this warranty limits or excludes any statutory rights that cannot be limited or excluded under applicable law, including under the consumer protection legislation of any Canadian province.
            </p>
            <p>Importer: Stockton International Inc., Ontario, Canada</p>
            </>}
          </div>
        </details>
      </section>
    </main>
  );
}

function LegalHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg text-[#567dbd]">{children}</h3>;
}
