import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VBA Privacy Policy."
}

export default function PrivacyPage() {
  return (
    <div className="bg-slate-950 py-20 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">VBA Privacy Policy</h1>
          <p className="text-sm text-slate-300">Last Revised: August 23, 2025</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 text-slate-300">
          <p>
            Privacy policy content must be supplied verbatim by VBA to complete
            this page.
          </p>
        </div>
      </div>
    </div>
  )
}
