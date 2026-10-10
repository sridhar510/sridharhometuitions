import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { FaqStructuredData } from '@/components/faq-accordion'
import { AcademicLevels } from '@/components/home/academic-levels'
import { AreasPreview } from '@/components/home/areas-preview'
import { Differentiators } from '@/components/home/differentiators'
import { FaqPreview } from '@/components/home/faq-preview'
import { Hero } from '@/components/home/hero'
import { LearningModel } from '@/components/home/learning-model'
import { MatchingProcess } from '@/components/home/matching-process'
import { ParentFeedback } from '@/components/home/parent-feedback'
import { ServicesPreview } from '@/components/home/services-preview'
import { ValuePanel } from '@/components/home/value-panel'
import { LocationMap } from '@/components/location-map'
import { faqs } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `${siteConfig.name} | Home Tuition in Vanasthalipuram, Hyderabad`,
  description:
    'Ajay Home Tuitions connects Hyderabad families with focused in-home academic support for school, intermediate, and selected degree subjects.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <FaqStructuredData items={faqs.slice(0, 5)} />
      <Hero />
      <ValuePanel />
      <Differentiators />
      <LearningModel />
      <ServicesPreview />
      <AcademicLevels />
      <AreasPreview />
      <LocationMap
        id="home-map"
        showDetails
        description="We are based at Flat Number 301, Sharada Nagar, Sai Nagar, Shanti Nagar, Vanasthalipuram, Hyderabad, and serve nearby localities subject to tutor availability."
      />
      <MatchingProcess />
      <ParentFeedback />
      <FaqPreview />
      <ContactSection />
    </>
  )
}
