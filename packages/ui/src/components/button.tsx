import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@workspace/ui/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-400 text-white shadow-md hover:shadow-lg hover:brightness-105",
        secondary:
          "bg-white text-gray-800 border border-pink-100 shadow-sm hover:bg-pink-50",
        outline:
          "border border-pink-200 text-pink-600 bg-transparent hover:bg-pink-50",
        ghost:
          "text-gray-600 hover:bg-pink-50 hover:text-pink-600",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-md",
        link:
          "text-pink-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
