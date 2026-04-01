
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function Page() {
  return (
    <div className="min-h-svh bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Design System</h1>
          <p className="text-lg text-gray-600">Custom components with your personal taste</p>
        </div>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Card */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Card</h2>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a custom card component</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This card has rounded corners, subtle borders, and smooth shadow effects.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Form Elements */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Form Elements</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="input">Input Field</Label>
              <Input id="input" placeholder="Enter something..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="input-subtle">Subtle Input</Label>
              <Input id="input-subtle" variant="subtle" placeholder="Subtle style..." />
            </div>
          </div>
        </section>

        {/* Alert */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Alerts</h2>
          <div className="space-y-3">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert message with important information.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your action has been completed successfully.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                An error occurred while processing your request.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">Press <kbd className="bg-gray-200 px-2 py-1 rounded">d</kbd> to toggle dark mode</p>
        </div>
      </div>
    </div>
  )
}
