import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-primary-subtle text-primary border border-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground border border-border",
        destructive:
          "bg-red-100 text-red-700 border border-red-200",
        success:
          "bg-green-100 text-green-700 border border-green-200",
        outline:
          "border border-primary/40 text-primary bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
