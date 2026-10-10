import {
  BookOpenCheck,
  Home,
  MessagesSquare,
  Repeat,
  Sparkles,
  UserRound,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import { Eyebrow, SectionHeading } from '@/components/section-heading'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn how Ajay Home Tuitions supports students in Vanasthalipuram and nearby Hyderabad homes through focused, one-to-one academic guidance.',
  alternates: { canonical: '/about' },
}

const pillars = [
  {
    icon: UserRound,
    title: 'Individual Attention',
    body: 'A tuition hour spent on one student is a different thing altogether. There is no waiting for a turn, no pretending to follow along, and no question too small to raise. The tutor notices exactly where the hesitation starts and works from there.',
  },
  {
    icon: BookOpenCheck,
    title: 'Academic Clarity',
    body: 'Most academic trouble is not a lack of effort — it is an idea that was never properly understood. We put the effort into making the concept clear in the student\u2019s own words before moving on, because everything above it depends on that.',
  },
  {
    icon: Repeat,
    title: 'Consistent Practice',
    body: 'Understanding fades without use. Sessions always include written work — sums attempted independently, answers structured properly, corrections revisited — so the method becomes reliable rather than occasional.',
  },
  {
    icon: Home,
    title: 'Home Convenience',
    body: 'Learning at home removes travel time, evening traffic and the fatigue that comes with both. The student sits in a familiar place with their own books, and the energy goes into the subject instead of the commute.',
  },
  {
    icon: Sparkles,
    title: 'Student Confidence',
    body: 'Confidence is a by-product of competence. When a student can finish a problem set without help, they stop avoiding the subject. That shift in attitude usually shows up before the marks do.',
  },
  {
    icon: MessagesSquare,
    title: 'Parent Communication',
    body: 'Parents should not have to guess how tuition is going. We keep you informed about what is being covered, what has improved and what still needs attention, so there are no surprises at the end of a term.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About Ajay Home Tuitions"
        title="Tutoring That Pays Attention to the Details"
        description="We are a home tuition service based in Vanasthalipuram, Secunderabad, working with school, intermediate and degree students across the surrounding localities."
      />

      <section aria-labelledby="about-story-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                id="about-story-heading"
                eyebrow="Who We Are"
                title="Every Student Brings a Different Starting Point"
              />
              <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Ajay Home Tuitions began with a simple observation: two
                  students in the same class, with the same textbook and the same
                  teacher, can struggle for entirely different reasons. One has
                  missed a foundation topic. Another understands the concept but
                  loses marks in presentation. A third simply has no routine for
                  revision. A single fixed method cannot serve all three.
                </p>
                <p>
                  So we work the other way around. We ask what the student can
                  already do without help, where the effort breaks down, and what
                  the family actually needs to see change. Only then do we decide
                  what the sessions should look like — which subject leads, how
                  often the tutor comes, and what gets practised each week.
                </p>
                <p>
                  Our work stays deliberately local. Being centred on Vanasthalipuram
                  and the neighbouring areas means tutors reach homes without long
                  travel, schedules hold week after week, and we know the schools
                  and boards our students are dealing with. Reliability matters
                  more in tuition than reach does.
                </p>
              </div>

              <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Based in
                  </dt>
                  <dd className="mt-2.5 font-serif text-lg font-semibold text-primary">
                    {siteConfig.shortLocation}
                  </dd>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    We work with
                  </dt>
                  <dd className="mt-2.5 font-serif text-lg font-semibold text-primary">
                    School, Intermediate &amp; Degree
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-border">
                <Image
                  src="/images/tutor-session.png"
                  alt="A home tutor working through a problem with a student at a study table"
                  width={800}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <blockquote className="rounded-2xl border border-border bg-primary p-7 text-primary-foreground">
                <p className="font-serif text-xl leading-snug font-semibold text-balance">
                  &ldquo;A student who understands the reason behind a step stops
                  needing to memorise the step.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-primary-foreground/60">
                  The idea our sessions are built on
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-pillars-heading"
        className="border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="about-pillars-heading"
            eyebrow="What We Stand For"
            title="Six Commitments Behind Every Arrangement"
            description="These are not slogans — they are the things we check ourselves against when a family asks whether the tuition is working."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/45 sm:p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
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

      <section aria-labelledby="about-approach-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>How We Work</Eyebrow>
              <h2
                id="about-approach-heading"
                className="mt-5 font-serif text-3xl leading-[1.12] font-semibold tracking-tight text-primary text-balance sm:text-4xl"
              >
                Honest About What We Can Do
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We would rather say no than set up an arrangement that will not
                hold. If a locality is too far for a tutor to reach reliably, or a
                requested timing cannot be sustained through the term, we tell you
                at the enquiry stage instead of starting and cancelling later.
              </p>
              <p>
                We also do not promise marks. What we commit to is attention,
                preparation and follow-through — the tutor arrives ready, the
                session is used properly, and the progress is reported to you as
                it actually is. Results follow from that work rather than from a
                guarantee written on a website.
              </p>
              <p>
                If you are considering home tuition, the fastest way forward is a
                short conversation about the student. Tell us the class, the
                subjects that need work, your area and the timings that suit your
                household, and we will tell you plainly what makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
