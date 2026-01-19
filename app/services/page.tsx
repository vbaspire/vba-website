import type { Metadata } from "next"
import CTAButton from "../../components/CTAButton"
import Card from "../../components/Card"
import Section from "../../components/Section"
import { CORE_PLATFORM_URL } from "../../lib/site-config"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the Core platform, VBA Voice support, and Kreadiv creative services."
}

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Services built for founder momentum.
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            VBA pairs the Core platform with personalized support and creative
            services so founders can move faster with confidence.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Core"
        title="Core Platform"
        description="Your central workspace for strategy, progress tracking, and accountability."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Guided milestones"
            description="Stay aligned on what matters most each week, with structured milestones and accountability checks."
          />
          <Card
            title="Founder dashboard"
            description="Track progress, resources, and mission updates in one organized hub."
          />
        </div>
        <div className="pt-6">
          <CTAButton href={CORE_PLATFORM_URL}>Visit Core Platform</CTAButton>
        </div>
      </Section>

      <Section
        eyebrow="VBA Voice"
        title="Founder support when you need it."
        description="Voice sessions and accountability touchpoints keep you encouraged and aligned."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Focused check-ins"
            description="Quick sessions to realign your priorities, remove blockers, and build momentum."
          />
          <Card
            title="Strategic guidance"
            description="Access founder insights to sharpen your strategy and next best moves."
          />
        </div>
      </Section>

      <Section
        eyebrow="Kreadiv Services"
        title="Creative support for your brand story."
        description="Design and content services that bring your vision to life and help you stand out."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Brand identity"
            description="Align your visuals and messaging with a clear brand foundation."
          />
          <Card
            title="Content strategy"
            description="Build consistent messaging across web, social, and email."
          />
          <Card
            title="Launch support"
            description="Campaign design, copy, and rollout support when it matters most."
          />
        </div>
      </Section>
    </div>
  )
}
