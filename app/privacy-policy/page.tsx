import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how information submitted through the Ajay Home Tuitions website is handled, used for enquiries, and protected.',
  alternates: { canonical: '/privacy-policy' },
}

const sections = [
  {
    heading: 'What we collect',
    paragraphs: [
      'When you submit an enquiry, tutor application or contact form on this website, we collect the details you type into it — typically name, phone number, email address, locality, and the academic details of the student such as class, board and subjects.',
      'We do not run advertising trackers or sell data to third parties. The website itself does not require you to create an account.',
    ],
  },
  {
    heading: 'How the information is used',
    paragraphs: [
      'Parent enquiries are used to understand the requirement and shortlist suitable tutors. Tutor applications are used to verify credentials and match applicants with tuition assignments.',
      'We may contact you by phone, WhatsApp or email using the details you provide, strictly in connection with the enquiry or application you submitted.',
    ],
  },
  {
    heading: 'What we share',
    paragraphs: [
      'To arrange a tuition match we share the minimum necessary details between the two sides — a tutor is told the student\u2019s class, board, subjects, locality and preferred timings; a family is told the tutor\u2019s qualifications, experience and availability.',
      'Full contact details are exchanged only once both sides agree to proceed with an introductory session. We do not publish student names or family details on this website.',
    ],
  },
  {
    heading: 'Messaging through WhatsApp',
    paragraphs: [
      'Several buttons on this website open a pre-filled message in WhatsApp. When you send that message, the conversation is carried over WhatsApp\u2019s own platform and is subject to their privacy terms in addition to ours.',
    ],
  },
  {
    heading: 'Retention and removal',
    paragraphs: [
      'Enquiry and application details are retained only as long as they remain useful for matching or for follow-up on an ongoing arrangement.',
      `You can ask us to delete your details at any time by calling ${siteConfig.phone} or writing to ${siteConfig.email}. Once removed, we will not retain a copy for future matching.`,
    ],
  },
  {
    heading: 'Feedback and reviews',
    paragraphs: [
      'Parent feedback is published on this website only where a family has shared it with us directly and agreed to it being shown. We do not invent or purchase reviews.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      `For any question about this policy, or about the information we hold, reach us at ${siteConfig.email} or ${siteConfig.phone}. Our address is ${siteConfig.address}.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        description="This page explains what we do with the details parents and tutors share with us, and how to have them removed."
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
            This policy describes the practices of a local home tuition service
            and is written in plain language rather than legal drafting. If a
            specific statutory disclosure is required for your purposes, please
            contact us directly.
          </p>
        </div>
      </section>
    </>
  )
}
