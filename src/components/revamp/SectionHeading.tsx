import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[12px] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-[#7fd3d9]" : "text-cs-teal",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-sequel text-[24px] sm:text-[32px] font-bold leading-tight",
          dark ? "text-white" : "text-cs-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-[16px] sm:text-[18px] leading-relaxed",
            dark ? "text-white/80" : "text-cs-ink/75",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
