"use client";

import {useLocale, useTranslations} from "next-intl";
import {FormEvent, useRef, useState} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Link} from "@/i18n/navigation";
import {submitForm} from "@/lib/form-submissions";
import {TurnstileWidget} from "@/components/turnstile-widget";

type FormMessage = {type: "error" | "success"; text: string} | null;

function formValue(data: FormData, name: string): string {
  return String(data.get(name) ?? "").trim();
}

export function ContactForm() {
  const t = useTranslations("Forms");
  const locale = useLocale() === "fr" ? "fr" : "en";
  const [message, setMessage] = useState<FormMessage>(null);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  async function submit(event: FormEvent<HTMLFormElement>) {
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
        kind: "contact",
        locale,
        firstName: formValue(data, "firstName"),
        lastName: formValue(data, "lastName"),
        email: formValue(data, "email"),
        retailer: formValue(data, "retailer"),
        orderNumber: formValue(data, "orderNumber") || undefined,
        serialNumber: formValue(data, "serialNumber") || undefined,
        topic: formValue(data, "topic"),
        message: formValue(data, "message"),
        marketingConsent: formValue(data, "marketing") === "yes",
        turnstileToken,
        faxNumber: formValue(data, "faxNumber"),
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
    <form className="grid gap-6 rounded-[28px] bg-white p-6 md:grid-cols-2 md:p-12" onSubmit={submit}>
      <TextField label={t("firstName")} name="firstName" required />
      <TextField label={t("lastName")} name="lastName" required />
      <TextField className="md:col-span-2" label={t("email")} name="email" required type="email" />
      <SelectField label={t("retailer")} name="retailer" options={t.raw("retailers")} placeholder={t("select")} required />
      <TextField label={t("orderNumber")} name="orderNumber" />
      <TextField className="md:col-span-2" label={t("serialNumber")} name="serialNumber" />
      <SelectField className="md:col-span-2" label={t("topic")} name="topic" options={t.raw("topics")} placeholder={t("select")} required />
      <label className="md:col-span-2">
        <span className="field-label">{t("message")} *</span>
        <textarea className="field-box min-h-40 resize-y" name="message" required />
      </label>
      <fieldset className="md:col-span-2">
        <legend className="field-label">{t("marketing")}</legend>
        <div className="flex gap-6 text-sm">
          <label className="flex items-center gap-2"><input name="marketing" type="radio" value="yes" /> {t("yes")}</label>
          <label className="flex items-center gap-2"><input defaultChecked name="marketing" type="radio" value="no" /> {t("no")}</label>
        </div>
      </fieldset>
      <HoneypotField />
      <div className="md:col-span-2">
        <TurnstileWidget action="contact" onToken={setTurnstileToken} resetKey={turnstileResetKey} unavailableMessage={t("securityUnavailable")} />
      </div>
      <div className="md:col-span-2">
        <button className="button-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={submitting} type="submit">{submitting ? t("sending") : t("send")}</button>
        <p className="mt-4 text-xs leading-5 text-black/60">{t("privacyNotice")} <Link className="underline underline-offset-2 hover:text-brand-700" href="/privacy-policy">{t("privacy")}</Link>.</p>
        {message ? <p aria-live="polite" className={`mt-4 text-sm ${message.type === "error" ? "text-red-700" : "text-[#4f6f9f]"}`}>{message.text}</p> : null}
      </div>
    </form>
  );
}

export function PartnershipForm() {
  const t = useTranslations("Forms");
  const locale = useLocale() === "fr" ? "fr" : "en";
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState<FormMessage>(null);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  function next() {
    const form = formRef.current;
    if (!form) return;
    const fields = Array.from(form.querySelectorAll<HTMLInputElement>("[data-step='1'] input"));
    const invalid = fields.find((field) => !field.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      return;
    }
    setStep(2);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
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
        kind: "partnership",
        locale,
        firstName: formValue(data, "firstName"),
        lastName: formValue(data, "lastName"),
        email: formValue(data, "email"),
        phone: formValue(data, "phone") || undefined,
        position: formValue(data, "position"),
        company: formValue(data, "company"),
        address: formValue(data, "address"),
        years: Number(formValue(data, "years")),
        websiteUrl: formValue(data, "website"),
        turnstileToken,
        faxNumber: formValue(data, "faxNumber"),
      });
      form.reset();
      setTurnstileToken("");
      setStep(1);
      setMessage({type: "success", text: t("success", {reference: result.reference})});
    } catch {
      setMessage({type: "error", text: t("error")});
    } finally {
      setSubmitting(false);
      setTurnstileResetKey((key) => key + 1);
    }
  }

  return (
    <form className="rounded-[28px] bg-white p-6 md:p-12" onSubmit={submit} ref={formRef}>
      <p className="text-sm text-[#567dbd]">{t("page", {step})}</p>
      <h2 className="feature-title mt-3">{step === 1 ? t("contactInformation") : t("businessInformation")}</h2>
      <div className={step === 1 ? "mt-8 grid gap-6 md:grid-cols-2" : "hidden"} data-step="1">
        <TextField label={t("lastName")} name="lastName" required />
        <TextField label={t("firstName")} name="firstName" required />
        <TextField label={t("email")} name="email" required type="email" />
        <TextField label={t("phone")} name="phone" type="tel" />
        <TextField className="md:col-span-2" label={t("position")} name="position" required />
      </div>
      <div className={step === 2 ? "mt-8 grid gap-6 md:grid-cols-2" : "hidden"} data-step="2">
        <TextField label={t("company")} name="company" required />
        <TextField label={t("address")} name="address" required />
        <TextField label={t("years")} min="0" name="years" required type="number" />
        <TextField label={t("website")} name="website" required type="url" />
      </div>
      <HoneypotField />
      {step === 2 ? <div className="mt-8"><TurnstileWidget action="partnership" onToken={setTurnstileToken} resetKey={turnstileResetKey} unavailableMessage={t("securityUnavailable")} /></div> : null}
      <div className="mt-8 flex flex-wrap gap-3">
        {step === 1 ? (
          <button className="button-primary" onClick={next} type="button">{t("next")} <ArrowRight aria-hidden size={17} /></button>
        ) : (
          <>
            <button className="button-outline" onClick={() => { setTurnstileToken(""); setStep(1); }} type="button"><ArrowLeft aria-hidden size={17} /> {t("back")}</button>
            <button className="button-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={submitting} type="submit">{submitting ? t("sending") : t("submit")}</button>
          </>
        )}
      </div>
      {message ? <p aria-live="polite" className={`mt-4 text-sm ${message.type === "error" ? "text-red-700" : "text-[#4f6f9f]"}`}>{message.text}</p> : null}
    </form>
  );
}

function HoneypotField() {
  return (
    <label aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      Fax
      <input autoComplete="off" name="faxNumber" tabIndex={-1} type="text" />
    </label>
  );
}

function TextField({ className = "", label, min, name, required = false, type = "text" }: { className?: string; label: string; min?: string; name: string; required?: boolean; type?: string }) {
  return (
    <label className={className}>
      <span className="field-label">{label}{required ? " *" : ""}</span>
      <input className="field-box" min={min} name={name} required={required} type={type} />
    </label>
  );
}

function SelectField({ className = "", label, name, options, placeholder, required = false }: { className?: string; label: string; name: string; options: string[]; placeholder: string; required?: boolean }) {
  return (
    <label className={className}>
      <span className="field-label">{label}{required ? " *" : ""}</span>
      <select className="field-box" defaultValue="" name={name} required={required}>
        <option disabled value="">{placeholder}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
