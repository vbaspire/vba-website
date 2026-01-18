import type { Metadata } from "next"
import Card from "../../components/Card"
import Section from "../../components/Section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Venture Beyond Aspirations and our mission to help founders build with clarity."
}

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            About VBA
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Venture Beyond Aspirations exists to help founders build bold ideas
            with structure, accountability, and purposeful momentum.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Mission"
        title="We help founders move from ambition to execution."
        description="Our mission is to provide the clarity, tools, and accountability that founders need to build resilient ventures."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Clarity"
            description="We help you define the mission, values, and goals that guide every decision."
          />
          <Card
            title="Structure"
            description="We provide the systems and steps that turn ideas into measurable progress."
          />
          <Card
            title="Momentum"
            description="We keep founders aligned with accountability, support, and consistent action."
          />
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="Founder-first values guide everything we do."
        description="We believe in bold dreams, grounded execution, and community-driven accountability."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Purposeful growth"
            description="Progress is measured in impact and sustainable momentum, not just speed."
          />
          <Card
            title="Community accountability"
            description="We build together, support one another, and grow through shared commitment."
          />
        </div>
      </Section>
    </div>
  )
}
