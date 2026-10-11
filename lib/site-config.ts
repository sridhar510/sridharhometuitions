export const siteConfig = {
  name: 'Sridhar Home Tuitions',
  tagline: 'Learn. Understand. Succeed.',
  url: 'https://sridharhometuitions.com',
  phone: '7416597027',
  whatsapp: '7416597027',
  whatsappIntl: '917416597027',
  email: 'sridharhometuitions30@gmail.com',
  address:
    'Renuka Colony, Sivaji Nagar, Aliabad, Hyderabad, Telangana 500053',
  addressLines: [
    'Renuka Colony, Sivaji Nagar,',
    'Aliabad, Hyderabad, Telangana 500053',
  ],
  shortLocation: 'Renuka Colony, Sivaji Nagar, Aliabad',
  mapLocation: '8FQF+M8 Hyderabad, Telangana',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=8FQF%2BM8%20Hyderabad%2C%20Telangana',
  mapEmbedUrl:
    'https://www.google.com/maps?q=8FQF%2BM8%20Hyderabad%2C%20Telangana&output=embed',
  logo: '/sridhar-home-tuitions.png',
} as const

export const telHref = `tel:+91${siteConfig.phone}`

export function whatsappHref(
  message = 'Hello Sridhar Home Tuitions, I would like to discuss a focused learning plan for my child.',
) {
  return `https://wa.me/${siteConfig.whatsappIntl}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Service Areas', href: '/services-zones' },
  { label: 'Locations', href: '/contact' },
] as const
