import { cn } from "@workspace/ui/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end shadow-sm">
        <span className="font-heading text-sm font-bold text-primary-foreground">JT</span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Job Tracker
      </span>
    </div>
  )
}
