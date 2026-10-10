'use client'

import { ArrowRight, MapPin, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { serviceZones, type ZoneCategory } from '@/lib/content'
import { cn } from '@/lib/utils'

const filters: ('All Areas' | ZoneCategory)[] = [
  'All Areas',
  'Closest Areas',
  'Nearby Areas',
  'Extended Areas',
]

export function ZoneExplorer() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<(typeof filters)[number]>('All Areas')

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    return serviceZones.filter((zone) => {
      const matchesFilter = filter === 'All Areas' || zone.category === filter
      const matchesTerm = term.length === 0 || zone.name.toLowerCase().includes(term)
      return matchesFilter && matchesTerm
    })
  }, [query, filter])

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-[1.5rem] border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="zone-search"
            className="text-sm font-medium text-primary"
          >
            Search your locality
          </Label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="zone-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try Vanasthalipuram, LB Nagar, Hayathnagar…"
              autoComplete="off"
              className="h-12 w-full rounded-xl border-border bg-background pr-11 pl-11 text-base shadow-none focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/25 md:text-sm"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute top-1/2 right-3 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <X className="size-4" />
                <span className="sr-only">Clear search</span>
              </button>
            ) : null}
          </div>
        </div>

        <div>
          <p
            id="zone-filter-label"
            className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase"
          >
            Filter by distance
          </p>
          <div
            role="group"
            aria-labelledby="zone-filter-label"
            className="mt-3 flex flex-wrap gap-2"
          >
            {filters.map((option) => {
              const active = filter === option
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-primary hover:border-accent/50 hover:bg-secondary',
                  )}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted-foreground">
        {results.length === 0
          ? 'No matching locality in the list.'
          : `Showing ${results.length} ${results.length === 1 ? 'locality' : 'localities'}${
              filter === 'All Areas' ? '' : ` in ${filter.toLowerCase()}`
            }.`}
      </p>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((zone) => (
            <li
              key={zone.name}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/45"
            >
              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-accent"
                />
                <div className="min-w-0">
                  <h3 className="font-serif text-base leading-snug font-semibold break-words text-primary">
                    {zone.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {zone.category}
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-primary/20 bg-transparent text-sm text-primary hover:bg-secondary"
              >
                <Link href={`/contact?area=${encodeURIComponent(zone.name)}`}>
                  Check Availability
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            We may still be able to help. Send us your address and we will tell
            you honestly whether a tutor can reach it.
          </p>
          <Button
            asChild
            className="mt-5 rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">Ask About Your Area</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
