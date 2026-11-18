"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const footerGroups = [
  [
    ["Home", "/"],
    ["About", "/aboutus"],
    ["Contact", "/contact-us"],
  ],
  [
    ["Products", "/vacuums"],
    ["Partnership", "/partnership"],
  ],
  [
    ["Support", "/support-tc-100"],
    ["Contact Us", "/contact-us"],
    ["FAQ", "/support-tc-100"],
    ["Warranty", "/warranty"],
    ["Privacy Policy", "/privacy-policy"],
    ["Terms & Conditions", "/terms-and-conditions"],
  ],
];

export function SiteFooter() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setMessage("Newsletter submission is not connected in this frontend-only phase.");
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
          <form className="space-y-6" noValidate onSubmit={handleSubmit}>
            <h2 className="card-title">Subscribe and stay updated</h2>
            <label className="block text-sm" htmlFor="newsletter-email">Email *</label>
            <input className="field-line" id="newsletter-email" name="email" required type="email" />
            <label className="flex items-start gap-3 text-sm">
              <input className="mt-1 size-4 accent-[#567dbd]" type="checkbox" />
              <span>Yes, subscribe me to your newsletter.</span>
            </label>
            <p className="text-xs leading-5 text-black/60">
              By subscribing, you agree to receive emails from TIDEA. You can unsubscribe at any time. See our{" "}
              <Link className="underline underline-offset-2 hover:text-[#5579b8]" href="/privacy-policy">Privacy Policy</Link>.
            </p>
            <button className="button-dark" type="submit">Submit</button>
            {message ? <p aria-live="polite" className="text-sm text-[#4f6f9f]">{message}</p> : null}
          </form>
        </div>
        <p className="pt-8 text-sm">© 2026 TIDEA Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
