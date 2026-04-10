import type { Meta, StoryObj } from "@storybook/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"
import { Card, CardContent } from "./card"

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const WithItems: Story = {
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-primary-subtle to-secondary">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">
                      {index + 1}
                    </p>
                    <p className="text-sm text-muted-foreground">Item</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const ResponsiveCarousel: Story = {
  render: () => (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <span className="text-xl font-semibold">Slide {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
