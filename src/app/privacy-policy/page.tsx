import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Privacy Policy", "Your Data, Protected"),
  description:
    "Read CodSphere's Privacy Policy to understand what information we collect, how we use it, the cookies we rely on, third-party services, and the rights you have over your data.",
  alternates: {
    canonical: "https://codsphere.com/privacy-policy",
  },
};

const lastUpdated = "July 23, 2026";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: [
      "We collect information that you provide directly to us, such as when you fill out a contact form, request a free trial, subscribe to our newsletter, or otherwise communicate with us. This may include your name, email address, phone number, company name, and any message content you share.",
      "We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and the dates and times of your visits. This helps us understand how our site is used and improve your experience.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    body: [
      "We use the information we collect to respond to your enquiries, provide and improve our services, send you requested information and updates, personalise your experience, and maintain the security and performance of our website.",
      "Where you have subscribed to our communications, we may use your contact details to send you marketing or promotional material. You can opt out of these communications at any time using the unsubscribe link or by contacting us directly.",
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking Technologies",
    body: [
      "Our website uses cookies and similar tracking technologies to remember your preferences, analyse traffic, and understand how visitors interact with our content. Some cookies are essential for the website to function, while others help us measure and improve performance.",
      "You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of parts of the site.",
    ],
  },
  {
    id: "third-parties",
    title: "4. Third-Party Services",
    body: [
      "We may use trusted third-party service providers to help us operate our website and deliver our services—for example, analytics providers, email delivery services, and hosting platforms. These providers only access your information to perform tasks on our behalf and are obligated to protect it.",
      "We do not sell your personal information to third parties. We may share information where required by law, to protect our rights, or in connection with a business transfer.",
    ],
  },
  {
    id: "data-retention-security",
    title: "5. Data Retention & Security",
    body: [
      "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements.",
      "We implement appropriate technical and organisational measures designed to protect your information against unauthorised access, loss, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, update, or delete the personal information we hold about you. You may also have the right to object to or restrict certain processing, and to withdraw consent where processing is based on consent.",
      "To exercise any of these rights, please contact us using the details below. We will respond to your request in accordance with applicable data protection laws.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    body: [
      "Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.",
    ],
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we do, we will revise the \u201CLast updated\u201D date at the top of this page. We encourage you to review this policy periodically.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="w-full">
        <div className="container-wrapper py-more">
          <div className="max-w-full md:max-w-[820px]">
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] font-semibold">
              Privacy Policy
            </h1>
            <p className="mt-3 text-black/60 text-[14px] md:text-[16px] leading-5 md:leading-6">
              Last updated: {lastUpdated}
            </p>
            <p className="mt-4 text-[16px] md:text-[18px] leading-6 md:leading-7 text-black/80">
              At CodSphere, we respect your privacy and are committed to protecting the personal
              information you share with us. This Privacy Policy explains what we collect, how we use
              it, and the choices you have. By using our website, you agree to the practices
              described below.
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
                9. Contact Us
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-[15px] md:text-[18px] leading-6 md:leading-7 text-black/80">
                  If you have any questions about this Privacy Policy or how we handle your
                  information, please get in touch:
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
                    <Link href="tel:+16049062693" className="text-[var(--brand-blue)] hover:underline">
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
