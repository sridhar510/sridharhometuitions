import { Eyebrow } from '@/components/section-heading'
import { learningModel } from '@/lib/content'

export function LearningModel() {
  return (
    <section
      aria-labelledby="learning-model-heading"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="bg-grid-navy absolute inset-0 opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 size-80 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Learning Support Model</Eyebrow>
          <h2
            id="learning-model-heading"
            className="mt-5 font-serif text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            From Confusion to Clarity
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/70">
            Every session follows the same five movements. Repeated week after
            week, this is what turns scattered effort into steady progress.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-3">
          {learningModel.map((item, index) => (
            <li
              key={item.stage}
              className="relative flex flex-col rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.06] p-6 lg:pt-8"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 right-6 font-mono text-xs text-primary-foreground/35 lg:top-4 lg:right-4"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="flex size-9 items-center justify-center rounded-full bg-accent font-serif text-sm font-semibold text-accent-foreground">
                {index + 1}
              </span>

              <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">
                {item.stage}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/70">
                {item.body}
              </p>

              {index < learningModel.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-3 hidden h-px w-3 bg-accent/50 lg:block"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-xl text-sm leading-relaxed text-primary-foreground/55">
          The cycle repeats with each new topic — which is why understanding
          holds instead of fading before the next test.
        </p>
      </div>
    </section>
  )
}
