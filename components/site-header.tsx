'use client'

import { Menu, Phone, UserPlus, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BrandLogo } from '@/components/brand-logo'
import { Button } from '@/components/ui/button'
import { navLinks, siteConfig, telHref } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40">
      {/* Slim brand strip */}
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
          <p className="tracking-[0.14em] uppercase opacity-80">
            {siteConfig.tagline}
          </p>
          <div className="flex items-center gap-6">
            <span className="opacity-80">{siteConfig.shortLocation}</span>
            <a
              href={telHref}
              className="flex items-center gap-1.5 font-medium text-accent transition-opacity hover:opacity-80"
            >
              <Phone className="size-3.5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'border-b transition-all duration-300',
          scrolled
            ? 'border-border bg-background/90 backdrop-blur-md'
            : 'border-transparent bg-background',
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <BrandLogo size={40} wordmarkClassName="text-primary" />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent transition-transform duration-200',
                      active ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="ghost"
              className="text-primary hover:bg-secondary"
            >
              <Link href="/join-tutor">Join as Tutor</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/join-parent">Find a Tutor</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-11 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        hidden={!open}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-border bg-background shadow-xl xl:hidden"
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between border-b border-border/60 py-3.5 text-base font-medium transition-colors',
                      active ? 'text-accent' : 'text-primary',
                    )}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-5 flex flex-col gap-2.5">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/join-parent">Find a Tutor</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/25 bg-transparent text-primary"
            >
              <Link href="/join-tutor">
                <UserPlus className="size-4" />
                Join as Tutor
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full text-primary"
            >
              <a href={telHref}>
                <Phone className="size-4" />
                Call {siteConfig.phone}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
