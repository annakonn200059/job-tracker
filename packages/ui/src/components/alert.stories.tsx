import type { Meta, StoryObj } from "@storybook/react"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "./alert.js"

const AlertIcon = () => <span className="text-xl">ℹ️</span>
const ErrorIcon = () => <span className="text-xl">❌</span>
const SuccessIcon = () => <span className="text-xl">✅</span>
const WarningIcon = () => <span className="text-xl">⚠️</span>

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning"],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert variant="default" className="w-96">
      <AlertIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <ErrorIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-96">
      <SuccessIcon />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-96">
      <WarningIcon />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your input before proceeding.
      </AlertDescription>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="default">
        <AlertIcon />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <ErrorIcon />
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This is a destructive alert message.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <SuccessIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>This is a success alert message.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>This is a warning alert message.</AlertDescription>
      </Alert>
    </div>
  ),
}
