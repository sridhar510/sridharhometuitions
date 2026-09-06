import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
  tone = 'accent',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'accent' | 'light'
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase',
        tone === 'accent' ? 'text-accent' : 'text-primary-foreground/70',
        className,
      )}
    >
      <span
        className={cn(
          'h-px w-8',
          tone === 'accent' ? 'bg-accent' : 'bg-primary-foreground/40',
        )}
      />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  id?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto flex max-w-2xl flex-col items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className="mt-5 max-w-2xl font-serif text-3xl leading-[1.12] font-semibold tracking-tight text-primary text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
