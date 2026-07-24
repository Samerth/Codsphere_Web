import Link from "next/link";

export default function ServicesIntro() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Custom Tech Solutions That Scale With You
          </h2>
          <p className="mt-2 text-[20px] font-light">
            When an off-the-shelf product is not the right fit, we design and build custom CRM, ERP,
            web, mobile, integration, and automation systems around your workflows. Looking for a
            ready-to-explore option?{" "}
            <Link href="/solutions" className="underline underline-offset-4">
              View Sortify, CodChat, and CodCRM
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
