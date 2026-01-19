import type { Metadata } from "next"
import CTAButton from "../../components/CTAButton"
import Card from "../../components/Card"
import Section from "../../components/Section"
import {
  CORE_FREE_SIGNUP_URL,
  CORE_PLATFORM_URL
} from "../../lib/site-config"

export const metadata: Metadata = {
  title: "Core",
  description:
    "Explore Core, the centralized platform that guides founders from clarity to growth."
}

export default function CorePage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
              Core Platform
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              The operating system for your vision.
            </h1>
            <p className="text-lg text-slate-300">
              Core keeps founders aligned with guided strategy, milestone
              tracking, and accountability so you can move from idea to launch
              with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTAButton href={CORE_PLATFORM_URL}>Start Your Core Journey</CTAButton>
            <CTAButton href={CORE_FREE_SIGNUP_URL} variant="secondary">
              Join Core Free
            </CTAButton>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How Core Helps"
        title="Structure, support, and momentum in one place."
        description="Core is designed to help founders focus on what matters most each week, backed by a clear strategy and community accountability."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Vision to roadmap"
            description="Translate your mission into actionable milestones and weekly priorities."
          />
          <Card
            title="Guided execution"
            description="Stay on track with structured prompts, check-ins, and targeted tools."
          />
          <Card
            title="Founder accountability"
            description="Measure progress, celebrate wins, and adjust with confidence."
          />
        </div>
      </Section>

      <Section
        eyebrow="Who It&apos;s For"
        title="Built for founders ready to lead with intention."
        description="Core supports solo founders, small teams, and creative entrepreneurs who want clarity, structure, and momentum."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Early-stage founders"
            description="Move from ideation to launch with guidance and accountability."
          />
          <Card
            title="Growing teams"
            description="Align your team around shared goals and measurable growth."
          />
        </div>
      </Section>

      <section className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Ready to experience Core?
            </h2>
            <p className="mt-2 text-slate-300">
              Start your journey inside the Core platform or explore the free
              tier to begin today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTAButton href={CORE_PLATFORM_URL}>Visit Core Platform</CTAButton>
            <CTAButton href={CORE_FREE_SIGNUP_URL} variant="secondary">
              Join Core Free
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
