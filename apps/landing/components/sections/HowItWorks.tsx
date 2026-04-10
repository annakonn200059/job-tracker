import {
  AddCircleIcon,
  KanbanIcon,
  Award01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Container } from "../layout/Container"

const steps = [
  {
    number: "01",
    title: "Add Your Applications",
    description:
      "Paste a job URL or fill in details manually. Job Tracker pulls in the role, company, and requirements automatically.",
    icon: AddCircleIcon,
  },
  {
    number: "02",
    title: "Track Every Stage",
    description:
      "Move your applications through a visual Kanban pipeline — Applied, Interview, Offer, and beyond.",
    icon: KanbanIcon,
  },
  {
    number: "03",
    title: "Land the Offer",
    description:
      "Use AI-powered insights and interview prep tools to walk into every conversation with confidence.",
    icon: Award01Icon,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary-subtle/40 py-20 sm:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-accent">
              Simple Process
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            How it works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get from scattered spreadsheets to a clear, organized job search in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-12 md:grid-cols-3">
          {/* Connector lines */}
          <div className="absolute left-1/2 top-8 hidden h-px w-1/3 -translate-x-[83%] bg-gradient-to-r from-gradient-start/30 to-gradient-end/30 md:block" />
          <div className="absolute left-1/2 top-8 hidden h-px w-1/3 translate-x-[16%] bg-gradient-to-r from-gradient-start/30 to-gradient-end/30 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gradient-start to-gradient-end shadow-lg">
                <HugeiconsIcon
                  icon={step.icon}
                  className="h-7 w-7 text-primary-foreground"
                  strokeWidth={2}
                />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-card text-xs font-bold text-primary ring-2 ring-border">
                  {step.number.replace("0", "")}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
