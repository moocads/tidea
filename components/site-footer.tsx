"use client";

import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {FormEvent, useState} from "react";
import {FormStatusMessage, type FormStatus} from "@/components/form-status-message";
import {TurnstileWidget} from "@/components/turnstile-widget";
import {Link} from "@/i18n/navigation";
import {submitForm} from "@/lib/form-submissions";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const locale = useLocale() === "fr" ? "fr" : "en";
  const [message, setMessage] = useState<FormStatus | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const footerGroups = [
    [[t("home"), "/"], [t("about"), "/aboutus"], [t("contact"), "/contact-us"]],
    [[t("products"), "/vacuums"], [t("partnership"), "/partnership"]],
    [[t("support"), "/customer-care"], [t("contactUs"), "/contact-us"], [t("faq"), "/customer-care"], [t("warranty"), "/warranty"], [t("privacy"), "/privacy-policy"], [t("terms"), "/terms-and-conditions"]],
  ] as const;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!turnstileToken) {
      setMessage({type: "error", text: t("verificationRequired")});
      return;
    }

    const data = new FormData(form);
    setSubmitting(true);
    setMessage(null);
    try {
      const result = await submitForm({
        kind: "newsletter",
        locale,
        email: String(data.get("email") ?? "").trim(),
        consent: true,
        turnstileToken,
        faxNumber: String(data.get("faxNumber") ?? "").trim(),
      });
      form.reset();
      setMessage({type: "success", text: t("success", {reference: result.reference})});
    } catch {
      setMessage({type: "error", text: t("error")});
    } finally {
      setSubmitting(false);
      setTurnstileResetKey((key) => key + 1);
    }
  }

  return (
    <footer className="footer-gradient px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-8 py-12 md:px-12">
        <div className="grid gap-12 border-b border-black/60 pb-12 md:grid-cols-[180px_1fr_370px] md:gap-8">
          <div>
            <Image
              alt="TIDEA"
              className="mb-8 h-auto w-24 opacity-70"
              height={267}
              src="/images/tidea/451416_ede2202648b24e5086202d58fcdc170d~mv2.png"
              width={734}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group, index) => (
              <div className="space-y-2 text-sm leading-6" key={index}>
                {group.map(([label, href]) => (
                  <Link className="block underline underline-offset-2 hover:text-[#5579b8]" href={href} key={href + label}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h2 className="card-title">{t("subscribe")}</h2>
            <label className="block text-sm" htmlFor="newsletter-email">{t("email")} *</label>
            <input className="field-line" id="newsletter-email" name="email" required type="email" />
            <label className="flex items-start gap-3 text-sm">
              <input className="mt-1 size-4 accent-[#567dbd]" name="consent" required type="checkbox" />
              <span>{t("consent")}</span>
            </label>
            <p className="text-xs leading-5 text-black/60">
              {t.rich("privacyNotice", {
                privacy: (chunks) => <Link className="underline underline-offset-2 hover:text-[#5579b8]" href="/privacy-policy">{chunks}</Link>,
              })}
            </p>
            <label aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">Fax<input autoComplete="off" name="faxNumber" tabIndex={-1} type="text" /></label>
            <TurnstileWidget action="newsletter" onToken={setTurnstileToken} resetKey={turnstileResetKey} unavailableMessage={t("securityUnavailable")} />
            <button className="button-dark disabled:cursor-not-allowed disabled:opacity-60" disabled={submitting} type="submit">{submitting ? t("sending") : t("submit")}</button>
            {message ? <FormStatusMessage message={message} successTitle={t("successTitle")} /> : null}
          </form>
        </div>
        <p className="pt-8 text-sm">{t("copyright")}</p>
      </div>
    </footer>
  );
}
