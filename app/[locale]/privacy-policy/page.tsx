import type { Metadata } from "next";
import {getTranslations, setRequestLocale} from "next-intl/server";
import { LegalPageSection, type LegalSection } from "@/components/sections/legal-page-section";
import {privacySectionsFr} from "@/lib/legal-translations";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Legal"});
  return {title: t("privacyTitle")};
}

const sections: LegalSection[] = [
  {
    title: "Introduction",
    content: <p>TIDEA Technology (“TIDEA”, “we”, “us” or “our”) respects your privacy. This Privacy Policy explains what personal information we collect through www.tidea-tech.com (the “Site”) and our customer support, how we use it, and the choices you have.</p>,
  },
  {
    title: "1. Information we collect",
    content: <><h3 className="font-semibold text-black">Information you give us</h3><ul className="list-disc space-y-2 pl-6"><li><strong>Support and warranty requests:</strong> your name, email address, where you bought your product, order number, serial number, the details of your request, and any photos or videos you upload. If we need to ship you a replacement part, we will also ask for your mailing address and phone number.</li><li><strong>Newsletter:</strong> your email address, if you choose to subscribe.</li><li><strong>Partnership inquiries:</strong> your name, email address, phone number, job title and business information.</li></ul><h3 className="font-semibold text-black">Information collected automatically</h3><p>When you visit the Site, our website platform collects technical information such as your IP address, browser and device type, the pages you view and the website that referred you. This is done with cookies and similar technologies.</p><p>We do not collect payment information. TIDEA products are purchased from retailers, not on the Site.</p></>,
  },
  {
    title: "2. How we use your information",
    content: <><p>We use your information to:</p><ul className="list-disc space-y-2 pl-6"><li>answer your questions and support requests;</li><li>review and fulfil warranty claims, including shipping replacement parts;</li><li>send product tips and safety notices, if you selected “Yes” on the contact form;</li><li>send our newsletter, if you subscribed;</li><li>respond to partnership inquiries;</li><li>operate, secure and improve the Site and our products; and</li><li>meet our legal obligations, including product safety recalls.</li></ul><p>If there is a safety recall for a product you own, we may contact you about it even if you have not subscribed to our emails.</p></>,
  },
  {
    title: "3. Your consent",
    content: <p>When you submit a form, you consent to our use of your information for the purpose of that form. We send marketing emails only with your consent, and every marketing email includes an unsubscribe link. You can withdraw your consent at any time by unsubscribing or by emailing us.</p>,
  },
  {
    title: "4. How we share your information",
    content: <><p>We do not sell or rent your personal information. We share it only:</p><ul className="list-disc space-y-2 pl-6"><li>with service providers that help us run the Site and our support, such as website hosting, email and shipping providers. They may use your information only to provide services to us;</li><li>with the retailer you bought from, when needed to resolve a return, exchange or warranty issue;</li><li>when required by law, or to protect the rights, property or safety of TIDEA, our customers or others; and</li><li>with a successor business if TIDEA is reorganized, merged or sold.</li></ul></>,
  },
  {
    title: "5. Where your information is stored",
    content: <p>Our service providers may store and process your information in Canada, the United States or other countries. When your information is stored outside your province or country, it may be accessible to courts, law enforcement and other authorities there under local law.</p>,
  },
  {
    title: "6. Cookies",
    content: <p>The Site uses cookies that it needs to work, and cookies that help us understand how visitors use it. You can block or delete cookies in your browser settings. Some parts of the Site may not work properly if you do.</p>,
  },
  {
    title: "7. How long we keep your information",
    content: <p>We keep personal information only as long as we need it for the purposes above. Support and warranty records are generally kept for the warranty period plus up to two years, unless the law requires a longer period. Newsletter subscriptions are kept until you unsubscribe.</p>,
  },
  {
    title: "8. How we protect your information",
    content: <p>We use reasonable administrative, technical and physical safeguards to protect your personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>,
  },
  {
    title: "9. Your rights",
    content: <><p>You can ask to access, correct or delete the personal information we hold about you, or withdraw your consent to its use. Depending on where you live, including Quebec, California and other U.S. states, you may have additional rights under local law. We will not treat you differently for exercising your rights.</p><p>To make a request, email us at the address below. We will respond within 30 days. If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner of Canada or the privacy authority where you live.</p></>,
  },
  {
    title: "10. Children",
    content: <p>The Site is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has sent us personal information, please contact us and we will delete it.</p>,
  },
  {
    title: "11. Changes to this Privacy Policy",
    content: <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new “Last updated” date.</p>,
  },
  {
    title: "12. Contact us",
    content: <address className="not-italic">Privacy Officer, TIDEA Technology<br /><a className="underline underline-offset-2" href="mailto:support@tidea-tech.com">support@tidea-tech.com</a></address>,
  },
];

export default async function PrivacyPolicyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Legal");
  return <main className="pb-16 pt-16"><LegalPageSection lastUpdated={t("date")} lastUpdatedLabel={t("lastUpdatedLabel")} sections={locale === "fr" ? privacySectionsFr : sections} title={t("privacyTitle")} /></main>;
}
