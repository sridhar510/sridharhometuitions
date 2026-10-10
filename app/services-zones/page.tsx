import { Info, MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ZoneExplorer } from '@/components/zones/zone-explorer'
import { serviceZones, zoneDisclaimer, type ZoneCategory } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Service Zones',
  description:
    'Explore Ajay Home Tuitions coverage from Vanasthalipuram through nearby south Hyderabad localities, including LB Nagar, Hayathnagar and Nagole.',
  alternates: { canonical: '/services-zones' },
}

const groupNotes: Record<ZoneCategory, string> = {
  'Closest Areas':
    'Immediately around our Vanasthalipuram base — usually the quickest to arrange and the easiest to keep consistent.',
  'Nearby Areas':
    'A short distance out. Requirements here are taken regularly, subject to a tutor being free for your timings.',
  'Extended Areas':
    'Served depending on tutor availability and the schedule requested. Worth asking before assuming either way.',
}

export default function ServiceZonesPage() {
  const groups: ZoneCategory[] = [
    'Closest Areas',
    'Nearby Areas',
    'Extended Areas',
  ]

  return (
    <>
      <PageHero
        breadcrumb="Service Zones"
        eyebrow="Where We Teach"
        title="Find a Tutor Near Your Home"
        description="Search for your locality, check availability, and we will confirm whether a tutor can reach you for the timings you need."
      >
        <dl className="grid gap-3 sm:grid-cols-3">
          {groups.map((group) => {
            const count = serviceZones.filter(
              (zone) => zone.category === group,
            ).length
            return (
              <div
                key={group}
                className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-5"
              >
                <dt className="text-xs font-semibold tracking-[0.16em] text-primary-foreground/55 uppercase">
                  {group}
                </dt>
                <dd className="mt-2 font-serif text-2xl font-semibold">
                  {count}
                  <span className="ml-1.5 text-sm font-normal text-primary-foreground/60">
                    localities
                  </span>
                </dd>
              </div>
            )
          })}
        </dl>
      </PageHero>

      <section aria-labelledby="zone-explorer-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="zone-explorer-heading"
            eyebrow="Service Zone Explorer"
            title="Find Your Locality"
            description="Type your area name or filter by distance from our Vanasthalipuram base. Check Availability carries your locality straight into the enquiry form."
          />

          <div className="mt-12">
            <ZoneExplorer />
          </div>

          <div className="mt-8 flex gap-3 rounded-2xl border border-accent/30 bg-accent/8 p-5 sm:p-6">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-foreground/85">
              {zoneDisclaimer}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="zone-groups-heading"
        className="border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <SectionHeading
            id="zone-groups-heading"
            eyebrow="Coverage Notes"
            title="How the Zones Work"
            description="Distance affects how easily a schedule can be kept, so we group localities honestly rather than claiming to cover everything equally."
          />

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
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {groupNotes[group]}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                    {zones.map((zone) => (
                      <li
                        key={zone.name}
                        className="flex items-center gap-2.5 text-sm text-foreground/85"
                      >
                        <span
                          aria-hidden="true"
                          className="size-1.5 shrink-0 rounded-full bg-accent/70"
                        />
                        {zone.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Our base is at {siteConfig.address}. If your locality is close to any
            of the areas listed above but not named, send us the address and we
            will confirm.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
