import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white/90 backdrop-blur supports-[backdrop-filter]:bg-gray-100 dark:supports-[backdrop-filter]:bg-white/5",
        glow: "border-none bg-brand-500 text-white",
        outline: "border-gray-300 dark:border-white/30 text-gray-900 dark:text-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

