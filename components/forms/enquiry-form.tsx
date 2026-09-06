'use client'

import { CheckCircle2, MessageCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  SelectField,
  TextareaField,
  TextField,
} from '@/components/forms/form-field'
import { Button } from '@/components/ui/button'
import {
  boards,
  classOptions,
  preferredDays,
  preferredTimes,
  serviceZones,
} from '@/lib/content'
import { buildWhatsAppMessage, openWhatsApp } from '@/lib/whatsapp'

const areaOptions = [...serviceZones.map((zone) => zone.name), 'Other area']

export function EnquiryForm() {
  const searchParams = useSearchParams()
  const areaParam = searchParams.get('area') ?? ''
  const [sent, setSent] = useState(false)

  const [values, setValues] = useState({
    name: '',
    mobile: '',
    studentClass: '',
    board: '',
    subjects: '',
    area: '',
    days: '',
    time: '',
    requirement: '',
    message: '',
  })

  // Auto-fill Preferred Area from the ?area= query parameter,
  // e.g. /contact?area=Kushaiguda coming from the Service Zone Explorer.
  useEffect(() => {
    if (!areaParam) return

    const decoded = areaParam.trim()
    const matched = areaOptions.find(
      (option) => option.toLowerCase() === decoded.toLowerCase(),
    )

    setValues((previous) => ({
      ...previous,
      area: matched ?? 'Other area',
      message:
        previous.message.length > 0 || matched
          ? previous.message
          : `Preferred area: ${decoded}`,
    }))
  }, [areaParam])

  function update(field: keyof typeof values) {
    return (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }))
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = buildWhatsAppMessage('New Tuition Enquiry', [
      { label: 'Parent / Student Name', value: values.name },
      { label: 'Mobile Number', value: values.mobile },
      { label: 'Class', value: values.studentClass },
      { label: 'Board', value: values.board },
      { label: 'Subjects', value: values.subjects },
      { label: 'Preferred Area', value: values.area },
      { label: 'Preferred Days', value: values.days },
      { label: 'Preferred Time', value: values.time },
      { label: 'Learning Requirement', value: values.requirement },
      { label: 'Message', value: values.message },
    ])

    openWhatsApp(message)
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="enquiry-form-heading"
      className="rounded-[1.5rem] border border-border bg-card p-6 sm:p-8"
    >
      <h2
        id="enquiry-form-heading"
        className="font-serif text-2xl font-semibold text-primary"
      >
        Tuition Enquiry Form
      </h2>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        Fill in what you know — the rest can be discussed on the call. Submitting
        opens WhatsApp with your details ready to send.
      </p>

      {areaParam ? (
        <p
          role="status"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-accent/30 bg-accent/8 p-4 text-sm text-foreground/85"
        >
          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
          <span>
            Preferred area filled in from your selection:{' '}
            <strong className="font-semibold text-primary">{areaParam}</strong>
          </span>
        </p>
      ) : null}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Parent / Student Name"
          required
          autoComplete="name"
          placeholder="Full name"
          value={values.name}
          onChange={update('name')}
        />
        <TextField
          id="mobile"
          label="Mobile Number"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\s-]{10,15}"
          placeholder="10-digit mobile number"
          value={values.mobile}
          onChange={update('mobile')}
        />
        <SelectField
          id="studentClass"
          label="Class"
          required
          options={classOptions}
          placeholder="Select class"
          value={values.studentClass}
          onChange={update('studentClass')}
        />
        <SelectField
          id="board"
          label="Board"
          options={boards}
          placeholder="Select board"
          value={values.board}
          onChange={update('board')}
        />
        <TextField
          id="subjects"
          label="Subjects"
          required
          placeholder="e.g. Mathematics, Science"
          value={values.subjects}
          onChange={update('subjects')}
        />
        <SelectField
          id="area"
          label="Preferred Area"
          required
          options={areaOptions}
          placeholder="Select your locality"
          value={values.area}
          onChange={update('area')}
        />
        <SelectField
          id="days"
          label="Preferred Days"
          options={preferredDays}
          placeholder="Select preferred days"
          value={values.days}
          onChange={update('days')}
        />
        <SelectField
          id="time"
          label="Preferred Time"
          options={preferredTimes}
          placeholder="Select preferred time"
          value={values.time}
          onChange={update('time')}
        />
        <TextareaField
          id="requirement"
          label="Learning Requirement"
          className="sm:col-span-2"
          placeholder="What does the student need help with? Which topics or subjects feel difficult right now?"
          value={values.requirement}
          onChange={update('requirement')}
        />
        <TextareaField
          id="message"
          label="Message"
          className="sm:col-span-2"
          rows={3}
          placeholder="Anything else we should know — schedule constraints, tutor preferences, exam dates."
          value={values.message}
          onChange={update('message')}
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-xs">
          Your details are sent only through your own WhatsApp — nothing is stored
          on this website.
        </p>
        <Button
          type="submit"
          size="lg"
          className="h-13 shrink-0 rounded-full bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90"
        >
          <MessageCircle className="size-4" />
          Send Enquiry on WhatsApp
        </Button>
      </div>

      {sent ? (
        <p
          role="status"
          className="mt-5 rounded-xl border border-border bg-secondary/60 p-4 text-sm leading-relaxed text-foreground/85"
        >
          WhatsApp should have opened in a new tab with your enquiry. If it did
          not, please call us directly and we will note the requirement over the
          phone.
        </p>
      ) : null}
    </form>
  )
}
