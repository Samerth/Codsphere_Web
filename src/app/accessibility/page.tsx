import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Accessibility | CodSphere",
  description:
    "CodSphere's commitment to WCAG 2.2 AA accessibility across its website and applications.",
  alternates: { canonical: "https://codsphere.com/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Accessibility"
        title="Designed to be usable by everyone."
        subhead="We build toward WCAG 2.2 AA: keyboard navigation, visible focus, clear labels and errors, sufficient contrast, reduced-motion support and semantic structure."
      />
      <section className="cs-section">
        <div className="container-wrapper max-w-3xl space-y-5 text-[16px] leading-relaxed text-cs-ink/75">
          <p>
            Accessibility is part of our definition of done. Pages are structured with semantic
            headings and landmarks, interactive elements are keyboard reachable with a visible focus
            state, and we respect the operating system&apos;s reduced-motion preference.
          </p>
          <p>
            If you encounter a barrier using this site or a CodSphere application, please contact us
            at{" "}
            <a href="mailto:info@codsphere.ca" className="font-medium text-cs-teal">
              info@codsphere.ca
            </a>{" "}
            and we will work to resolve it.
          </p>
          <p className="text-[14px] text-cs-ink/55">
            Formal conformance details and the review date are published once confirmed.{" "}
            <Verify>WCAG 2.2 AA conformance statement and audit date</Verify>
          </p>
        </div>
      </section>
    </div>
  );
}
