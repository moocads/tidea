import type { Metadata } from "next";
import { LegalPageSection, type LegalSection } from "@/components/sections/legal-page-section";

export const metadata: Metadata = { title: "Terms & Conditions" };

const sections: LegalSection[] = [
  {
    title: "Introduction",
    content: <p>These Terms & Conditions (“Terms”) apply to your use of www.tidea-tech.com (the “Site”), operated by TIDEA Technology (“TIDEA”, “we”, “us” or “our”). By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.</p>,
  },
  {
    title: "1. About this Site",
    content: <p>The Site provides information about TIDEA products, product support and warranty service. We do not sell products directly on the Site. TIDEA products are sold through authorized retailers, such as Walmart. Any purchase you make is a contract between you and that retailer, and the retailer’s own terms, prices and return policy apply.</p>,
  },
  {
    title: "2. Product information and prices",
    content: <p>We work to keep product descriptions, specifications and images accurate and up to date. Specifications are measured under specific conditions, and actual performance may vary with mode, surface and use. Prices shown on the Site are manufacturer’s suggested retail prices. Retailers set their own selling prices, which may differ. We may change product information or discontinue products at any time without notice.</p>,
  },
  {
    title: "3. Warranty",
    content: <p>TIDEA products are covered by the TIDEA 12-Month Limited Warranty, set out on our Warranty page and in each product’s instruction manual. Nothing in these Terms limits your rights under that warranty or under applicable consumer protection law.</p>,
  },
  {
    title: "4. Intellectual property",
    content: <p>All content on the Site, including text, images, videos, and the TIDEA name and logo, belongs to TIDEA Technology or its licensors and is protected by copyright and trademark law. You may view, download or print content from the Site for your personal, non-commercial use, as long as you do not modify it or remove any copyright or trademark notice. Any other use requires our prior written consent.</p>,
  },
  {
    title: "5. Your submissions",
    content: <><p>When you contact us, submit a warranty claim, send a review, or upload photos or videos, you confirm that the information is accurate and that you have the right to share it. You allow TIDEA to use your submission to respond to you, to provide support and warranty service, and to improve our products. We will not publish your review, name, photos or videos without your permission.</p><p>Please do not send us confidential information. Product ideas or suggestions you send may be used by TIDEA without any obligation to you. How we handle personal information is explained in our Privacy Policy.</p></>,
  },
  {
    title: "6. Acceptable use",
    content: <><p>You agree not to:</p><ul className="list-disc space-y-2 pl-6"><li>use the Site for any unlawful purpose;</li><li>try to gain unauthorized access to the Site or its systems;</li><li>upload viruses or other harmful code;</li><li>submit false information or impersonate another person; or</li><li>copy, scrape or resell Site content for commercial purposes.</li></ul></>,
  },
  {
    title: "7. Links to other websites",
    content: <p>The Site links to third-party websites, including retailer websites. These websites are not controlled by TIDEA, and we are not responsible for their content, products, prices or privacy practices. A link does not mean we endorse that website.</p>,
  },
  {
    title: "8. Disclaimer",
    content: <p>The Site and its content are provided “as is” and “as available”. To the extent permitted by applicable law, TIDEA makes no warranties, express or implied, about the Site, including that it will be uninterrupted, error-free or free of viruses. This section does not affect the TIDEA Limited Warranty that covers our products.</p>,
  },
  {
    title: "9. Limitation of liability",
    content: <p>To the extent permitted by applicable law, TIDEA will not be liable for any indirect, incidental, special or consequential damages arising from your use of, or inability to use, the Site. Nothing in these Terms excludes or limits any liability that cannot be excluded or limited by law, including your rights under the consumer protection laws of your province or state.</p>,
  },
  {
    title: "10. Changes to these Terms",
    content: <p>We may update these Terms from time to time. The updated version will be posted on this page with a new “Last updated” date. If you continue to use the Site after a change, you accept the updated Terms.</p>,
  },
  {
    title: "11. Governing law",
    content: <p>These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there. If you are a consumer, you keep any protection given to you by the mandatory laws of the province, state or country where you live.</p>,
  },
  {
    title: "12. Contact us",
    content: <p>Questions about these Terms? Email us at <a className="underline underline-offset-2" href="mailto:support@tidea-tech.com">support@tidea-tech.com</a>.</p>,
  },
];

export default function TermsPage() {
  return <main className="pb-16 pt-16"><LegalPageSection lastUpdated="November 15, 2026" sections={sections} title="Terms & Conditions" /></main>;
}
