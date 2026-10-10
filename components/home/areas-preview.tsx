import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { serviceZones, zoneDisclaimer, type ZoneCategory } from '@/lib/content'

const groups: ZoneCategory[] = ['Closest Areas', 'Nearby Areas', 'Extended Areas']

export function AreasPreview() {
  return (
    <section aria-labelledby="areas-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="areas-heading"
            eyebrow="Service Areas"
            title="Home Tuition Around Vanasthalipuram"
            description="Our tutors work across Vanasthalipuram and surrounding Hyderabad localities. Find your area and check availability."
          />
          <Button
            asChild
            variant="outline"
            className="w-fit shrink-0 rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
          >
            <Link href="/services-zones">
              Explore All Areas
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {groups.map((group) => {
            const zones = serviceZones.filter((zone) => zone.category === group)
            return (
              <div
                key={group}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin aria-hidden="true" className="size-4 text-accent" />
                  <h3 className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    {group}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2.5">
                  {zones.map((zone) => (
                    <li key={zone.name}>
                      <Link
                        href={`/contact?area=${encodeURIComponent(zone.name)}`}
                        className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-accent/50 hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                      >
                        {zone.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {zoneDisclaimer}
        </p>
      </div>
    </section>
  )
}
