import CtaButton from "./CtaButton";

type Action = { label: string; href: string; variant?: "primary" | "secondary" };

export default function PageHero({
  eyebrow,
  title,
  subhead,
  actions = [],
}: {
  eyebrow?: string;
  title: string;
  subhead?: string;
  actions?: Action[];
}) {
  return (
    <section className="bg-cs-navy text-white">
      <div className="container-wrapper py-16 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7fd3d9]">
              {eyebrow}
            </p>
          )}
          <h1 className="font-sequel text-[30px] leading-tight sm:text-[44px] font-bold">
            {title}
          </h1>
          {subhead && (
            <p className="mt-5 text-[17px] sm:text-[20px] leading-relaxed text-white/80">
              {subhead}
            </p>
          )}
          {actions.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {actions.map((a) => (
                <CtaButton
                  key={a.label}
                  href={a.href}
                  variant={a.variant ?? "primary"}
                  withArrow={a.variant !== "secondary"}
                  className={
                    a.variant === "secondary"
                      ? "border-white/40 text-white hover:bg-white hover:text-cs-navy"
                      : ""
                  }
                >
                  {a.label}
                </CtaButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
