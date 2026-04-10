import {
  Card,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card"
import { Container } from "../layout/Container"

const testimonials = [
  {
    quote:
      "Job Tracker helped me go from sending 30 applications into the void to actually managing my pipeline. I landed two offers in 6 weeks.",
    name: "Marcus T.",
    role: "Senior Software Engineer",
    initials: "MT",
  },
  {
    quote:
      "I used to lose track of where I was in every process. Now my whole search lives in one place and the AI coach helped me prep for every single interview.",
    name: "Priya K.",
    role: "Marketing Manager",
    initials: "PK",
  },
  {
    quote:
      "As a recent grad with no network, this gave me a huge edge. I could see exactly which companies were ghosting and which were worth following up on.",
    name: "Jordan L.",
    role: "UX Designer (new grad)",
    initials: "JL",
  },
  {
    quote:
      "Switching careers at 34 felt overwhelming. Job Tracker's analytics showed me exactly where my funnel was breaking down so I could fix it.",
    name: "Sam R.",
    role: "Career Changer → Data Analyst",
    initials: "SR",
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary-subtle/25 py-20 sm:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gradient-start" />
            <span className="text-sm font-medium text-primary">
              Stories
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Job seekers love it
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From new grads to seasoned professionals — here's what people are saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <CardContent className="flex-1 pt-6">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </CardContent>

              <CardFooter className="gap-3 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gradient-start to-gradient-end text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
