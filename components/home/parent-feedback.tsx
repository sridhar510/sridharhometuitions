import { ClipboardCheck, MessageCircle, PhoneCall, RefreshCw } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { whatsappHref } from '@/lib/site-config'

const commitments = [
  {
    icon: PhoneCall,
    title: 'We check in, you do not have to chase',
    body: 'A coordinator follows up after the first few sessions to hear how the classes are actually going — from you and from the tutor.',
  },
  {
    icon: ClipboardCheck,
    title: 'Concerns are acted on, not filed away',
    body: 'If pace, punctuality or teaching style is not working, tell us. We take it up with the tutor directly and confirm the change with you.',
  },
  {
    icon: RefreshCw,
    title: 'A wrong fit gets replaced',
    body: 'Comfort between tutor and student matters more than a signed arrangement. If the match is not right, we arrange an alternative.',
  },
]

export function ParentFeedback() {
  return (
    <section aria-labelledby="feedback-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="feedback-heading"
            eyebrow="Parent Feedback"
            title="Built Around Ongoing Communication"
            description="We would rather show you how feedback is handled than publish quotes you cannot verify. Reviews go up here only when a family has shared them with us and agreed to it."
          />
          <Button
            asChild
            variant="outline"
            className="w-fit shrink-0 rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
          >
            <a
              href={whatsappHref(
                'Hi Ajay Home Tuitions, I would like to share feedback about the home tuition sessions.',
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Talk About Your Experience
            </a>
          </Button>
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {commitments.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7"
            >
              <Icon aria-hidden="true" className="size-6 text-accent" />
              <h3 className="mt-4 font-serif text-lg leading-snug text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
