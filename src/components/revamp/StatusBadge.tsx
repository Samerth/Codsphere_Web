import { cn } from "@/lib/utils";

export type ProjectStatus = "live" | "uat" | "pilot" | "direction";

const LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  uat: "UAT",
  pilot: "Pilot",
  direction: "Product direction",
};

const CLASSES: Record<ProjectStatus, string> = {
  live: "cs-badge-live",
  uat: "cs-badge-uat",
  pilot: "cs-badge-pilot",
  direction: "cs-badge-direction",
};

export default function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return <span className={cn("cs-badge", CLASSES[status], className)}>{LABELS[status]}</span>;
}
