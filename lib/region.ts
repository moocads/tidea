import type {ProductData} from "@/lib/content";

export type Region = "CA" | "US";

export const REGION_COOKIE = "tidea-region";
export const DETECTED_REGION_COOKIE = "tidea-detected-region";

export const regionConfig: Record<
  Region,
  {
    currency: "CAD" | "USD";
    flag: string;
    retailer: string;
  }
> = {
  CA: {
    currency: "CAD",
    flag: "🇨🇦",
    retailer: "Walmart.ca",
  },
  US: {
    currency: "USD",
    flag: "🇺🇸",
    retailer: "Walmart.com",
  },
};

const productRegions: Record<
  ProductData["slug"],
  Record<Region, {price: number; walmartUrl?: string}>
> = {
  "tc-100": {
    CA: {
      price: 299.99,
      walmartUrl:
        "https://www.walmart.ca/en/ip/TIDEA-TC-100-Cordless-Stick-Vacuum-Cleaner-Lightweight-Vacuum-45-min-runtime-Digital-Display-Designed-for-Floor-Carpet-Pet-Hair/75QWA96EWP41",
    },
    US: {
      price: 299.99,
      walmartUrl:
        "https://www.walmart.com/ip/TIDEA-TC-100-Cordless-Stick-Vacuum-Cleaner-Lightweight-Vacuum-50-min-runtime-Digital-Display-Designed-for-Floor-Carpet-Pet-Hair/21053313590",
    },
  },
  "tc-200": {
    CA: {price: 299.99},
    US: {price: 299.99},
  },
  "tc-500": {
    CA: {price: 299.99},
    US: {price: 299.99},
  },
};

export function isRegion(value: string | undefined): value is Region {
  return value === "CA" || value === "US";
}

export function getProductRegion(
  slug: ProductData["slug"],
  region: Region,
) {
  return productRegions[slug][region];
}

export function formatProductPrice(
  slug: ProductData["slug"],
  region: Region,
  locale: string,
) {
  const {price} = getProductRegion(slug, region);
  const {currency} = regionConfig[region];
  const numberLocale = locale === "fr" ? "fr-CA" : region === "CA" ? "en-CA" : "en-US";

  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency,
    currencyDisplay: "code",
  }).format(price);
}
