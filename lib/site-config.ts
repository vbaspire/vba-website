export const CORE_PLATFORM_URL = "https://core.vbaspire.com"
export const CORE_FREE_SIGNUP_URL = "https://core.vbaspire.com/signup?tier=free"
export const CORE_STRIPE_MONTHLY_URL = "https://buy.stripe.com/bJe5kCbENdFD6LG6Da6oo0q"
export const CORE_STRIPE_ANNUAL_URL = "https://buy.stripe.com/00w4gy5gp597ee8e5C6oo0u"

export const SITE_NAME = "Venture Beyond Aspirations"
export const SITE_DESCRIPTION =
  "VBA helps founders clarify, build, and grow with Core, voice support, and creative services."

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "Mission Series", href: "/mission-series" },
  { label: "Contact", href: "/contact" }
]

export const FOOTER_COLUMNS = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Mission Series", href: "/mission-series" },
    { label: "Contact", href: "/contact" }
  ],
  Services: [
    { label: "Core", href: "/core" },
    { label: "VBA Voice", href: "/services" },
    { label: "Kreadiv Services", href: "/services" }
  ],
  Impact: [
    { label: "How Core Works", href: "/core" },
    { label: "Pricing", href: "/pricing" },
    { label: "Start Your Core Journey", href: CORE_PLATFORM_URL }
  ],
  Resources: [
    { label: "Core Platform", href: CORE_PLATFORM_URL },
    { label: "Join Core Free", href: CORE_FREE_SIGNUP_URL }
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
}
