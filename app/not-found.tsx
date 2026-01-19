import Link from "next/link"
import CTAButton from "../components/CTAButton"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-center text-white">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
          Page not found
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Let&apos;s get you back to Core.
        </h1>
        <p className="text-base text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist, but your journey can still
          continue.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <CTAButton href="/">Return Home</CTAButton>
        <Link href="/contact" className="text-sm text-slate-300 hover:text-white">
          Contact support
        </Link>
      </div>
    </div>
  )
}
