import type { Metadata } from "next";
import {setRequestLocale} from "next-intl/server";
import { ProductPage } from "@/components/product-page";
import {getProducts} from "@/lib/localized-content";
export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  return {title: getProducts(locale)["tc-500"].title};
}
export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <ProductPage product={getProducts(locale)["tc-500"]} />;
}
