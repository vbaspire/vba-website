import type { Metadata } from "next"
import Image from "next/image"
import { leadership } from "../../lib/leadership"
import SectionDivider from "../../components/SectionDivider"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Venture Beyond Aspirations and our mission to help founders build with clarity."
}

const coreValues = [
  {
    title: "Integrity",
    description: "Honest, stage-aligned guidance that builds trust."
  },
  {
    title: "Innovation",
    description: "Systems that evolve as businesses grow."
  },
  {
    title: "Empowerment",
    description: "Confidence, structure, and ownership."
  }
]

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Business With Intention. Growth With Direction.
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Entrepreneurship shouldn&apos;t feel scattered. VBA exists to replace
            confusion with a clear, adaptable Core journey that evolves as your
            business grows.
          </p>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-slate-950 to-white" />

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div>
            <h2 className="text-3xl font-semibold">Our Core Values</h2>
            <p className="mt-2 text-sm text-slate-600">
              The Principles That Guide How We Build, Coach, and Grow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title} className="space-y-3">
                <div className="h-14 w-14 rounded-2xl border border-slate-200 bg-slate-100" />
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider className="bg-gradient-to-b from-white to-sky-600" />

      <section className="bg-gradient-to-b from-sky-600 via-sky-500 to-sky-400 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="text-white">
            <h2 className="text-3xl font-semibold">Meet Our Leadership</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-100">
              The VBA leadership team blends vision, operational excellence, and
              creative strategy to keep founders moving forward with clarity.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="overflow-hidden rounded-3xl border border-white/30 bg-white/20 shadow-lg shadow-sky-900/20 backdrop-blur"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={leader.imagePath}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 p-6 text-white">
                  <h3 className="text-lg font-semibold">{leader.name}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-100">
                    {leader.title}
                  </p>
                  <p className="text-sm text-slate-100">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
