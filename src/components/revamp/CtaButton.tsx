import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors touch-target";

const variants: Record<Variant, string> = {
  primary: "bg-cs-teal text-white hover:bg-cs-teal-strong",
  secondary: "border border-cs-navy/25 text-cs-navy hover:bg-cs-navy hover:text-white",
  ghost: "text-cs-teal hover:text-cs-teal-strong",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={18} />}
    </>
  );
  const classes = cn(base, variants[variant], className);

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
