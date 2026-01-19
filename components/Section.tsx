import { ReactNode } from "react"

type SectionProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
  id?: string
}

export default function Section({
  eyebrow,
  title,
  description,
  children,
  id
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-lg text-slate-300">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}
