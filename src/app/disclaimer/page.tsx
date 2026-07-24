import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Disclaimer", "Important Information"),
  description:
    "Read CodSphere's Disclaimer covering the accuracy of information on our website, professional advice, external links, and the limitations of our liability.",
  openGraph: {
    title: formatMetaTitle("Disclaimer", "Important Information"),
    description:
      "Read CodSphere's Disclaimer covering the accuracy of information on our website, professional advice, external links, and the limitations of our liability.",
    url: "https://codsphere.com/disclaimer",
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
    title: formatMetaTitle("Disclaimer", "Important Information"),
    description:
      "Read CodSphere's Disclaimer covering the accuracy of information on our website, professional advice, external links, and the limitations of our liability.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/disclaimer",
  },
};

const lastUpdated = "July 23, 2026";

const sections = [
  {
    id: "general-information",
    title: "1. General Information",
    body: [
      "The information provided on the CodSphere website is for general informational purposes only. While we strive to keep the content accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, or services contained on the website.",
      "Any reliance you place on such information is therefore strictly at your own risk.",
    ],
  },
  {
    id: "no-professional-advice",
    title: "2. No Professional Advice",
    body: [
      "The content on this website does not constitute professional, legal, financial, or technical advice and should not be relied upon as a substitute for advice from a qualified professional. Before making any decision or taking any action based on the information on this website, you should consult an appropriate professional.",
    ],
  },
  {
    id: "external-links",
    title: "3. External Links",
    body: [
      "Our website may contain links to external websites that are not provided or maintained by CodSphere. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites, and the inclusion of any link does not imply endorsement of the views expressed within them.",
    ],
  },
  {
    id: "results-and-testimonials",
    title: "4. Results & Testimonials",
    body: [
      "Any case studies, testimonials, or examples of past work shown on our website reflect specific engagements and are not a guarantee of similar results. Outcomes vary depending on numerous factors unique to each project and client, and past performance is not indicative of future results.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "5. Limitation of Liability",
    body: [
      "In no event will CodSphere be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising from the use of, or reliance on, information available on this website or from any loss of data or profits arising out of, or in connection with, the use of this website.",
      "Nothing in this disclaimer excludes or limits liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    id: "changes",
    title: "6. Changes to This Disclaimer",
    body: [
      "We may update this Disclaimer from time to time. When we do, we will revise the \u201CLast updated\u201D date at the top of this page. We encourage you to review this page periodically to stay informed of any changes.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="w-full">
        <div className="container-wrapper py-more">
          <div className="max-w-full md:max-w-[820px]">
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] font-semibold">
              Disclaimer
            </h1>
            <p className="mt-3 text-black/60 text-[14px] md:text-[16px] leading-5 md:leading-6">
              Last updated: {lastUpdated}
            </p>
            <p className="mt-4 text-[16px] md:text-[18px] leading-6 md:leading-7 text-black/80">
              The information on this website is provided in good faith for general information
              only. This Disclaimer explains the limits of that information and of our liability. By
              using our website, you acknowledge and accept the terms set out below.
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
                7. Contact Us
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-[15px] md:text-[18px] leading-6 md:leading-7 text-black/80">
                  If you have any questions about this Disclaimer, please get in touch:
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
