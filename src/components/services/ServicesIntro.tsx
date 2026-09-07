import Link from "next/link";

export default function ServicesIntro() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Build the missing piece around your order flow.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            The estimator, portal, supplier connection or production screen your standard stack is
            missing — built around the customer-to-delivery workflow, not a second disconnected
            system. Prefer a ready-to-use option?{" "}
            <Link href="/solutions" className="underline underline-offset-4">
              See what we build
            </Link>
            , or{" "}
            <Link href="/ai-visibility" className="underline underline-offset-4">
              check your AI visibility
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
