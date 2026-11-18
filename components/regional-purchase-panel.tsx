"use client";

import {Download, ShoppingBag} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import type {ProductData} from "@/lib/content";
import {
  formatProductPrice,
  getProductRegion,
  regionConfig,
} from "@/lib/region";
import {useRegion} from "@/components/region-provider";

export function RegionalPrice({slug}: Pick<ProductData, "slug">) {
  const locale = useLocale();
  const {region} = useRegion();

  return (
    <p className="mt-6 text-2xl">
      {formatProductPrice(slug, region, locale)}
    </p>
  );
}

export function RegionalPurchaseActions({
  manualUrl,
  slug,
  status,
}: Pick<ProductData, "manualUrl" | "slug" | "status">) {
  const t = useTranslations("ProductUI");
  const {region} = useRegion();
  const regionalProduct = getProductRegion(slug, region);

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {status === "available" && regionalProduct.walmartUrl ? (
        <>
          <a
            className="button-primary"
            href={regionalProduct.walmartUrl}
            rel="noreferrer"
            target="_blank"
          >
            <ShoppingBag aria-hidden size={17} />
            {t("shopAt", {retailer: regionConfig[region].retailer})}
          </a>
          {manualUrl ? (
            <a
              className="button-outline"
              href={manualUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Download aria-hidden size={17} /> {t("downloadManual")}
            </a>
          ) : null}
        </>
      ) : (
        <>
          <button
              className="button-outline cursor-not-allowed border-black/15 bg-black/[0.03] text-black/40 hover:border-black/15 hover:text-black/40"
            disabled
            type="button"
          >
            {t("comingSoon")}
          </button>
          <button
            className="button-outline cursor-not-allowed border-black/15 bg-black/[0.03] text-black/40 hover:border-black/15 hover:text-black/40"
            disabled
            type="button"
          >
            <Download aria-hidden size={17} /> {t("manualSoon")}
          </button>
        </>
      )}
    </div>
  );
}
