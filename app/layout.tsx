import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tidea-tech.com"),
  title: { default: "TIDEA Technology", template: "%s | TIDEA" },
  description: "Smart cleaning solutions designed for effortless everyday living.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={ubuntu.variable} lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
