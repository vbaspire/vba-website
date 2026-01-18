import type { Metadata } from "next"
import CTAButton from "../../components/CTAButton"
import Card from "../../components/Card"
import Section from "../../components/Section"
import { CORE_PLATFORM_URL } from "../../lib/site-config"

export const metadata: Metadata = {
  title: "Mission Series",
  description:
    "Learn about the VBA Mission Series: curated challenges, sprints, and community momentum."
}

export default function MissionSeriesPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            The VBA Mission Series
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Mission Series programs deliver focused sprints, curated resources,
            and community accountability to help founders achieve tangible
            outcomes.
          </p>
        </div>
      </section>

      <Section
        eyebrow="How It Works"
        title="Structured missions, real momentum."
        description="Each mission is designed to align your goals, simplify execution, and create measurable results."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Mission playbooks"
            description="Detailed guides and templates help you move step-by-step through every sprint."
          />
          <Card
            title="Community touchpoints"
            description="Connect with other founders to share progress, wins, and insights."
          />
          <Card
            title="Progress checkpoints"
            description="Measure outcomes and build the next mission from a place of clarity."
          />
        </div>
      </Section>

      <Section
        eyebrow="Access"
        title="Missions live inside Core."
        description="Updates and content are delivered via email and inside the Core platform so you never miss a mission drop."
      >
        <CTAButton href={CORE_PLATFORM_URL}>Visit Core Platform</CTAButton>
      </Section>
    </div>
  )
}
