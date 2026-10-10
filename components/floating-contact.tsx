import { Phone } from 'lucide-react'
import { telHref, whatsappHref } from '@/lib/site-config'

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.966 1.164-.198.199-.396.223-.693.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.347-.446.52-.669.174-.223.232-.373.347-.596.116-.223.058-.446-.058-.669-.116-.223-.99-2.383-1.354-3.257-.363-.874-.734-.883-.99-.883h-.66c-.297 0-.594.075-.891.372-.297.298-1.139 1.117-1.139 2.723 0 1.607 1.163 3.157 1.32 3.38.157.223 2.28 3.5 5.526 4.907.771.334 1.373.533 1.843.68.79.252 1.508.216 2.076.131.634-.095 1.462-.607 1.669-1.19.206-.583.206-1.084.144-1.19-.062-.106-.223-.166-.52-.315M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.82 9.82 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L0 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.82 11.82 0 0 0 20.463 3.488" />
    </svg>
  )
}

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ajay Home Tuitions on WhatsApp"
        className="group relative flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-primary/25 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" />
        <WhatsAppGlyph className="relative size-6" />
      </a>
      <a
        href={telHref}
        aria-label="Call Ajay Home Tuitions"
        className="flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95"
      >
        <Phone className="size-5" />
      </a>
    </div>
  )
}
