"use client";

import { trackOutboundClick } from "@/utils/analytics";

interface TrackOutboundLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function TrackOutboundLink({
  href,
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  "aria-label": ariaLabel,
}: TrackOutboundLinkProps) {
  const handleClick = () => {
    trackOutboundClick(href, ariaLabel || (typeof children === "string" ? children : undefined));
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
