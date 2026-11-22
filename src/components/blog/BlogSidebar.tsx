import Link from "next/link";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CODCRM_FORM_CONTACT_FALLBACK } from "@/lib/codcrm-embeds";

export function BlogSidebar() {
  return (
    <div className="w-full bg-black rounded-[19px] overflow-hidden p-4 md:p-5 lg:p-[20px] relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-white font-sequel text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] mb-1 lg:mb-[5px]">
            Need Help?
          </h3>
          <p className="text-white font-sequel text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[405]">
            Ask us and get the solution
          </p>
        </div>

        <div className="rounded-2xl bg-white p-2">
          <CodCRMEmbed
            kind="form"
            slug={CODCRM_FORM_CONTACT_FALLBACK}
            source="blog"
            title="Blog inquiry"
            variant="plain"
            minHeight={520}
            fallback={
              <p className="text-sm text-black/70 p-3 font-sequel">
                The form could not load.{" "}
                <Link href="/contact#contact-form" className="underline">
                  Open the contact form
                </Link>{" "}
                or email{" "}
                <a href="mailto:info@codsphere.ca" className="underline">
                  info@codsphere.ca
                </a>
                .
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
