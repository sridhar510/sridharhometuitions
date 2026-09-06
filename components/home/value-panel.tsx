import { CalendarClock, MessagesSquare, Target, UserRound } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'

const values = [
  {
    icon: UserRound,
    title: 'One-to-One Attention',
    body: 'The whole session belongs to one student — questions get asked and answered without waiting for a turn.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Home Sessions',
    body: 'Timings are planned around school hours, travel and the household routine rather than a fixed batch slot.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented Practice',
    body: 'Every session ends with something written, corrected and understood, not merely explained and forgotten.',
  },
  {
    icon: MessagesSquare,
    title: 'Regular Academic Guidance',
    body: 'Parents hear what is improving and what still needs work, in plain language and without waiting for results day.',
  },
]

export function ValuePanel() {
  return (
    <section
      aria-labelledby="value-panel-heading"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>What Matters Most</Eyebrow>
            <h2
              id="value-panel-heading"
              className="mt-5 font-serif text-3xl leading-[1.12] font-semibold tracking-tight text-primary text-balance sm:text-4xl"
            >
              A Learning Plan With Room to Adapt
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Good tutoring is more than a lesson. It combines attention, rhythm, useful practice and clear communication.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/45"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
