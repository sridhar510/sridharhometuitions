import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { academicLevels, boards, subjects } from '@/lib/content'

export function AcademicLevels() {
  return (
    <section
      aria-labelledby="academic-levels-heading"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHeading
          id="academic-levels-heading"
          eyebrow="Academic Levels"
          title="Classes, Subjects and Boards We Cover"
          description="The teaching approach changes with the stage — early learners need habit and clarity, senior students need depth and exam discipline."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academicLevels.map((level) => (
            <li
              key={level.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <GraduationCap
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-accent"
              />
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {level.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {level.note}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Subjects
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <li key={subject}>
                  <Badge
                    variant="secondary"
                    className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary"
                  >
                    {subject}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground sm:p-8">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-primary-foreground/60 uppercase">
              Boards
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {boards.map((board) => (
                <li
                  key={board}
                  className="flex items-center gap-2.5 font-serif text-base font-medium"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {board}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
