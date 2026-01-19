import Link from "next/link"
import { ReactNode } from "react"

const variants = {
  primary:
    "bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-slate-900/20",
  secondary:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  dark:
    "bg-slate-900 text-white border border-white/10 hover:bg-slate-800"
}

type CTAButtonProps = {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = ""
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
        variants[variant]
      } ${className}`}
    >
      {children}
    </Link>
  )
}
