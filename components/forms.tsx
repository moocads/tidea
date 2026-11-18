"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const unavailableMessage = "Form submission is not connected in this frontend-only phase.";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setMessage(unavailableMessage);
  }

  return (
    <form className="grid gap-6 rounded-[28px] bg-white p-6 md:grid-cols-2 md:p-12" onSubmit={submit}>
      <TextField label="First name" name="firstName" required />
      <TextField label="Last name" name="lastName" required />
      <TextField className="md:col-span-2" label="Email" name="email" required type="email" />
      <SelectField label="Where did you buy it?" name="retailer" options={["Walmart", "Amazon", "Other retailer"]} required />
      <TextField label="Order number" name="orderNumber" />
      <TextField className="md:col-span-2" label="Serial number (on the rating label)" name="serialNumber" />
      <SelectField className="md:col-span-2" label="What do you need help with?" name="topic" options={["Product question", "Troubleshooting", "Warranty claim", "Replacement part", "Other"]} required />
      <label className="md:col-span-2">
        <span className="field-label">Message *</span>
        <textarea className="field-box min-h-40 resize-y" name="message" required />
      </label>
      <label className="md:col-span-2">
        <span className="field-label">Photo or video</span>
        <input accept="image/*,video/*" className="field-box file:mr-4 file:rounded-full file:border-0 file:bg-[#e7edf8] file:px-4 file:py-2" name="attachment" type="file" />
      </label>
      <fieldset className="md:col-span-2">
        <legend className="field-label">May we contact you with product updates?</legend>
        <div className="flex gap-6 text-sm">
          <label className="flex items-center gap-2"><input name="marketing" type="radio" value="yes" /> Yes</label>
          <label className="flex items-center gap-2"><input defaultChecked name="marketing" type="radio" value="no" /> No</label>
        </div>
      </fieldset>
      <div className="md:col-span-2">
        <button className="button-primary" type="submit">Send Message</button>
        <p className="mt-4 text-xs leading-5 text-black/60">We only use your details to answer your request. See our <Link className="underline underline-offset-2 hover:text-brand-700" href="/privacy-policy">Privacy Policy</Link>.</p>
        {message ? <p aria-live="polite" className="mt-4 text-sm text-[#4f6f9f]">{message}</p> : null}
      </div>
    </form>
  );
}

export function PartnershipForm() {
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
    setMessage(unavailableMessage);
  }

  return (
    <form className="rounded-[28px] bg-white p-6 md:p-12" onSubmit={submit} ref={formRef}>
      <p className="text-sm text-[#567dbd]">Page {step} out of 2</p>
      <h2 className="feature-title mt-3">{step === 1 ? "Contact Information" : "Business Information"}</h2>
      <div className={step === 1 ? "mt-8 grid gap-6 md:grid-cols-2" : "hidden"} data-step="1">
        <TextField label="Last name" name="lastName" required />
        <TextField label="First name" name="firstName" required />
        <TextField label="Email" name="email" required type="email" />
        <TextField label="Phone" name="phone" type="tel" />
        <TextField className="md:col-span-2" label="Position" name="position" required />
      </div>
      <div className={step === 2 ? "mt-8 grid gap-6 md:grid-cols-2" : "hidden"} data-step="2">
        <TextField label="Company name" name="company" required />
        <TextField label="Company Address" name="address" required />
        <TextField label="Years of Operations" min="0" name="years" required type="number" />
        <TextField label="Website URL" name="website" required type="url" />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {step === 1 ? (
          <button className="button-primary" onClick={next} type="button">Next <ArrowRight aria-hidden size={17} /></button>
        ) : (
          <>
            <button className="button-outline" onClick={() => setStep(1)} type="button"><ArrowLeft aria-hidden size={17} /> Back</button>
            <button className="button-primary" type="submit">Submit</button>
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

function SelectField({ className = "", label, name, options, required = false }: { className?: string; label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className={className}>
      <span className="field-label">{label}{required ? " *" : ""}</span>
      <select className="field-box" defaultValue="" name={name} required={required}>
        <option disabled value="">Select an option</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
