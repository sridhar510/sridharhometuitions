import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Review the conditions that guide tuition enquiries, tutor introductions, session arrangements, and communication with Ajay Home Tuitions.',
  alternates: { canonical: '/terms-and-conditions' },
}

const sections = [
  {
    heading: 'What this service is',
    paragraphs: [
      `${siteConfig.name} arranges home tuition by matching families with tutors who teach at the student\u2019s home. We are a tuition matching and coordination service, not a school, coaching centre or examination authority.`,
    ],
  },
  {
    heading: 'Enquiries and matching',
    paragraphs: [
      'Submitting an enquiry or tutor application does not by itself create a tuition arrangement. Every match depends on tutor availability, subject and board suitability, locality, and agreement on timings and fees.',
      'We aim to shortlist suitable tutors from the details you provide, but we do not guarantee that a match will be available for every requirement, subject combination or locality.',
    ],
  },
  {
    heading: 'Tutor verification',
    paragraphs: [
      'We verify the qualifications and teaching background that tutors present to us, and we speak to them about subject depth and board familiarity before sharing assignments.',
      'Verification is a reasonable-care process based on the documents and references made available. Families are encouraged to use the introductory session to judge teaching style and comfort for themselves.',
    ],
  },
  {
    heading: 'Sessions, timings and fees',
    paragraphs: [
      'Fees depend on the class, subjects, number of sessions per week and locality, and are discussed and agreed before classes begin. Any figure mentioned in conversation before that is indicative only.',
      'Schedules are set between the family and the tutor. Where sessions are missed, rescheduling is worked out between both sides; we help coordinate where needed.',
    ],
  },
  {
    heading: 'Changing or ending an arrangement',
    paragraphs: [
      'If the fit is not right, tell us. We will take up the concern with the tutor and, where it cannot be resolved, arrange an alternative tutor where one is available.',
      'Either side may end an arrangement. We ask for reasonable notice so that classes are not disrupted mid-chapter or immediately before an examination.',
    ],
  },
  {
    heading: 'Academic outcomes',
    paragraphs: [
      'Tuition supports a student\u2019s learning; it cannot guarantee a particular mark, grade, rank or examination result. Progress depends on the student\u2019s effort and consistency alongside the tutor\u2019s teaching.',
    ],
  },
  {
    heading: 'Conduct',
    paragraphs: [
      'Sessions take place in the student\u2019s home and we expect a respectful, safe environment for both the student and the tutor. Any conduct concern raised with us by either side is taken seriously and acted on.',
    ],
  },
  {
    heading: 'Website content',
    paragraphs: [
      'Details on this website about classes, subjects, boards and service areas describe our usual coverage and may change. Service in a given locality always depends on tutor availability at that time.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      `For any question about these terms, contact us at ${siteConfig.email} or ${siteConfig.phone}, or visit ${siteConfig.address}.`,
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        breadcrumb="Terms &amp; Conditions"
        title="Terms &amp; Conditions"
        description="The basis on which we arrange home tuition between families and tutors, written plainly."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-serif text-2xl text-foreground">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 rounded-xl border border-border bg-secondary/40 p-4 text-xs leading-relaxed text-muted-foreground">
            These terms are written in plain language for a local home tuition
            service rather than as formal legal drafting. Specific arrangements
            agreed in writing with a family or tutor take precedence.
          </p>
        </div>
      </section>
    </>
  )
}
