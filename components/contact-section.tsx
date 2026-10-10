import { ArrowUpRight, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig, telHref, whatsappHref } from '@/lib/site-config'

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-section-heading"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="bg-grid-navy absolute inset-0 opacity-[0.13]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              <span className="h-px w-8 bg-accent" />
              Contact Us
            </p>
            <h2
              id="contact-section-heading"
              className="mt-5 font-serif text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Find the Right Next Step
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/70">
              Tell us where your child is studying, what feels difficult, and when support would fit your week. We will help you understand the available options.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                <a href={telHref}>
                  <Phone className="size-4" />
                  Call Ajay
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/25 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Ajay
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          <dl className="flex flex-col gap-px overflow-hidden rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5">
            <div className="flex gap-4 p-6 sm:p-7">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-primary-foreground/50 uppercase">
                  Visit
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </div>

            <div className="flex gap-4 border-t border-primary-foreground/10 p-6 sm:p-7">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-primary-foreground/50 uppercase">
                  Phone &amp; WhatsApp
                </dt>
                <dd className="mt-2 flex flex-col gap-1 text-sm">
                  <a
                    href={telHref}
                    className="font-serif text-xl font-semibold tracking-tight transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    WhatsApp the same number
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4 border-t border-primary-foreground/10 p-6 sm:p-7">
              <Navigation className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] text-primary-foreground/50 uppercase">
                  Location
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
                  {siteConfig.shortLocation}
                  <span className="mt-1 block text-primary-foreground/55">
                    {siteConfig.mapLocation}
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
