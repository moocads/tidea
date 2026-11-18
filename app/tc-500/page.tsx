import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/content";
export const metadata: Metadata = { title: "TC-500 Self-Emptying Cordless Vacuum" };
export default function Page() { return <ProductPage product={products["tc-500"]} />; }
