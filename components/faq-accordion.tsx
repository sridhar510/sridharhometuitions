import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export type FaqItem = { q: string; a: string }

export function FaqAccordion({
  items,
  className,
}: {
  items: readonly FaqItem[]
  className?: string
}) {
  return (
    <Accordion className={cn('gap-3', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.q}
          value={item.q}
          className="overflow-hidden rounded-2xl border border-border bg-card px-5 not-last:border-b sm:px-6"
        >
          <AccordionTrigger className="py-5 font-serif text-base leading-snug font-semibold text-primary hover:no-underline sm:text-lg **:data-[slot=accordion-trigger-icon]:mt-0.5 **:data-[slot=accordion-trigger-icon]:ml-4 **:data-[slot=accordion-trigger-icon]:text-accent">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function FaqStructuredData({ items }: { items: readonly FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
