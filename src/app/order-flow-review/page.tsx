import type { Metadata } from "next";
import OrderFlowReviewForm from "@/components/revamp/OrderFlowReviewForm";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Order Flow Review | CodSphere",
  description:
    "In 30 minutes we map your custom order's entry, handoffs and where visibility breaks. If CodSphere is not the right fit, we will say so.",
  alternates: { canonical: "https://codsphere.com/order-flow-review" },
};

export default function OrderFlowReviewPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7fd3d9]">
              Order Flow Review
            </p>
            <h1 className="font-sequel text-[30px] sm:text-[44px] font-bold leading-tight">
              Show us one order that should have gone better.
            </h1>
            <p className="mt-5 text-[17px] sm:text-[20px] leading-relaxed text-white/80">
              In 30 minutes, we will map the customer entry, the handoffs and where visibility
              breaks. If CodSphere is not the right fit, we will say so.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1fr_360px]">
          <OrderFlowReviewForm />

          <aside className="h-fit rounded-2xl border border-cs-line bg-white p-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-cs-teal">
              What to expect
            </p>
            <ul className="mt-4 space-y-3 text-[15px] text-cs-ink/75">
              <li>A 30-minute working session on one real order.</li>
              <li>A map of entry, handoffs and where visibility breaks.</li>
              <li>An honest fit assessment — including &ldquo;not yet&rdquo;.</li>
            </ul>
            <p className="mt-6 border-t border-cs-line pt-4 text-[13px] leading-relaxed text-cs-ink/55">
              Submissions will create a source-tagged contact and next action in CodCRM once
              lead-routing and analytics events are connected.{" "}
              <Verify>CRM routing, booking calendar and analytics wiring</Verify>
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
