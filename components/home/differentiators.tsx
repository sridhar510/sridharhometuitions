import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const points = [
  {
    title: 'Understand the Starting Point',
    body: 'Before any teaching begins, the tutor finds out what the student can already do unaided. That single conversation usually reveals whether the difficulty is the current chapter or something left behind two classes ago.',
  },
  {
    title: 'Set Practical Learning Goals',
    body: 'Goals are written in terms a student can act on this week — finish the chapter sums without help, write a full answer within the time limit, stop losing marks on units. Vague ambitions get replaced with specific targets.',
  },
  {
    title: 'Teach With Context',
    body: 'A formula explained on its own is forgotten by the weekend. The tutor connects it to where it came from and where it will be used again, so the student has a reason to remember it.',
  },
  {
    title: 'Review and Refine',
    body: 'Mistakes are treated as information. Each session revisits the previous errors, names the reason behind them, and adjusts the plan for the coming weeks instead of repeating the same routine.',
  },
]

export function Differentiators() {
  return (
    <section
      aria-labelledby="differentiators-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="differentiators-heading"
              eyebrow="What Makes Ajay Different"
              title="A More Personal Way to Learn"
              description="Home tuition is only worth it when the teaching adapts to the learner. This is the working method behind every arrangement we set up."
            />
            <div className="relative mt-10 hidden overflow-hidden rounded-[1.5rem] lg:block">
              <Image
                src="/images/study-desk.png"
                alt="A study desk with an open notebook, textbooks and stationery ready for a tuition session"
                width={760}
                height={560}
                sizes="34vw"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </div>

          <ol className="flex flex-col gap-4">
            {points.map((point, index) => (
              <li
                key={point.title}
                className="relative flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/45 sm:gap-6 sm:p-8"
              >
                <span className="font-serif text-2xl leading-none font-semibold text-accent sm:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary sm:text-[1.4rem]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
