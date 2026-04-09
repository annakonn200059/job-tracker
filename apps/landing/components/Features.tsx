"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import {
  KanbanIcon,
  NotebookIcon,
  ChartBarBigIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function Features() {
  const features = [
    {
      title: "Kanban Tracking",
      description:
        "Organize your applications with our intuitive Kanban board. Apply → Interview → Offer, all in one place.",
      icon: KanbanIcon,
      gradient: "from-pink-500 to-rose-400",
    },
    {
      title: "AI Assistant",
      description:
        "Get AI-powered insights and personalized coaching to prepare for interviews and stand out.",
      icon: NotebookIcon,
      gradient: "from-rose-400 to-orange-400",
    },
    {
      title: "Insights & Analytics",
      description:
        "Track your progress with detailed analytics. See application trends and success rates.",
      icon: ChartBarBigIcon,
      gradient: "from-orange-400 to-yellow-400",
    },
  ]

  return (
    <section
      id="features"
      className="relative min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            <span className="text-sm font-medium text-pink-600">
              Powerful Features
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Tools designed specifically for job seekers to organize, track, and
            land their dream job faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-pink-100 hover:border-pink-200"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                style={{
                  background: `linear-gradient(135deg, rgb(236, 72, 153), rgb(250, 204, 21))`,
                }}
              />

              <CardHeader>
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                >
                  <HugeiconsIcon
                    icon={feature.icon}
                    className="h-7 w-7 text-white"
                    strokeWidth={2}
                  />
                </div>
                <CardTitle className="text-left text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600">{feature.description}</p>

                {/* Link */}
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-pink-600 transition-colors hover:text-pink-700"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 rounded-3xl border border-pink-100 bg-gradient-to-r from-pink-50/50 to-yellow-50/50 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Jobs Tracked", value: "50K+" },
              { label: "Success Rate", value: "89%" },
              { label: "Average Offers", value: "3.2x" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-transparent sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text">
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
