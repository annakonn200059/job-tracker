import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import {
  KanbanIcon,
  NotebookIcon,
  ChartBarBigIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Container } from "../layout/Container"

export function Features() {
  const features = [
    {
      title: "Kanban Tracking",
      description:
        "Organize your applications with our intuitive Kanban board. Apply → Interview → Offer, all in one place.",
      icon: KanbanIcon,
    },
    {
      title: "AI Assistant",
      description:
        "Get AI-powered insights and personalized coaching to prepare for interviews and stand out.",
      icon: NotebookIcon,
    },
    {
      title: "Insights & Analytics",
      description:
        "Track your progress with detailed analytics. See application trends and success rates.",
      icon: ChartBarBigIcon,
    },
  ]

  return (
    <section
      id="features"
      className="relative bg-gradient-to-b from-background via-primary-subtle/30 to-background py-20 sm:py-32"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              Powerful Features
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tools designed specifically for job seekers to organize, track, and
            land their dream job faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]" />

              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gradient-start to-gradient-end">
                  <HugeiconsIcon
                    icon={feature.icon}
                    className="h-7 w-7 text-primary-foreground"
                    strokeWidth={2}
                  />
                </div>
                <CardTitle className="text-left text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
        <div className="mt-24 rounded-3xl border border-border bg-gradient-to-r from-primary-subtle to-secondary/50 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Jobs Tracked", value: "50K+" },
              { label: "Success Rate", value: "89%" },
              { label: "Average Offers", value: "3.2x" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
