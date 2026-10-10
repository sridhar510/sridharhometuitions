import { MessageCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { FaqAccordion, FaqStructuredData } from '@/components/faq-accordion'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { faqs } from '@/lib/content'
import { siteConfig, telHref, whatsappHref } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Practical answers about classes, subjects, tutor selection, schedules, locations and enquiries for Ajay Home Tuitions in Hyderabad.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <>
      <FaqStructuredData items={faqs} />

      <PageHero
        breadcrumb="FAQ"
        eyebrow="Frequently Asked Questions"
        title="Useful Details for Making a Decision"
        description="Areas covered, classes and subjects, tutor matching, schedules and how to send an enquiry — answered plainly."
      />

      <section aria-labelledby="faq-list-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                id="faq-list-heading"
                eyebrow="Questions & Answers"
                title="Still Not Sure? Just Ask."
                description="If your question is not covered here, call or message us — a two-minute conversation is usually faster than reading."
              />

              <div className="mt-8 flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-fit rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
                >
                  <a href={telHref}>
                    <Phone className="size-4" />
                    Call {siteConfig.phone}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-fit rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
                >
                  <a
                    href={whatsappHref(
                      'Hi Ajay Home Tuitions, I have a question about home tuition.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
