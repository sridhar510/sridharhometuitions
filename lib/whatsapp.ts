import { siteConfig } from '@/lib/site-config'

export type EnquiryField = {
  label: string
  value: string
}

/**
 * Builds a readable WhatsApp message body from submitted form fields.
 * Empty values are skipped so the message stays clean.
 */
export function buildWhatsAppMessage(title: string, fields: EnquiryField[]) {
  const lines = fields
    .filter((field) => field.value.trim().length > 0)
    .map((field) => `${field.label}: ${field.value.trim()}`)

  return [`*${title}*`, '', ...lines].join('\n')
}

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${siteConfig.whatsappIntl}?text=${encodeURIComponent(message)}`

  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return url
}
