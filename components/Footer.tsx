import Link from "next/link"
import CTAButton from "./CTAButton"
import {
  CORE_FREE_SIGNUP_URL,
  FOOTER_COLUMNS,
  SITE_NAME
} from "../lib/site-config"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">{SITE_NAME}</p>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              A founder-first ecosystem helping you clarify the vision, build the
              plan, and grow with intention.
            </p>
          </div>
          <CTAButton href={CORE_FREE_SIGNUP_URL} variant="secondary">
            Join Core Free
          </CTAButton>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(FOOTER_COLUMNS).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                {title}
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                {links.map((link) => (
                  <li key={`${title}-${link.label}`}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 VBA LLC
        </div>
      </div>
    </footer>
  )
}
