import { ClipboardCheck, MessageCircle, PhoneCall, RefreshCw } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { whatsappHref } from '@/lib/site-config'

const commitments = [
  {
    icon: PhoneCall,
    title: 'A simple check-in keeps things clear',
    body: 'After the arrangement settles, we make space for an honest update from the family and tutor.',
  },
  {
    icon: ClipboardCheck,
    title: 'Small concerns deserve a quick answer',
    body: 'If the pace, timing or communication needs adjusting, we help turn that feedback into a practical next step.',
  },
  {
    icon: RefreshCw,
    title: 'The relationship has to feel right',
    body: 'A tutor may be qualified and still not suit a particular learner. When that happens, we help explore a better fit.',
  },
]

export function ParentFeedback() {
  return (
    <section aria-labelledby="feedback-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="feedback-heading"
            eyebrow="The Family Experience"
            title="Support Does Not End at the First Session"
            description="A good arrangement should become easier to trust over time. We keep the conversation open so small concerns can be addressed before they become bigger ones."
          />
          <Button
            asChild
            variant="outline"
            className="w-fit shrink-0 rounded-full border-primary/20 bg-transparent px-6 text-primary hover:bg-secondary"
          >
            <a
              href={whatsappHref(
                'Hi Sridhar Home Tuitions, I would like to share feedback about the home tuition sessions.',
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
