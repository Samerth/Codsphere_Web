import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium",
        "h-10 px-4 py-2",
        "bg-black text-white hover:opacity-90 disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
export default Button;
