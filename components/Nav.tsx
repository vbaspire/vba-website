"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import CTAButton from "./CTAButton"
import { CORE_PLATFORM_URL, NAV_LINKS, SITE_NAME } from "../lib/site-config"

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          {SITE_NAME}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-white ${
                  isActive ? "text-white" : "text-slate-200"
                }`}
              >
                <span className="relative">
                  {link.label}
                  {isActive ? (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-white/60" />
                  ) : null}
                </span>
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <CTAButton href={CORE_PLATFORM_URL} variant="primary">
            Start Your Core Journey
          </CTAButton>
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-4 border-t border-white/5 px-6 py-3 text-sm text-slate-200 md:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition hover:text-white ${
              pathname === link.href ? "text-white" : "text-slate-200"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
