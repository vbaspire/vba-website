import type { Metadata } from "next"
import Image from "next/image"
import CTAButton from "../../components/CTAButton"
import SectionDivider from "../../components/SectionDivider"

export const metadata: Metadata = {
  title: "Mission Series",
  description:
    "Learn about the VBA Mission Series: curated challenges, sprints, and community momentum."
}

const campaigns = [
  {
    quarter: "Q1 | Empowerment in Action",
    tagline: "Dream. Build. Repeat.",
    description:
      "Our first quarter celebrates new beginnings and bold ideas. Empowerment in Action supports youth entrepreneurship and programs that help future founders take their first step toward ownership.",
    image: "/mission-series/q1.svg"
  },
  {
    quarter: "Q2 | Wellness & Balance",
    tagline: "Mind Right. Mission Strong.",
    description:
      "Q2 focuses on mental health and balance for founders and creatives. This campaign supports awareness programs that encourage entrepreneurs to care for their minds while building their missions.",
    image: "/mission-series/q2.svg"
  },
  {
    quarter: "Q3 | Innovation & Growth",
    tagline: "Build Better Things.",
    description:
      "Innovation & Growth highlights creativity and access. Proceeds help fund digital literacy and tech education initiatives that prepare the next generation of innovators.",
    image: "/mission-series/q3.svg"
  },
  {
    quarter: "Q4 | Power in Pink",
    tagline: "Empower. Build. Achieve.",
    description:
      "Our signature Q4 campaign unites the VBA community around breast cancer awareness and women’s empowerment. A portion of proceeds supports awareness and prevention programs.",
    image: "/mission-series/q4.svg"
  }
]

export default function MissionSeriesPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-white py-20 text-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-semibold sm:text-5xl">
              VBA Mission Series | Empowerment in Every Season
            </h1>
            <p className="text-base text-slate-600">
              The VBA Mission Series is where business meets purpose. Each
              quarter we launch a limited edition campaign inspired by our core
              pillars of Empowerment, Integrity, Innovation, Community, and
              Education. Every campaign features a product that gives back to a
              meaningful cause, turning everyday actions into lasting impact.
            </p>
            <p className="text-base text-slate-600">
              Our goal is simple: to show that entrepreneurship can build more
              than profit. It can build awareness, connection, and change.
              Whether it is supporting women’s health, promoting mental
              wellness, or helping young entrepreneurs take their first step,
              every purchase through the Mission Series fuels progress for
              people and communities everywhere.
            </p>
            <p className="text-base text-slate-600">
              At VBA, empowerment is not just what we teach. It is what we live,
              one mission at a time.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/mission-series/mission-hero.svg"
                alt="Mission Series apparel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-white to-slate-100" />

      <section className="bg-slate-100 pb-24 pt-10 text-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <h2 className="text-3xl font-semibold">
            Each quarter, VBA launches a new campaign that reflects one of our
            core pillars through a purpose-driven product and a cause that makes
            a lasting impact.
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {campaigns.map((campaign) => (
              <div key={campaign.quarter} className="space-y-4">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={campaign.image}
                    alt={campaign.quarter}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">{campaign.quarter}</p>
                  <p className="text-xs text-slate-500">{campaign.tagline}</p>
                  <p className="text-sm text-slate-600">{campaign.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-slate-100 to-slate-950" />

      <section className="bg-slate-950 py-20 text-center text-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6">
          <h2 className="text-3xl font-semibold">Business With Purpose</h2>
          <p className="text-slate-300">
            Mission Series updates are delivered through email and inside Core so
            you never miss a launch.
          </p>
          <CTAButton href="/core" variant="secondary" className="px-8 text-xs">
            Explore the Mission Series →
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
