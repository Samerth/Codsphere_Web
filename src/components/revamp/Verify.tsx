import { cn } from "@/lib/utils";

/**
 * Inline marker for a fact that the founder must confirm before publication.
 * Mirrors the Decision Document "agent stop condition": never silently guess —
 * write a precise placeholder and keep building the surrounding page.
 */
export default function Verify({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("cs-verify", className)} title="Founder must verify before publication">
      [VERIFY: {children}]
    </span>
  );
}
