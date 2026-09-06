import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { FloatingContact } from '@/components/floating-contact'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Home Tuition in Renuka Colony, Sivaji Nagar, Aliabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Sridhar Home Tuitions provides personalized home tuition and academic support in Renuka Colony and nearby Hyderabad localities.',
  applicationName: siteConfig.name,
  generator: 'v0.app',
  keywords: [
    'home tuition Renuka Colony',
    'home tutor Hyderabad',
    'home tuition Sivaji Nagar',
    'home tuition Aliabad Hyderabad',
    'home tutor Renuka Colony',
    'CBSE home tuition Hyderabad',
    'Telangana State Board tuition',
    'Sridhar Home Tuitions',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Home Tuition in Renuka Colony, Sivaji Nagar, Aliabad`,
    description:
      'Patient one-to-one home tuition from Renuka Colony, Sivaji Nagar and Aliabad for families across nearby Hyderabad localities.',
    images: [{ url: siteConfig.logo, width: 1250, height: 1250, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Home Tuition in Renuka Colony, Sivaji Nagar, Aliabad`,
    description:
      'Patient one-to-one home tuition from Renuka Colony, Sivaji Nagar and Aliabad for families across nearby Hyderabad localities.',
    images: [siteConfig.logo],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2a52',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${siteConfig.url}#organization`,
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description:
    'Home tuition service offering one-to-one academic support for school, intermediate and degree students in Renuka Colony and nearby Hyderabad localities.',
  url: siteConfig.url,
  telephone: `+91${siteConfig.phone}`,
  image: `${siteConfig.url}${siteConfig.logo}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Renuka Colony, Sivaji Nagar, Aliabad',
    addressLocality: 'Renuka Colony, Sivaji Nagar, Aliabad, Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500053',
    addressCountry: 'IN',
  },
  areaServed: [
    'Renuka Colony',
    'Sivaji Nagar',
    'Aliabad',
    'Chintalakunta',
    'NGO Colony',
    'Bairamalguda',
    'LB Nagar',
    'Mansoorabad',
    'Saroornagar',
    'Kothapet',
    'Dilsukhnagar',
    'Chaitanyapuri',
    'Karmanghat',
    'Meerpet',
    'Almasguda',
  ].map((name) => ({ '@type': 'Place', name })),
  hasMap: siteConfig.mapUrl,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
