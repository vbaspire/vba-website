import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "VBA Terms of Use for services, memberships, and offerings."
}

export default function TermsPage() {
  return (
    <div className="bg-slate-950 py-20 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">VBA Terms of Use</h1>
          <p className="text-sm text-slate-300">Last Revised: December 26, 2025</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-slate-300">
            By accessing or using VBA services—including vbaspire.com, Core,
            Kreadiv, VBAVoice, VBA events, Max AI, and other offerings—you agree
            to these Terms of Use. If you do not agree, please discontinue use
            of our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Contract</h2>
          <p className="text-slate-300">
            By registering, subscribing, or purchasing services, you enter into
            a legally binding agreement with VBA (Venture Beyond Aspirations,
            LLC). You may terminate this agreement at any time by closing your
            account, subject to applicable cancellation policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Eligibility</h2>
          <p className="text-slate-300">To use VBA services, you must:</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>Be 18 or older (or the minimum age required by law).</li>
            <li>Provide accurate information.</li>
            <li>Not have been restricted previously from using VBA.</li>
            <li>Maintain only one account per person or business.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">4. Services</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">4.1 Core</h3>
            <p className="text-slate-300">
              Core is VBA’s membership platform. Members must follow VBA
              guidelines, act professionally, and not engage in prohibited
              activities.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">4.2 Kreadiv</h3>
            <p className="text-slate-300">
              Kreadiv offers branding, design, and marketing services. VBA
              retains ownership of creative content unless otherwise agreed.
              Refunds are only available before work begins.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">4.3 VBAVoice</h3>
            <p className="text-slate-300">
              VBAVoice provides telecom and communication services, including
              phone lines, UC features, and add-ons. By subscribing to VBAVoice,
              you (“Customer/Member”) agree to:
            </p>

            <div className="space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-white">Billing &amp; Payment</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Services are billed on a recurring basis according to the
                    plan and add-ons selected at signup.
                  </li>
                  <li>
                    A one-time setup fee may apply depending on the plan
                    selected.
                  </li>
                  <li>
                    Add-ons (such as SMS/MMS or CRM integration) may incur
                    additional recurring or usage-based charges.
                  </li>
                  <li>
                    SMS/MMS usage is billed per message in addition to any
                    add-on fee.
                  </li>
                  <li>
                    Payment information is stored securely by Stripe, and
                    recurring charges are applied automatically.
                  </li>
                  <li>
                    Customer authorizes VBA to process payments using the stored
                    payment method for all recurring and usage-based charges.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Membership Discounts</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Verified Annual Core Members may receive discounts such as
                    waived setup fees or free user seats.
                  </li>
                  <li>Annual status will be verified before provisioning.</li>
                  <li>
                    If a discount is applied in error, VBA reserves the right to
                    adjust billing to the standard plan rate.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Provisioning &amp; Activation</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Standard provisioning occurs within seventy-two (72)
                    business hours of completed signup and payment.
                  </li>
                  <li>
                    Accounts requiring verification or special configuration may
                    take additional time.
                  </li>
                  <li>
                    Customer must provide accurate details (including user info
                    and email addresses) for setup.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Cancellations</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Customers may cancel service at any time with written notice
                    via the Core portal or VBA support.
                  </li>
                  <li>
                    Cancellation will not result in a refund of charges already
                    billed.
                  </li>
                  <li>
                    Service remains active until the end of the current billing
                    cycle.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Use of Services</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Services must be used in compliance with applicable laws and
                    not for unlawful, fraudulent, or abusive purposes.
                  </li>
                  <li>
                    Plans include a Fair Use allowance of up to 1,000 combined
                    voice minutes per month (inbound, outbound, toll-free).
                  </li>
                  <li>
                    Additional minutes are billed at VBA’s published per-minute
                    rates.
                  </li>
                  <li>
                    Excessive or abnormal usage (e.g., robocalls, automated
                    dialing, unusually high call volumes) may result in
                    additional charges or suspension.
                  </li>
                  <li>
                    VBA is not responsible for delays caused by inaccurate or
                    incomplete information provided by the Customer.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Updates to Fees &amp; Terms</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    VBA may update pricing, fees, and terms with reasonable
                    prior notice.
                  </li>
                  <li>
                    Continued use of VBAVoice services after notice constitutes
                    acceptance of updates.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Authorization</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    By using VBAVoice, Customer confirms that they:
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Have read and agree to this Service Agreement.</li>
                      <li>
                        Authorize VBA to charge their selected payment method
                        for chosen plans, add-ons, and approved usage charges.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">
                  VBAVoice Setup &amp; Support Scope
                </p>
                <p className="font-semibold text-white">Setup Expectations (Included)</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>One (1) answering tree configuration included</li>
                  <li>One (1) post-setup modification included</li>
                  <li>
                    Setup covers initial configuration only based on information
                    provided at onboarding
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-white">Additional Changes</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Any changes beyond the included configuration are billed at $50 per change</li>
                  <li>A “change” is defined as:</li>
                  <li>Modifying call routing or logic</li>
                  <li>Adding/removing extensions or departments</li>
                  <li>Re-recording or restructuring the call flow</li>
                  <li>Adjusting business hours or call handling rules</li>
                </ul>
                <p className="mt-4 font-semibold text-white">Support Allowance</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>First Month: Up to 5 hours of support included</li>
                  <li>Ongoing: 1 hour per month included</li>
                  <li>Support includes:</li>
                  <li>Minor adjustments</li>
                  <li>Troubleshooting</li>
                  <li>User assistance</li>
                  <li>Configuration guidance</li>
                </ul>
                <p className="mt-4 font-semibold text-white">Excessive Changes &amp; Overage</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Requests exceeding included support or configuration limits
                    are billed at $50 per change
                  </li>
                  <li>
                    VBA reserves the right to invoice for excessive or repeated
                    requests outside the original scope
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">4.4 VBA Events</h3>
            <p className="text-slate-300">
              By attending events, you agree to follow event rules, act
              professionally, and release VBA from liability for event-related
              injuries or damages.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">4.5 Other Products &amp; Services</h3>
            <p className="text-slate-300">
              Purchases must be paid in USD with accurate billing information.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              4.5.1 Mission Series &amp; Charitable Campaigns (Including Power in
              Pink)
            </h3>
            <p className="text-slate-300">
              From time to time, VBA may sell products or merchandise associated
              with awareness or charitable campaigns (collectively, “Mission
              Series Products”). A portion of proceeds from these sales is
              donated to the organizations or causes specified on the campaign
              page. Donation amounts or percentages may vary per campaign and
              are disclosed publicly after each campaign concludes.
            </p>
            <p className="font-semibold text-white">Sales and Returns</p>
            <p className="text-slate-300">
              All Mission Series product sales are final. Due to the charitable
              nature of these campaigns, VBA cannot accept returns or exchanges
              once an order is placed. Refunds are only permitted if an item
              arrives defective or damaged and must be requested within 7 days
              of delivery. Each product is limited edition and available only
              within the stated campaign window.
            </p>
            <p className="font-semibold text-white">Taxes</p>
            <p className="text-slate-300">
              Applicable sales tax will be calculated and collected at checkout
              in accordance with federal, state, and local laws.
            </p>
            <p className="font-semibold text-white">Shipping</p>
            <p className="text-slate-300">
              Products ship within 5–7 business days unless otherwise stated.
              Delivery times may vary by location.
            </p>
            <p className="font-semibold text-white">Transparency</p>
            <p className="text-slate-300">
              VBA will share total donation results at the end of each campaign
              quarter through vbaspire.com or official social channels.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p className="text-slate-300">
            All content, logos, and trademarks are owned by VBA. Unauthorized
            use is prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. User Conduct</h2>
          <p className="text-slate-300">You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>Use VBA services for illegal or harmful purposes.</li>
            <li>Post offensive, defamatory, or obscene content.</li>
            <li>Attempt to disrupt or misuse VBA systems.</li>
            <li>
              Violations may result in suspension, termination, or legal action.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">7. Payments, Refunds, and Cancellations</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">7.1 Payments</h3>
            <p className="text-slate-300">
              Payments are processed securely. Users are responsible for all
              applicable taxes and fees.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">7.2 Refund Policy</h3>
            <p className="text-slate-300">VBAVoice: Non-refundable once activated.</p>
            <p className="text-slate-300">Kreadiv: Refunds only before work begins.</p>
            <p className="text-slate-300">Digital Products: Non-refundable once delivered.</p>
            <p className="text-slate-300">
              Physical Products (including Mission Series): Refunds only if
              defective; all sales are final otherwise.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">7.3 Cancellations</h3>
            <p className="text-slate-300">
              Services can be canceled before work begins for a full refund. Once
              active or in progress, cancellations are non-refundable.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-slate-300">
            All services are provided “as is.” VBA is not liable for losses,
            delays, outages, or damages resulting from use or misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Termination</h2>
          <p className="text-slate-300">
            VBA may suspend or terminate accounts for violations of these Terms,
            fraudulent activity, or harmful behavior.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p className="text-slate-300">
            These Terms are governed by Missouri law. Disputes fall under
            Missouri state and federal courts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Dispute Resolution</h2>
          <p className="text-slate-300">
            We aim to resolve disputes first through mediation. If unresolved,
            disputes will be handled under Missouri law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">12. Changes</h2>
          <p className="text-slate-300">
            We may update these Terms at any time. Continued use of services
            means acceptance of updates.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">13. Contact</h2>
          <p className="text-slate-300">Email: legal@vbaspire.com</p>
          <p className="text-slate-300">
            Mail: 8301 State Line Rd. Ste 220 #1604, Kansas City, MO 64114
          </p>
        </section>
      </div>
    </div>
  )
}
