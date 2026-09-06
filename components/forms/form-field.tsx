'use client'

import { ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const controlClasses =
  'h-12 w-full rounded-xl border-border bg-card px-4 text-base text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/25 md:text-sm'

export function FieldShell({
  id,
  label,
  required,
  hint,
  className,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-accent">
              *
            </span>
            <span className="sr-only">(required)</span>
          </>
        ) : null}
      </Label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function TextField({
  id,
  label,
  required,
  hint,
  className,
  ...props
}: React.ComponentProps<'input'> & {
  id: string
  label: string
  hint?: string
}) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      hint={hint}
      className={className}
    >
      <Input
        id={id}
        name={id}
        required={required}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={controlClasses}
        {...props}
      />
    </FieldShell>
  )
}

export function SelectField({
  id,
  label,
  required,
  hint,
  options,
  placeholder = 'Select an option',
  className,
  ...props
}: React.ComponentProps<'select'> & {
  id: string
  label: string
  hint?: string
  options: readonly string[]
  placeholder?: string
}) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      hint={hint}
      className={className}
    >
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={cn(
            controlClasses,
            'appearance-none border pr-11 focus-visible:outline-none',
            'text-foreground',
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground"
        />
      </div>
    </FieldShell>
  )
}

export function TextareaField({
  id,
  label,
  required,
  hint,
  className,
  ...props
}: React.ComponentProps<'textarea'> & {
  id: string
  label: string
  hint?: string
}) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      hint={hint}
      className={className}
    >
      <Textarea
        id={id}
        name={id}
        required={required}
        rows={4}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className="w-full rounded-xl border-border bg-card px-4 py-3 text-base text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/25 md:text-sm"
        {...props}
      />
    </FieldShell>
  )
}
