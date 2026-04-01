import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const inputVariants = cva(
  "flex h-10 w-full rounded-xl border px-4 py-2 text-sm transition-all duration-200 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/50 focus-visible:border-pink-300 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-pink-200 bg-white text-gray-900 hover:border-pink-300",
        subtle:
          "border-gray-200 bg-gray-50 text-gray-900 hover:border-gray-300",
        error:
          "border-red-300 bg-white text-gray-900 focus-visible:ring-red-400/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input, inputVariants }
