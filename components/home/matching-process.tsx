import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { matchingSteps } from '@/lib/content'
import { telHref } from '@/lib/site-config'

export function MatchingProcess() {
  return (
    <section
      aria-labelledby="matching-heading"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeading
          id="matching-heading"
          eyebrow="Tutor Matching Process"
          title="How We Help You Find the Right Fit"
          description="No database dump of profiles. We start with a conversation and narrow down from there."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <ol className="flex flex-col">
            {matchingSteps.map((item, index) => (
              <li
                key={item.step}
                className="flex gap-5 border-t border-border py-7 first:border-t-0 first:pt-0 sm:gap-8"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm font-semibold text-accent"
                >
                  {item.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-primary sm:text-[1.4rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-2 hidden h-px flex-1 self-start bg-border sm:block"
                />
                <span className="sr-only">
                  {`Step ${index + 1} of ${matchingSteps.length}`}
                </span>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-border">
              <Image
                src="/images/tutor-session.png"
                alt="A home tutor explaining a concept to a student during a one-to-one session"
                width={760}
                height={620}
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="aspect-4/3 w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <h3 className="font-serif text-lg font-semibold text-primary">
                Ready to start the conversation?
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                Share the class, subjects and your locality — we will tell you
                honestly what is possible.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/join-parent">
                    Find a Tutor
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary/20 bg-transparent px-5 text-primary hover:bg-secondary"
                >
                  <a href={telHref}>
                    <Phone className="size-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
