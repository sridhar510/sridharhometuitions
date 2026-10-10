import {
  ArrowRight,
  CalendarRange,
  Eye,
  Home,
  ListChecks,
  Phone,
  ScanSearch,
  Users,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { telHref } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'Focused learning, flexible session planning, requirement-based tutor matching and ongoing parent visibility — the reasons families across Vanasthalipuram and Secunderabad choose Ajay Home Tuitions.',
  alternates: { canonical: '/why-choose-us' },
}

const reasons = [
  {
    icon: Home,
    title: 'Focused Learning Environment',
    body: 'A session at home has one student in it. There is no background noise from a batch, no competing for the tutor\u2019s time, and no reason to stay quiet about a doubt. That single change is usually what makes the hour productive.',
  },
  {
    icon: CalendarRange,
    title: 'Flexible Session Planning',
    body: 'Timings are built around school hours, travel and family routine — weekday evenings, holiday mornings, or a lighter week during exams. The plan can shift when the term gets heavier instead of breaking.',
  },
  {
    icon: ScanSearch,
    title: 'Requirement-Based Tutor Matching',
    body: 'We match on the specifics: the class, the board, the subjects that need work, the language the student thinks in, and the timings you can actually keep. Availability is confirmed before anything is promised.',
  },
  {
    icon: ListChecks,
    title: 'Clear Academic Priorities',
    body: 'Not everything can be fixed at once. We decide with you what matters first — usually the topic blocking the most marks — and give it the sessions it needs before widening the scope.',
  },
  {
    icon: Users,
    title: 'Convenient Home Learning',
    body: 'No travel after a full school day, no waiting for a batch to begin. The student works with their own books at their own desk, and the time saved goes back into study and rest.',
  },
  {
    icon: Eye,
    title: 'Ongoing Parent Visibility',
    body: 'You hear what was covered, what improved, and what is still weak — as it happens, not at the end of the term. If the arrangement needs adjusting, you find out early enough to act.',
  },
]

const comparison = [
  {
    label: 'Attention per session',
    group: 'Shared between the whole batch',
    home: 'The full hour on one student',
  },
  {
    label: 'Pace of teaching',
    group: 'Set by the batch average',
    home: 'Set by what this student needs',
  },
  {
    label: 'Doubt clearing',
    group: 'Whatever time is left over',
    home: 'Asked and answered as it arises',
  },
  {
    label: 'Schedule',
    group: 'Fixed slot, fixed days',
    home: 'Planned around the household',
  },
  {
    label: 'Travel',
    group: 'Daily, after school hours',
    home: 'None — the tutor comes home',
  },
]

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Why Choose Us"
        eyebrow="Why Families Choose Ajay"
        title="A More Considered Way to Get Extra Help"
        description="Six practical reasons parents in Vanasthalipuram, ECIL, Kapra and the nearby localities keep home tuition running with us."
      />

      <section aria-labelledby="reasons-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="reasons-heading"
            eyebrow="What You Get"
            title="Small Improvements Become Stronger Habits"
            description="Not in a promise made at the enquiry stage, but in whether the sessions still work in the middle of a busy term."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/45 hover:shadow-lg hover:shadow-primary/5 sm:p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="comparison-heading"
        className="border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="comparison-heading"
            eyebrow="A Simple Comparison"
            title="Group Coaching and Home Tuition Are Not the Same Thing"
            description="Both have a place. This is simply what changes when the teaching happens one-to-one at home."
          />

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Comparison of group coaching and one-to-one home tuition
              </caption>
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th
                    scope="col"
                    className="px-4 py-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase sm:px-6"
                  >
                    Aspect
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase sm:px-6"
                  >
                    Group Coaching
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-xs font-semibold tracking-[0.14em] text-accent uppercase sm:px-6"
                  >
                    Home Tuition
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 align-top font-medium text-primary sm:px-6"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-4 align-top text-muted-foreground sm:px-6">
                      {row.group}
                    </td>
                    <td className="px-4 py-4 align-top font-medium text-primary sm:px-6">
                      {row.home}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-cta-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-8 rounded-[1.75rem] border border-border bg-card p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2
                id="why-cta-heading"
                className="font-serif text-2xl leading-snug font-semibold text-primary text-balance sm:text-3xl"
              >
                Tell us about the student and we will tell you what is possible.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Class, subjects, locality and preferred timings — that is all we
                need to begin.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/join-parent">
                  Find a Tutor
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
              >
                <a href={telHref}>
                  <Phone className="size-4" />
                  Talk to Ajay
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
