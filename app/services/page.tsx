import { ArrowRight, Check, GraduationCap, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { academicLevels, boards, services, subjects } from '@/lib/content'
import { whatsappHref } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Home Tuition Services',
  description:
    'Explore practical home tuition options from Ajay Home Tuitions for school support, concept clarity, revision, study habits and senior academics.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Tuition Solutions"
        title="Home Tuition Built Around the Next Right Step"
        description="Six arrangements that cover most of what families ask us for — from steady weekly school support to focused revision before a board examination."
      >
        <ul className="flex flex-wrap gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-xs font-medium text-primary-foreground/85 transition-colors hover:border-accent/60 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section aria-labelledby="services-list-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="services-list-heading"
            eyebrow="What We Offer"
            title="Every Requirement Needs a Different Shape"
            description="Read through and pick the one closest to your situation — or simply describe the problem and we will work out which fits."
          />

          <div className="mt-12 flex flex-col gap-4">
            {services.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 rounded-[1.5rem] border border-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="font-mono text-xs font-semibold text-accent"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-8 bg-border" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl leading-snug font-semibold text-primary sm:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base font-medium text-primary/70">
                      {service.summary}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.detail}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/50 p-6">
                    <h4 className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                      What sessions include
                    </h4>
                    <ul className="mt-4 flex flex-col gap-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-6 w-full rounded-full border-primary/20 bg-card text-primary hover:bg-secondary"
                    >
                      <a
                        href={whatsappHref(
                          `Hi Ajay Home Tuitions, I would like to know more about ${service.title}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="size-4" />
                        Enquire About This
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="services-coverage-heading"
        className="border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="services-coverage-heading"
            eyebrow="Coverage"
            title="Classes, Subjects and Boards"
            description="Support is available from early school readiness through Class 10, Intermediate streams and selected degree-level subjects."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academicLevels.map((level) => (
              <li
                key={level.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <GraduationCap
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {level.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {level.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Subjects
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <li key={subject}>
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary"
                    >
                      {subject}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground sm:p-8">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-primary-foreground/60 uppercase">
                Boards
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {boards.map((board) => (
                  <li
                    key={board}
                    className="flex items-center gap-2.5 font-serif text-base font-medium"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {board}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/join-parent">
                Send a Tuition Requirement
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/20 bg-card px-6 text-primary hover:bg-secondary"
            >
              <Link href="/services-zones">Check Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
