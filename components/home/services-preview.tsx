import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/content'

export function ServicesPreview() {
  return (
    <section aria-labelledby="services-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Tuition Solutions"
            title="Support Shaped to the Requirement"
            description="Different students arrive with different problems. These are the arrangements families ask us for most often."
          />
          <Button
            asChild
            variant="outline"
            className="w-fit shrink-0 rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
          >
            <Link href="/services">
              All Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/45 hover:shadow-lg hover:shadow-primary/5 sm:p-7"
            >
              <h3 className="font-serif text-xl font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/80"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
