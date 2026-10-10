import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { services } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Service Zones', href: '/services-zones' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const engageLinks = [
  { label: 'Find a Tutor', href: '/join-parent' },
  { label: 'Join as Tutor', href: '/join-tutor' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <BrandLogo size={52} wordmarkClassName="text-primary" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A local tutoring service helping students build subject confidence through focused instruction, practical routines, and supportive guidance.
            </p>
            <p className="mt-5 font-serif text-sm text-primary italic">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="text-xs font-semibold tracking-[0.16em] text-primary uppercase"
            >
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2
              id="footer-services"
              className="text-xs font-semibold tracking-[0.16em] text-primary uppercase"
            >
              Learning Support
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-more">
            <h2
              id="footer-more"
              className="text-xs font-semibold tracking-[0.16em] text-primary uppercase"
            >
              For Families & Tutors
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {engageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Home tuition services in {siteConfig.shortLocation} and nearby
            localities.
          </p>
        </div>
      </div>
    </footer>
  )
}
