import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Terms & Conditions", "The Rules of Engagement"),
  description:
    "Review CodSphere's Terms & Conditions covering the use of our website and services, intellectual property, payments, warranties, limitation of liability, and your responsibilities as a user.",
  openGraph: {
    title: formatMetaTitle("Terms & Conditions", "The Rules of Engagement"),
    description:
      "Review CodSphere's Terms & Conditions covering the use of our website and services, intellectual property, payments, warranties, limitation of liability, and your responsibilities as a user.",
    url: "https://codsphere.com/terms-and-conditions",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("Terms & Conditions", "The Rules of Engagement"),
    description:
      "Review CodSphere's Terms & Conditions covering the use of our website and services, intellectual property, payments, warranties, limitation of liability, and your responsibilities as a user.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/terms-and-conditions",
  },
};

const lastUpdated = "July 23, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "These Terms & Conditions (the \u201CTerms\u201D) govern your access to and use of the CodSphere website, products, and services (collectively, the \u201CServices\u201D). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Services.",
      "We may update these Terms from time to time. Your continued use of the Services after any changes take effect constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "use-of-services",
    title: "2. Use of Our Services",
    body: [
      "You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not use the Services in any way that could damage, disable, overburden, or impair our systems, or interfere with any other party's use of the Services.",
      "You are responsible for ensuring that any information you provide to us is accurate, current, and complete, and for maintaining the confidentiality of any account credentials associated with your use of the Services.",
    ],
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    body: [
      "All content, features, and functionality on our website\u2014including text, graphics, logos, icons, images, and software\u2014are the property of CodSphere or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any of our content without our prior written permission.",
    ],
  },
  {
    id: "services-and-payment",
    title: "4. Services, Quotes & Payment",
    body: [
      "Any quotes, proposals, or estimates we provide are based on the information available at the time and may be subject to change. The specific scope, deliverables, timelines, and fees for engagements will be set out in a separate agreement or statement of work.",
      "Where fees apply, you agree to pay all charges in accordance with the payment terms provided to you. Unless otherwise stated, fees are exclusive of applicable taxes, which are your responsibility.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-Party Links & Services",
    body: [
      "Our website may contain links to third-party websites or services that are not owned or controlled by CodSphere. We are not responsible for the content, privacy policies, or practices of any third-party sites, and we encourage you to review their terms before using them.",
    ],
  },
  {
    id: "warranties",
    title: "6. Disclaimer of Warranties",
    body: [
      "The Services are provided on an \u201Cas is\u201D and \u201Cas available\u201D basis without warranties of any kind, whether express or implied. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components, or that any defects will be corrected.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, CodSphere and its directors, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill arising out of or in connection with your use of the Services.",
      "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    body: [
      "You agree to indemnify and hold harmless CodSphere and its affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Services or your breach of these Terms.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    body: [
      "These Terms are governed by and construed in accordance with the laws of the Province of British Columbia and the applicable laws of Canada, without regard to conflict of law principles. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts located in British Columbia.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    body: [
      "We reserve the right to modify or replace these Terms at any time. When we do, we will revise the \u201CLast updated\u201D date at the top of this page. We encourage you to review these Terms periodically to stay informed of any updates.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="w-full">
        <div className="container-wrapper py-more">
          <div className="max-w-full md:max-w-[820px]">
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] font-semibold">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-black/60 text-[14px] md:text-[16px] leading-5 md:leading-6">
              Last updated: {lastUpdated}
            </p>
            <p className="mt-4 text-[16px] md:text-[18px] leading-6 md:leading-7 text-black/80">
              Welcome to CodSphere. These Terms &amp; Conditions set out the rules for using our
              website and services. Please read them carefully. By accessing or using our Services,
              you agree to be bound by these Terms.
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col gap-8 md:gap-10 max-w-full md:max-w-[820px]">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] font-semibold">
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[15px] md:text-[18px] leading-6 md:leading-7 text-black/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div id="contact" className="scroll-mt-28">
              <h2 className="text-[22px] md:text-[28px] leading-[30px] md:leading-[36px] font-semibold">
                11. Contact Us
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-[15px] md:text-[18px] leading-6 md:leading-7 text-black/80">
                  If you have any questions about these Terms &amp; Conditions, please get in touch:
                </p>
                <ul className="flex flex-col gap-1 text-[15px] md:text-[18px] leading-6 md:leading-7 text-black/80">
                  <li>
                    Email:{" "}
                    <Link
                      href="mailto:info@codsphere.ca"
                      className="text-[var(--brand-blue)] hover:underline"
                    >
                      info@codsphere.ca
                    </Link>
                  </li>
                  <li>
                    Phone:{" "}
                    <Link
                      href="tel:+16049062693"
                      className="text-[var(--brand-blue)] hover:underline"
                    >
                      +1 (604) 906-2693
                    </Link>
                  </li>
                  <li>Office: Vancouver, Canada</li>
                </ul>
                <p className="text-[15px] md:text-[18px] leading-6 md:leading-7 text-black/80">
                  You can also reach us through our{" "}
                  <Link href="/contact" className="text-[var(--brand-blue)] hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
