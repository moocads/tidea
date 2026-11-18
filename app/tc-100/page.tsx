import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/content";
export const metadata: Metadata = { title: "TC-100 Cordless Stick Vacuum" };
export default function Page() { return <ProductPage product={products["tc-100"]} />; }
