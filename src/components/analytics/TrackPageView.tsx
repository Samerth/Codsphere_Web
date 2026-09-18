"use client";

import { useEffect } from "react";
import { trackViewPricing, trackViewSolution, trackViewProject } from "@/utils/analytics";

interface TrackPageViewProps {
  type: "pricing" | "solution" | "project";
  name?: string;
  slug?: string;
  industry?: string;
  source?: string;
}

export default function TrackPageView({ type, name, slug, industry, source }: TrackPageViewProps) {
  useEffect(() => {
    switch (type) {
      case "pricing":
        trackViewPricing(source);
        break;
      case "solution":
        if (name && slug) {
          trackViewSolution(name, slug);
        }
        break;
      case "project":
        if (name && slug) {
          trackViewProject(name, slug, industry);
        }
        break;
    }
  }, [type, name, slug, industry, source]);

  return null;
}
