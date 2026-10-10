import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react"

import { ContactSection } from "@/components/contact-section"
import { PageHero } from "@/components/page-hero"
import { ParentForm } from "@/components/forms/parent-form"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig, telHref } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Request a Home Tutor",
  description:
    "Tell us about your child's class, board, subjects and preferred timings. We shortlist matching home tutors in your area and arrange an introductory session.",
  alternates: { canonical: "/join-parent" },
}

const steps = [
  {
    title: "Share the requirement",
    body: "Class, board, subjects, area and the timings that actually work for your family.",
  },
  {
    title: "We shortlist tutors",
    body: "We match on subject depth, board familiarity, travel distance and availability.",
  },
  {
    title: "Meet before committing",
    body: "An introductory session lets you judge teaching style and comfort with your child.",
  },
  {
    title: "Begin regular classes",
    body: "Fix the schedule, and we stay in touch to check that progress stays on track.",
  },
]

const assurances = [
  { icon: ShieldCheck, text: "Verified tutors, background and credentials checked" },
  { icon: Clock, text: "Timings planned around school and existing commitments" },
  { icon: Sparkles, text: "Replacement arranged if the fit is not right" },
]

export default function JoinParentPage() {
  return (
    <>
      <PageHero
        eyebrow="For Parents"
        breadcrumb="Request a Tutor"
        title="Request a home tutor for your child"
        description="Share a few details about your child's learning needs. We will get back with tutor options that fit the class, board, subjects and schedule you describe."
      />

      <section className="border-b border-border bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Enquiry form"
              title="Tell us what your child needs"
              description="Everything here helps us shortlist accurately. The more specific the subjects and timings, the closer the first match tends to be."
              align="left"
            />
            <div className="mt-10">
              <Suspense
                fallback={<div className="h-96 rounded-2xl border border-border bg-card" aria-hidden="true" />}
              >
                <ParentForm />
              </Suspense>
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl text-foreground">What happens next</h2>
              <ol className="mt-5 flex flex-col gap-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <h2 className="font-serif text-xl text-foreground">Our assurances</h2>
              <ul className="mt-5 flex flex-col gap-4">
                {assurances.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl text-foreground">Prefer to talk first?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Call or message us and we will take the requirement over the phone.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Read common questions
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
