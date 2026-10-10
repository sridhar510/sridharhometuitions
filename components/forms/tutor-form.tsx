'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import {
  SelectField,
  TextareaField,
  TextField,
} from '@/components/forms/form-field'
import { Button } from '@/components/ui/button'
import { preferredDays, preferredTimes } from '@/lib/content'
import { buildWhatsAppMessage, openWhatsApp } from '@/lib/whatsapp'

const genders = ['Male', 'Female', 'Prefer not to say']

const experienceOptions = [
  'Fresher',
  'Less than 1 year',
  '1 – 3 years',
  '3 – 5 years',
  '5 – 10 years',
  'More than 10 years',
]

export function TutorForm() {
  const [sent, setSent] = useState(false)
  const [values, setValues] = useState({
    fullName: '',
    mobile: '',
    email: '',
    gender: '',
    qualification: '',
    experience: '',
    subjects: '',
    classes: '',
    boards: '',
    areas: '',
    languages: '',
    days: '',
    timings: '',
    info: '',
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

    const message = buildWhatsAppMessage('Tutor Application', [
      { label: 'Full Name', value: values.fullName },
      { label: 'Mobile Number', value: values.mobile },
      { label: 'Email', value: values.email },
      { label: 'Gender', value: values.gender },
      { label: 'Qualification', value: values.qualification },
      { label: 'Teaching Experience', value: values.experience },
      { label: 'Subjects', value: values.subjects },
      { label: 'Classes', value: values.classes },
      { label: 'Boards', value: values.boards },
      { label: 'Preferred Service Areas', value: values.areas },
      { label: 'Languages', value: values.languages },
      { label: 'Available Days', value: values.days },
      { label: 'Available Timings', value: values.timings },
      { label: 'Additional Information', value: values.info },
    ])

    openWhatsApp(message)
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="tutor-form-heading"
      className="rounded-[1.5rem] border border-border bg-card p-6 sm:p-8"
    >
      <h2
        id="tutor-form-heading"
        className="font-serif text-2xl font-semibold text-primary"
      >
        Tutor Application Form
      </h2>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        Tell us what you teach, where you can travel and when you are free.
        Submitting opens WhatsApp with your details ready to send.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <TextField
          id="fullName"
          label="Full Name"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={values.fullName}
          onChange={update('fullName')}
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
          id="gender"
          label="Gender"
          options={genders}
          placeholder="Select an option"
          value={values.gender}
          onChange={update('gender')}
        />
        <TextField
          id="qualification"
          label="Qualification"
          required
          placeholder="e.g. B.Sc Mathematics, B.Ed"
          value={values.qualification}
          onChange={update('qualification')}
        />
        <SelectField
          id="experience"
          label="Teaching Experience"
          required
          options={experienceOptions}
          placeholder="Select experience"
          value={values.experience}
          onChange={update('experience')}
        />
        <TextField
          id="subjects"
          label="Subjects"
          required
          placeholder="e.g. Mathematics, Physics, Chemistry"
          value={values.subjects}
          onChange={update('subjects')}
        />
        <TextField
          id="classes"
          label="Classes"
          required
          placeholder="e.g. Classes 6 to 10, Intermediate MPC"
          value={values.classes}
          onChange={update('classes')}
        />
        <TextField
          id="boards"
          label="Boards"
          placeholder="e.g. CBSE, Telangana State Board"
          value={values.boards}
          onChange={update('boards')}
        />
        <TextField
          id="languages"
          label="Languages"
          placeholder="e.g. English, Telugu, Hindi"
          value={values.languages}
          onChange={update('languages')}
        />
        <SelectField
          id="days"
          label="Available Days"
          options={preferredDays}
          placeholder="Select available days"
          value={values.days}
          onChange={update('days')}
        />
        <SelectField
          id="timings"
          label="Available Timings"
          options={preferredTimes}
          placeholder="Select available timings"
          value={values.timings}
          onChange={update('timings')}
        />
        <TextareaField
          id="areas"
          label="Preferred Service Areas"
          className="sm:col-span-2"
          rows={3}
          placeholder="Which localities can you travel to? e.g. Vanasthalipuram, Hayathnagar, LB Nagar, Nagole"
          value={values.areas}
          onChange={update('areas')}
        />
        <TextareaField
          id="info"
          label="Additional Information"
          className="sm:col-span-2"
          rows={3}
          placeholder="Previous teaching experience, availability constraints, own transport, anything else relevant."
          value={values.info}
          onChange={update('info')}
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
          WhatsApp should have opened in a new tab with your application. If it
          did not, please call us and we will take the details over the phone.
        </p>
      ) : null}
    </form>
  )
}
