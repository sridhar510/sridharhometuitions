import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function BrandLogo({
  className,
  size = 44,
  showWordmark = true,
  wordmarkClassName,
}: {
  className?: string
  size?: number
  showWordmark?: boolean
  wordmarkClassName?: string
}) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src={siteConfig.logo || '/placeholder.svg'}
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        priority
        className="h-auto w-auto object-contain"
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className={cn('flex flex-col leading-none', wordmarkClassName)}>
          <span className="font-serif text-[15px] font-semibold tracking-tight sm:text-base">
            Ajay <span className="text-accent">Home Tuitions</span>
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.16em] uppercase opacity-60">
            {siteConfig.shortLocation}
          </span>
        </span>
      )}
    </Link>
  )
}
