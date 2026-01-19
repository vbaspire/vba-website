import type { Metadata } from "next"
import ConstantContactForm from "../../components/ConstantContactForm"
import Section from "../../components/Section"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Venture Beyond Aspirations for partnership and support questions."
}

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-white/10 bg-slate-950 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Contact VBA
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Share your questions, partnership ideas, or media inquiries. We&apos;ll
            respond with next steps and keep you updated through email.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Let&apos;s Connect"
        title="Send us a message."
        description="Fill out the form below and we&apos;ll reach back out shortly."
      >
        <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6">
          <ConstantContactForm formId="0547af28-70e8-424f-ae6c-ae146b18c284" />
        </div>
      </Section>
    </div>
  )
}
