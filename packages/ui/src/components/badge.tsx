import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border border-pink-200",
        secondary:
          "bg-gray-100 text-gray-700 border border-gray-200",
        destructive:
          "bg-red-100 text-red-700 border border-red-200",
        success:
          "bg-green-100 text-green-700 border border-green-200",
        outline:
          "border border-pink-300 text-pink-600 bg-transparent",
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
