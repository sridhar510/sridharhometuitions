import { ArrowRight, MapPin, Phone, UserPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig, telHref } from '@/lib/site-config'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="bg-dots-orange absolute top-24 -left-16 hidden size-64 opacity-25 lg:block"
      />

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-4 pl-1.5 text-xs font-medium text-primary shadow-sm">
              <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-primary-foreground">
                <MapPin className="size-3" />
                Vanasthalipuram
              </span>
              One-to-one home tuition across Hyderabad
            </p>

            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.03] font-semibold tracking-[-0.02em] text-primary text-balance sm:text-6xl lg:text-[4.25rem]">
              Build Better
              <br />
              Study Habits{' '}
              <span className="relative inline-block">
                    Forward.

                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent sm:-bottom-2 sm:h-3.5"
                >
                  <path
                    d="M2 9c60-7 130-9 296-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Personal home tutoring that turns difficult chapters into manageable steps and helps students work with greater independence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/join-parent">
                  Find a Tutor
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-primary/20 bg-transparent px-7 text-base text-primary hover:bg-secondary"
              >
                <a href={telHref}>
                  <Phone className="size-4" />
                  Talk to Ajay
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-13 rounded-full px-4 text-base text-primary underline-offset-4 hover:bg-transparent hover:underline"
              >
                <Link href="/join-tutor">
                  <UserPlus className="size-4" />
                  Join Our Tutor Network
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Serving Vanasthalipuram, Kamala Nagar, Chintalakunta, Hayathnagar,
              LB Nagar and nearby south Hyderabad localities.
            </p>
          </div>

          {/* Visual column — asymmetric, layered */}
          <div className="relative animate-rise [animation-delay:120ms]">
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 hidden h-[85%] w-[85%] rounded-[2rem] border border-accent/35 sm:block"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-secondary shadow-2xl shadow-primary/15 sm:rounded-[2rem]">
              <Image
                src="/images/hero-home-tuition.png"
                alt="A home tutor guiding a student through a mathematics notebook at a study table"
                width={900}
                height={1100}
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="aspect-4/5 w-full object-cover sm:aspect-square lg:aspect-4/5"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/70 to-transparent"
              />
            </div>

            {/* Floating credential card */}
            <div className="relative mx-4 -mt-10 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-primary/10 sm:mr-0 sm:-mt-14 sm:ml-auto sm:max-w-xs">
              <p className="font-serif text-lg leading-snug font-semibold text-primary">
                Sessions at your home
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No travel, no crowded batch — just the student, the tutor and the
                subject that needs work.
              </p>
              <a
                href={telHref}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
