'use client';

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Textarea,
  Badge,
  Avatar,
  Progress,
  StreakCard,
} from '@quitpo/ui';

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          QuitPo Design System
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Component library built with Tailwind CSS v4 and the QuitPo design tokens.
        </p>
      </div>

      {/* Buttons Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Buttons</h2>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-4 pt-6">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        <h3 className="mb-4 mt-8 text-lg font-semibold">Sizes</h3>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-4 pt-6">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </CardContent>
        </Card>

        <h3 className="mb-4 mt-8 text-lg font-semibold">States</h3>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-4 pt-6">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>
      </section>

      {/* Form Elements Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Form Elements</h2>
        <Card>
          <CardContent className="flex flex-col gap-4 pt-6">
            <Input placeholder="Email address" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Error state" error />
            <Input placeholder="Disabled" disabled />
            <Textarea placeholder="Tell us about your journey..." />
          </CardContent>
        </Card>
      </section>

      {/* Cards Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>
                Cards have large rounded corners and soft shadows.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is a basic card component following the QuitPo design system.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Hover to see the shadow effect.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cards can be made interactive with hover states.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Badges</h2>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-3 pt-6">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
        </Card>
      </section>

      {/* Avatar Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Avatars</h2>
        <Card>
          <CardContent className="flex flex-wrap items-center gap-4 pt-6">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="xl" fallback="XL" />
            <Avatar alt="John Doe" />
          </CardContent>
        </Card>
      </section>

      {/* Progress Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Progress</h2>
        <Card>
          <CardContent className="flex flex-col gap-6 pt-6">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Gradient (25%)</p>
              <Progress value={25} variant="gradient" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Primary (50%)</p>
              <Progress value={50} variant="primary" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Success (75%)</p>
              <Progress value={75} variant="success" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Secondary (100%)</p>
              <Progress value={100} variant="secondary" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* QuitPo-Specific Components */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">QuitPo Components</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <StreakCard days={47} targetDays={90} />
          <StreakCard days={90} targetDays={90} label="Goal Complete!" />
        </div>
      </section>

      {/* Color Palette Preview */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Color Palette</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary" />
                <p className="mt-2 text-xs text-muted-foreground">Primary</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-secondary" />
                <p className="mt-2 text-xs text-muted-foreground">Secondary</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent" />
                <p className="mt-2 text-xs text-muted-foreground">Accent</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-success" />
                <p className="mt-2 text-xs text-muted-foreground">Success</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-warning" />
                <p className="mt-2 text-xs text-muted-foreground">Warning</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-destructive" />
                <p className="mt-2 text-xs text-muted-foreground">Destructive</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
