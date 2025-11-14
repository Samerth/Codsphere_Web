import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function EllipseGroup({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <div
      className={cn("absolute left-1/2 bottom-0 flex justify-center items-center h-112", classname)}
    >
      <svg className="absolute w-md h-112 z-0 rotate-90" viewBox="0 0 476 476" fill="none">
        <circle
          cx="237.559"
          cy="237.559"
          r="234"
          transform="rotate(-105 237.559 237.559)"
          stroke="url(#paint0_linear_5053_903)"
          strokeWidth="7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5053_903"
            x1="0.0589447"
            y1="237.559"
            x2="475.059"
            y2="237.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0865385" stopColor="#33FCFE" />
            <stop offset="0.173077" stopColor="white" />
            <stop offset="0.216346" stopColor="#33FCFE" />
            <stop offset="0.673077" stopColor="#45B9FF" />
            <stop offset="1" stopColor="#010B66" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute w-104 h-104 z-0 rotate-120" viewBox="0 0 476 476" fill="none">
        <circle
          cx="237.559"
          cy="237.559"
          r="234"
          transform="rotate(-105 237.559 237.559)"
          stroke="url(#paint0_linear_5053_903)"
          strokeWidth="7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5053_903"
            x1="0.0589447"
            y1="237.559"
            x2="475.059"
            y2="237.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0865385" stopColor="#33FCFE" />
            <stop offset="0.173077" stopColor="white" />
            <stop offset="0.216346" stopColor="#33FCFE" />
            <stop offset="0.673077" stopColor="#45B9FF" />
            <stop offset="1" stopColor="#010B66" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute w-96 h-96 z-0 -rotate-45" viewBox="0 0 476 476" fill="none">
        <circle
          cx="237.559"
          cy="237.559"
          r="234"
          transform="rotate(-105 237.559 237.559)"
          stroke="url(#paint0_linear_5053_903)"
          strokeWidth="7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5053_903"
            x1="0.0589447"
            y1="237.559"
            x2="475.059"
            y2="237.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0865385" stopColor="#33FCFE" />
            <stop offset="0.173077" stopColor="white" />
            <stop offset="0.216346" stopColor="#33FCFE" />
            <stop offset="0.673077" stopColor="#45B9FF" />
            <stop offset="1" stopColor="#010B66" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute w-88 h-88 z-0" viewBox="0 0 476 476" fill="none">
        <circle
          cx="237.559"
          cy="237.559"
          r="234"
          transform="rotate(-105 237.559 237.559)"
          stroke="url(#paint0_linear_5053_903)"
          strokeWidth="7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5053_903"
            x1="0.0589447"
            y1="237.559"
            x2="475.059"
            y2="237.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0865385" stopColor="#33FCFE" />
            <stop offset="0.173077" stopColor="white" />
            <stop offset="0.216346" stopColor="#33FCFE" />
            <stop offset="0.673077" stopColor="#45B9FF" />
            <stop offset="1" stopColor="#010B66" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-md h-full absolute top-0">{children}</div>
    </div>
  );
}
