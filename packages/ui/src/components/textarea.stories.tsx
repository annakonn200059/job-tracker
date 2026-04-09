import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./textarea"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
}

export const WithValue: Story = {
  args: {
    placeholder: "Enter your message...",
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
}

export const Rows: Story = {
  render: () => (
    <Textarea
      placeholder="Custom rows textarea"
      rows={5}
      className="w-96"
    />
  ),
}

export const LargeTextarea: Story = {
  render: () => (
    <Textarea
      placeholder="Large textarea for detailed input"
      className="w-96 min-h-[200px]"
    />
  ),
}
