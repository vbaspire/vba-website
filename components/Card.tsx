type CardProps = {
  title: string
  description: string
  eyebrow?: string
}

export default function Card({ title, description, eyebrow }: CardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-left shadow-lg shadow-slate-900/20">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200/80">
          {eyebrow}
        </span>
      ) : null}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-base text-slate-300">{description}</p>
    </div>
  )
}
