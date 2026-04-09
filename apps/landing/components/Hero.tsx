"use client"

import { Button } from "@workspace/ui/components/button"
import { SparklesIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgb(236, 72, 153) 0%, rgb(251, 146, 60) 50%, rgb(250, 204, 21) 100%)",
        }}
      />

      {/* Animated blur circles */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <HugeiconsIcon
                icon={SparklesIcon}
                className="h-4 w-4 text-white"
              />
              <span className="text-sm font-medium text-white">
                Beta Launch 🚀
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Track your job search
              <span className="block bg-gradient-to-r from-white via-pink-100 to-yellow-100 bg-clip-text text-transparent">
                smarter
              </span>
            </h1>

            {/* Subtext */}
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              Organize, prepare, and land offers faster with our intelligent job tracking platform.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-white/90"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10"
              >
                View Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6">
              <div className="h-12 rounded-lg bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xs font-semibold text-white">
                  Trusted by 1000+ job seekers
                </p>
              </div>
              <div className="flex -space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br ${
                      i % 3 === 0
                        ? "from-pink-400 to-rose-400"
                        : i % 3 === 1
                          ? "from-rose-400 to-orange-400"
                          : "from-orange-400 to-yellow-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Illustration/Visual */}
          <div className="relative">
            <div className="relative h-96 w-full rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
              {/* Kanban Board Mock */}
              <div className="grid gap-4">
                <div className="rounded-xl bg-white/5 p-3 backdrop-blur">
                  <div className="mb-2 h-2 w-16 rounded bg-white/20" />
                  <div className="h-4 w-full rounded bg-white/10" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="space-y-2 rounded-lg bg-white/5 p-2 backdrop-blur"
                    >
                      <div className="h-2 w-full rounded bg-white/20" />
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-6 w-full rounded bg-gradient-to-r from-pink-300/30 to-yellow-300/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
