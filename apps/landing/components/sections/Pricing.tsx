import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Container } from "../layout/Container"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with your job search.",
    cta: "Get Started",
    featured: false,
    features: [
      "Up to 10 job applications",
      "Basic Kanban board",
      "Browser extension",
      "Email reminders",
      "CSV export",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    description: "Everything you need to run a serious job search campaign.",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited applications",
      "AI interview coach",
      "Interview prep sheets",
      "Advanced analytics",
      "Priority support",
      "Resume tailoring hints",
      "Calendar integration",
    ],
  },
  {
    name: "Enterprise",
    price: "$29",
    description: "For teams, bootcamps, and career centers.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Team workspaces",
      "SSO & SAML",
      "Custom integrations",
      "Dedicated CSM",
      "SLA guarantee",
      "Bulk user management",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              Simple Pricing
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Plans for every job seeker
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start free, upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative">
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <Badge variant="default">Most Popular</Badge>
                </div>
              )}
              <Card
                className={
                  tier.featured
                    ? "border-primary/40 shadow-xl shadow-primary/10"
                    : ""
                }
              >
                <CardHeader className="pb-4">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-heading text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button
                    variant={tier.featured ? "default" : "outline"}
                    className="w-full mb-6"
                  >
                    {tier.cta}
                  </Button>

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
