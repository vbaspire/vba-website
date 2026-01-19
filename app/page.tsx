import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import CTAButton from "../components/CTAButton"
import SectionDivider from "../components/SectionDivider"
import { CORE_PLATFORM_URL } from "../lib/site-config"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Dream bold with VBA. Build clarity, launch confidently, and grow with Core."
}

const stageCards = [
  {
    stage: "Early Stage (0–2 Years)",
    headline: "Build Your Foundation",
    bullets: [
      "Core foundation and setup",
      "Branding and website basics",
      "Business phone & systems",
      "Step-by-step guidance"
    ],
    cta: { label: "I’m just getting started", href: "/core" }
  },
  {
    stage: "Growth Stage (3–4 Years)",
    headline: "Optimize & Build Momentum",
    bullets: [
      "Strategy check-ins",
      "Campaign refinement",
      "System optimization",
      "Process and team support"
    ],
    cta: { label: "I’m building momentum", href: "/core" }
  },
  {
    stage: "Established (5+ Years)",
    headline: "Scale and Expand",
    bullets: [
      "Advanced marketing",
      "HR and compliance support",
      "Mission Series participation",
      "Expansion strategy"
    ],
    cta: { label: "I’m ready to expand", href: "/core" }
  }
]

const coreIncludes = [
  {
    title: "Structured Guidance",
    description:
      "Clarity on priorities, next steps, and decisions at every stage of your journey."
  },
  {
    title: "Systems That Scale",
    description:
      "Business tools, workflows, and infrastructure that grow with you."
  },
  {
    title: "Strategy & Accountability",
    description:
      "Ongoing check-ins and support to keep momentum strong and intentional."
  },
  {
    title: "Tools & Resources",
    description:
      "Templates, planners, and resources designed for real-world execution."
  }
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-slate-300">
            Venture Beyond Aspirations
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-6xl">
            Dream Bold. Launch Smart. Grow Strong.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Venture Beyond Aspirations empowers entrepreneurs to own their time,
            ideas, and future through a structured journey anchored by Core.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CTAButton href={CORE_PLATFORM_URL} className="px-10 py-4 text-xs">
              Start Your Core Journey
            </CTAButton>
            <Link href="#journey" className="text-sm text-slate-300 hover:text-white">
              See how the journey works
            </Link>
          </div>
          <p className="text-sm italic text-slate-400">
            Built for entrepreneurs at every stage
          </p>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-slate-950 to-slate-900" />

      <section id="journey" className="relative overflow-hidden bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Your Business Has a Path
            </h2>
            <p className="mt-3 text-slate-300">
              Every entrepreneur’s journey looks different. VBA meets you where
              you are and helps you move forward.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {stageCards.map((card) => (
              <div
                key={card.stage}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-left shadow-xl shadow-slate-900/30"
              >
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">{card.stage}</p>
                  <h3 className="text-xl font-semibold text-white">
                    {card.headline}
                  </h3>
                  <div className="h-px w-full bg-white/10" />
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href={card.cta.href} variant="secondary" className="w-full text-xs">
                  {card.cta.label}
                </CTAButton>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400">
            One Core membership. Different paths as your business grows.
          </p>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-slate-900 to-sky-700" />

      <section className="bg-gradient-to-b from-sky-700 via-sky-600 to-sky-500 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              What Core Includes
            </h2>
            <p className="mt-3 text-sm text-slate-100">
              One membership. Structured support that evolves as your business
              grows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {coreIncludes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/30 bg-white/20 p-6 text-center text-white shadow-lg shadow-sky-900/20 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-100">
            Core adapts to your stage. The journey stays the same. The focus
            evolves.
          </p>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-sky-500 to-slate-950" />

      <section className="bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Business With Purpose
          </h2>
          <p className="text-slate-300">
            Purpose-driven entrepreneurship is built into the Core journey. Each
            quarter, VBA launches a Mission Series campaign that turns
            entrepreneurship into community impact.
          </p>
          <CTAButton href="/mission-series" variant="secondary" className="px-8 text-xs">
            Explore the Mission Series →
          </CTAButton>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-slate-950 to-slate-900" />

      <section className="bg-slate-900">
        <div className="grid grid-cols-2 gap-0 md:grid-cols-5">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="relative h-40 md:h-56">
              <Image
                src={`/veterans/vet-${index}.svg`}
                alt="Veteran portrait"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-semibold">Built for Veterans Too</h2>
          <p className="text-sm text-slate-200">
            Veterans receive tailored Core support and exclusive pricing designed
            for the transition from service to ownership.
          </p>
          <CTAButton href="/services" variant="secondary" className="px-8 text-xs">
            Veteran startup support →
          </CTAButton>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-slate-900 to-slate-950" />

      <section className="bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Start Your Core Journey
          </h2>
          <p className="text-slate-300">
            Wherever you’re starting, Core gives you the structure, guidance, and
            support to move forward with clarity and confidence.
          </p>
          <CTAButton href={CORE_PLATFORM_URL} className="px-10 py-4 text-xs">
            Start Your Core Journey
          </CTAButton>
          <Link href="/pricing" className="text-sm text-slate-300 hover:text-white">
            See pricing & membership details
          </Link>
        </div>
      </section>
    </div>
  )
}
