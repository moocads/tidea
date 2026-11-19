"use client";

import {useTranslations} from "next-intl";
import { FormEvent, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {Link} from "@/i18n/navigation";

export function ContactForm() {
  const t = useTranslations("Forms");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setMessage(t("unavailable"));
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
      <div className="md:col-span-2">
        <button className="button-primary" type="submit">{t("send")}</button>
        <p className="mt-4 text-xs leading-5 text-black/60">{t("privacyNotice")} <Link className="underline underline-offset-2 hover:text-brand-700" href="/privacy-policy">{t("privacy")}</Link>.</p>
        {message ? <p aria-live="polite" className="mt-4 text-sm text-[#4f6f9f]">{message}</p> : null}
      </div>
    </form>
  );
}

export function PartnershipForm() {
  const t = useTranslations("Forms");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
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

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setMessage(t("unavailable"));
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
      <div className="mt-8 flex flex-wrap gap-3">
        {step === 1 ? (
          <button className="button-primary" onClick={next} type="button">{t("next")} <ArrowRight aria-hidden size={17} /></button>
        ) : (
          <>
            <button className="button-outline" onClick={() => setStep(1)} type="button"><ArrowLeft aria-hidden size={17} /> {t("back")}</button>
            <button className="button-primary" type="submit">{t("submit")}</button>
          </>
        )}
      </div>
      {message ? <p aria-live="polite" className="mt-4 text-sm text-[#4f6f9f]">{message}</p> : null}
    </form>
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
