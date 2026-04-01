import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/50 focus-visible:border-pink-300 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
      className
    )}
    ref={ref}
    {...props}
  />
))
Textarea.displayName = "Textarea"

export { Textarea }
