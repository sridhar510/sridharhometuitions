import { ExternalLink, MapPin, Navigation, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig, telHref } from '@/lib/site-config'

type LocationMapProps = {
  /** Unique id — required so the section heading and aria-labelledby stay unique per page. */
  id: string
  eyebrow?: string
  title?: string
  description?: string
  /** Show the address card and Directions / Call actions beside the map. */
  showDetails?: boolean
  className?: string
}

function MapFrame() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
      <iframe
        src={siteConfig.mapEmbedUrl}
        title={`Google Map showing ${siteConfig.name} at ${siteConfig.mapLocation}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[20rem] w-full border-0 sm:h-[26rem]"
      />
    </div>
  )
}

export function LocationMap({
  id,
  eyebrow = 'Find Us',
  title = 'Our Location in Vanasthalipuram',
  description = siteConfig.address,
  showDetails = false,
  className,
}: LocationMapProps) {
  const headingId = `${id}-heading`

  return (
    <section
      aria-labelledby={headingId}
      className={cn('border-t border-border bg-secondary/40', className)}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        {showDetails ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <MapPin aria-hidden="true" className="size-4 text-accent" />
                <h3 className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  Tuition Office
                </h3>
              </div>

              <address className="mt-5 text-base leading-relaxed text-foreground not-italic">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Tutors travel to homes across Vanasthalipuram and nearby south Hyderabad
                localities. Call to discuss your requirement and check availability.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="size-4" />
                    Get Directions
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
                >
                  <a href={telHref}>
                    <Phone className="size-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Map reference: {siteConfig.mapLocation}
              </p>
            </div>

            <MapFrame />
          </div>
        ) : (
          <>
            <div className="mt-10">
              <MapFrame />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Map reference: {siteConfig.mapLocation}
            </p>
          </>
        )}
      </div>
    </section>
  )
}
