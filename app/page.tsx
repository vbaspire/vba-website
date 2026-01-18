import type { Metadata } from "next"
import CTAButton from "../components/CTAButton"
import Card from "../components/Card"
import Section from "../components/Section"
import {
  CORE_FREE_SIGNUP_URL,
  CORE_PLATFORM_URL
} from "../lib/site-config"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Dream bold with VBA. Build clarity, launch confidently, and grow with Core."
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_55%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 sm:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
              Venture Beyond Aspirations
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Dream Bold. Launch Smart. Grow Strong.
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">
              VBA is a founder-first ecosystem built to help you define your
              vision, build a disciplined plan, and stay accountable through the
              Core platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={CORE_PLATFORM_URL}>Start Your Core Journey</CTAButton>
              <CTAButton href={CORE_FREE_SIGNUP_URL} variant="secondary">
                Join Core Free
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:grid-cols-3">
            {[
              {
                title: "Clarify your mission",
                description:
                  "Define the purpose, impact, and milestones that guide every decision."
              },
              {
                title: "Launch with structure",
                description:
                  "Move from ideas to action with a mapped roadmap and weekly focus."
              },
              {
                title: "Grow with accountability",
                description:
                  "Stay aligned with progress tracking, community support, and expert guidance."
              }
            ].map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Core Platform"
        title="Everything founders need to move from vision to execution."
        description="Core is the central hub that guides founders through clarity, planning, and momentum with a step-by-step journey."
        id="core"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-2xl font-semibold text-white">What Core is</h3>
            <p className="text-slate-300">
              Core is the operating system for founders who want direction,
              momentum, and accountability. It organizes your strategy, goals,
              and weekly focus in one place so you can build with confidence.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-2xl font-semibold text-white">Who it&apos;s for</h3>
            <p className="text-slate-300">
              Entrepreneurs, creatives, and teams ready to transform ideas into
              sustainable ventures. Whether you&apos;re at day one or scaling, Core
              keeps you aligned.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-6 md:grid-cols-3">
          {[
            {
              title: "Step 1: Define",
              description:
                "Clarify the mission, goals, and audience so every move is intentional."
            },
            {
              title: "Step 2: Build",
              description:
                "Craft the roadmap, resources, and launch plan with guided prompts."
            },
            {
              title: "Step 3: Grow",
              description:
                "Track progress, refine strategy, and stay accountable to the vision."
            }
          ].map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="A full ecosystem to support every stage."
        description="VBA pairs Core with specialized services so founders can access the right support at the right time."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            eyebrow="Core"
            title="Core Platform"
            description="Your centralized workspace for strategy, milestones, and accountability."
          />
          <Card
            eyebrow="VBA Voice"
            title="Founder Support"
            description="On-demand voice guidance, accountability check-ins, and expert insights."
          />
          <Card
            eyebrow="Kreadiv"
            title="Creative Services"
            description="Brand, design, and content support to bring your vision to life."
          />
        </div>
      </Section>

      <Section
        eyebrow="Mission Series"
        title="Mission-focused programming for bold builders."
        description="The VBA Mission Series curates challenges, collaborations, and guided sprints that help founders unlock momentum."
      >
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <h3 className="text-2xl font-semibold text-white">
              Quarterly missions with tangible outcomes.
            </h3>
            <p className="text-slate-300">
              Each mission delivers structured goals, live sessions, and curated
              resources to keep your business moving forward.
            </p>
          </div>
          <CTAButton href="/mission-series" variant="secondary">
            Explore the Mission Series
          </CTAButton>
        </div>
      </Section>

      <Section
        eyebrow="Stay Updated"
        title="Updates arrive through email and inside Core."
        description="We keep communication focused: updates, new missions, and resources are delivered via email and directly inside the Core platform."
      >
        <div className="flex flex-wrap items-center gap-4">
          <CTAButton href={CORE_PLATFORM_URL}>Visit Core Platform</CTAButton>
          <p className="text-sm text-slate-300">
            Already in Core? Look for new resources in your dashboard.
          </p>
        </div>
      </Section>

      <section className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Ready to build with clarity?
            </h2>
            <p className="mt-2 text-slate-300">
              Join Core free or view membership options to unlock premium
              guidance.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTAButton href={CORE_FREE_SIGNUP_URL} variant="secondary">
              Join Core Free
            </CTAButton>
            <CTAButton href="/pricing" variant="primary">
              View Membership Options
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
