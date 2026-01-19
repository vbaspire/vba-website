export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-slate-950 text-white">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-emerald-200/80">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-200" />
        Loading
      </div>
    </div>
  )
}
