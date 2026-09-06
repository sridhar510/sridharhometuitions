'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
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
const tutorPreferences = ['No Preference', 'Male Tutor', 'Female Tutor']

export function ParentForm() {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({
    parentName: '',
    studentName: '',
    mobile: '',
    email: '',
    studentClass: '',
    board: '',
    subjects: '',
    area: '',
    days: '',
    time: '',
    tutorPreference: '',
    goals: '',
    notes: '',
  })

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

    const message = buildWhatsAppMessage('Home Tuition Requirement (Parent)', [
      { label: 'Parent Name', value: values.parentName },
      { label: 'Student Name', value: values.studentName },
      { label: 'Mobile Number', value: values.mobile },
      { label: 'Email', value: values.email },
      { label: 'Class', value: values.studentClass },
      { label: 'Board', value: values.board },
      { label: 'Subjects', value: values.subjects },
      { label: 'Preferred Area', value: values.area },
      { label: 'Preferred Days', value: values.days },
      { label: 'Preferred Time', value: values.time },
      { label: 'Tutor Preference', value: values.tutorPreference },
      { label: 'Learning Goals', value: values.goals },
      { label: 'Additional Notes', value: values.notes },
    ])

    openWhatsApp(message)
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="parent-form-heading"
      className="rounded-[1.5rem] border border-border bg-card p-6 sm:p-8"
    >
      <h2
        id="parent-form-heading"
        className="font-serif text-2xl font-semibold text-primary"
      >
        Tutor Requirement Form
      </h2>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        The more detail you give, the better we can shortlist. Submitting opens
        WhatsApp with everything filled in.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <TextField
          id="parentName"
          label="Parent Name"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={values.parentName}
          onChange={update('parentName')}
        />
        <TextField
          id="studentName"
          label="Student Name"
          required
          placeholder="Student's full name"
          value={values.studentName}
          onChange={update('studentName')}
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
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          value={values.email}
          onChange={update('email')}
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
          placeholder="e.g. Mathematics, Physics"
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
        <SelectField
          id="tutorPreference"
          label="Tutor Preference"
          options={tutorPreferences}
          placeholder="Select a preference"
          hint="We consider preferences while shortlisting and tell you if one is hard to meet in your area."
          value={values.tutorPreference}
          onChange={update('tutorPreference')}
        />
        <TextareaField
          id="goals"
          label="Learning Goals"
          className="sm:col-span-2"
          placeholder="What would you like to see improve? e.g. finish maths sums without help, write complete answers within the time limit."
          value={values.goals}
          onChange={update('goals')}
        />
        <TextareaField
          id="notes"
          label="Additional Notes"
          className="sm:col-span-2"
          rows={3}
          placeholder="Schedule constraints, exam dates, teaching language, anything else we should know."
          value={values.notes}
          onChange={update('notes')}
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
          WhatsApp should have opened in a new tab with your requirement. If it
          did not, please call us and we will note it over the phone.
        </p>
      ) : null}
    </form>
  )
}
