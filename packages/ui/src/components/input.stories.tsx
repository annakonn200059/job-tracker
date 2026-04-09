import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./input"

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "subtle", "error"],
    },
    type: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "default",
  },
}

export const Subtle: Story = {
  args: {
    placeholder: "Subtle input",
    variant: "subtle",
  },
}

export const Error: Story = {
  args: {
    placeholder: "Error input",
    variant: "error",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
}

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="subtle" placeholder="Subtle variant" />
      <Input variant="error" placeholder="Error variant" />
      <Input disabled placeholder="Disabled state" />
    </div>
  ),
}
