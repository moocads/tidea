import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  return (
    <main className="page-shell flex min-h-[70vh] flex-col items-center justify-center pt-16 text-center">
      <p className="eyebrow">404</p>
      <h1 className="page-title mt-4">{t("title")}</h1>
      <p className="body-copy mt-6 text-black/70">{t("body")}</p>
      <Link className="button-primary mt-8" href="/">{t("home")}</Link>
    </main>
  );
}
