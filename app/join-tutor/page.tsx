import type { Metadata } from "next"
import { Suspense } from "react"
import { BadgeCheck, CalendarClock, MapPin, Wallet } from "lucide-react"

import { ContactSection } from "@/components/contact-section"
import { PageHero } from "@/components/page-hero"
import { TutorForm } from "@/components/forms/tutor-form"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig, telHref } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Apply as a Home Tutor",
  description:
    "Apply to teach with Ajay Home Tuitions. Share your qualifications, subjects, boards and preferred localities to receive tuition assignments near you.",
  alternates: { canonical: "/join-tutor" },
}

const steps = [
  {
    title: "Submit your profile",
    body: "Qualifications, teaching experience, subjects and the areas you can travel to.",
  },
  {
    title: "Verification call",
    body: "We confirm your credentials, subject depth and comfort with the boards you list.",
  },
  {
    title: "Assignment sharing",
    body: "We share requirements that match your subjects, level and locality.",
  },
  {
    title: "Start teaching",
    body: "Meet the family, agree on the schedule, and begin regular sessions.",
  },
]

const benefits = [
  { icon: MapPin, title: "Work close to home", body: "Assignments matched to the localities you actually cover." },
  { icon: CalendarClock, title: "Choose your slots", body: "Take on batches that fit your existing commitments." },
  { icon: Wallet, title: "Fair, transparent pay", body: "Rates discussed clearly before you accept an assignment." },
  { icon: BadgeCheck, title: "Genuine leads only", body: "Requirements are verified before they reach you." },
]

export default function JoinTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="For Tutors"
        breadcrumb="Apply as a Tutor"
        title="Teach with Ajay Home Tuitions"
        description="If you teach with patience and know your subject well, we would like to work with you. Share your profile and we will reach out with assignments near you."
      />

      <section className="border-b border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why tutors work with us"
            title="Assignments that respect your time and expertise"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Application form"
              title="Tell us about your teaching"
              description="Be specific about subjects, boards and localities. It helps us send you assignments you will actually want to take."
              align="left"
            />
            <div className="mt-10">
              <Suspense
                fallback={<div className="h-96 rounded-2xl border border-border bg-card" aria-hidden="true" />}
              >
                <TutorForm />
              </Suspense>
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl text-foreground">The process</h2>
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

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl text-foreground">Questions about applying?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Speak to our coordinator before submitting your profile.
              </p>
              <a
                href={telHref}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
