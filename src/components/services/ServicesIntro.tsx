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
            Web, mobile, CRM, ERP, and automation systems built around your operations. Looking for
            a ready-to-use option?{" "}
            <Link href="/solutions" className="underline underline-offset-4">
              View Sortify, CodChat, and CodCRM
            </Link>
            , or{" "}
            <Link href="/ai-visibility" className="underline underline-offset-4">
              book an AI visibility audit
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
