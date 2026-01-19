import "./globals.css"
import Script from "next/script"
import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { SITE_DESCRIPTION, SITE_NAME } from "../lib/site-config"

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://www.vbaspire.com")
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col bg-slate-950 text-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script id="ctct-inline-config" strategy="afterInteractive">
          {`var _ctct_m = "6c5b063d45a8ca06be61af5d9f67e65c";`}
        </Script>
        <Script
          src="https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
