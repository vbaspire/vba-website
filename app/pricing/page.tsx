import type { Metadata } from "next"
import CTAButton from "../../components/CTAButton"
import Card from "../../components/Card"
import Section from "../../components/Section"
import {
  CORE_FREE_SIGNUP_URL,
  CORE_STRIPE_ANNUAL_URL,
  CORE_STRIPE_MONTHLY_URL
} from "../../lib/site-config"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the Core membership plan that fits your journey, with free, monthly, and annual options."
}

export default function PricingPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Membership options
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Choose the plan that matches your pace. Every option keeps you
            connected to Core and the VBA ecosystem.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Pricing"
        title="Clear, founder-friendly plans."
        description="Start with a free tier or unlock premium guidance with monthly or annual access."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <Card
              eyebrow="Free"
              title="Core Starter"
              description="Access foundational tools, mission updates, and your Core dashboard."
            />
            <CTAButton href={CORE_FREE_SIGNUP_URL} variant="secondary">
              Join Core Free
            </CTAButton>
          </div>
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-emerald-400/40 bg-gradient-to-b from-emerald-400/10 to-slate-900/40 p-6 shadow-xl shadow-emerald-500/10">
            <Card
              eyebrow="Monthly"
              title="Core Plus"
              description="Unlock premium mission resources, deeper accountability, and expanded guidance."
            />
            <CTAButton href={CORE_STRIPE_MONTHLY_URL} variant="primary">
              Start Monthly Membership
            </CTAButton>
          </div>
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <Card
              eyebrow="Annual"
              title="Core Annual"
              description="Commit to the year with full access, savings, and priority support."
            />
            <CTAButton href={CORE_STRIPE_ANNUAL_URL} variant="secondary">
              Start Annual Membership
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  )
}
