import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../globals.css";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {Suspense} from "react";
import {RegionBoundary} from "@/components/region-boundary";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {routing} from "@/i18n/routing";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({locale, namespace: "Metadata"});

  return {
    metadataBase: new URL("https://www.tidea-tech.com"),
    title: {default: t("title"), template: "%s | TIDEA"},
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {en: "/", fr: "/fr", "x-default": "/"},
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html className={ubuntu.variable} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={null}>
            <RegionBoundary>
              <SiteHeader />
              {children}
              <SiteFooter />
            </RegionBoundary>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
