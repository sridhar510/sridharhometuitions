import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Eyebrow } from '@/components/section-heading'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  breadcrumb: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="bg-grid-navy absolute inset-0 opacity-[0.13]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-24 size-80 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:py-22">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-primary-foreground/60">
            <li>
              <Link
                href="/"
                className="rounded transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-primary-foreground/90">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div className="animate-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-serif text-[2.15rem] leading-[1.06] font-semibold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
          </div>
          {description ? (
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}
