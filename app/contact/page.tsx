import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ContactSection } from '@/components/contact-section'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { LocationMap } from '@/components/location-map'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { siteConfig, telHref } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Sridhar Home Tuitions in Renuka Colony, Hyderabad — call 7416597027, send a WhatsApp enquiry, or use the tuition enquiry form to share your requirement.',
  alternates: { canonical: '/contact' },
}

const details = [
  {
    icon: Phone,
    label: 'Phone & WhatsApp',
    lines: [siteConfig.phone],
    href: telHref,
  },
  {
    icon: Mail,
    label: 'Email',
    lines: [siteConfig.email],
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    lines: [...siteConfig.addressLines],
  },
  {
    icon: Clock,
    label: 'Enquiry Hours',
    lines: ['Monday to Sunday', '9:00 AM – 8:30 PM'],
  },
]

function FormFallback() {
  return (
    <div
      aria-hidden="true"
      className="h-[42rem] rounded-[1.5rem] border border-border bg-card"
    />
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in Touch"
        title="Let’s Start With Your Situation"
        description="Send us the student’s class, subjects, locality and preferred hours. We will look at the practical details before suggesting a home-tuition route."
      />

      <section aria-labelledby="contact-form-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
            <div>
              <SectionHeading
                id="contact-form-heading"
                eyebrow="Contact Details"
                title="Choose the easiest way to begin"
                description="Call when you want to talk it through, or use the form when you already know the important details."
              />

              <dl className="mt-10 flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {details.map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="flex gap-4 bg-card p-6">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-accent"
                    />
                    <div>
                      <dt className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                        {label}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                        {href ? (
                          <a
                            href={href}
                            className="font-serif text-lg font-semibold text-primary transition-colors hover:text-accent"
                          >
                            {lines[0]}
                          </a>
                        ) : (
                          lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <Button
                asChild
                variant="outline"
                className="mt-6 w-full rounded-full border-primary/20 bg-transparent text-primary hover:bg-secondary sm:w-fit sm:px-6"
              >
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="size-4" />
                  Open in Google Maps
                </a>
              </Button>
            </div>

            <Suspense fallback={<FormFallback />}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>

      <LocationMap id="contact-map" />

      <ContactSection />
    </>
  )
}
