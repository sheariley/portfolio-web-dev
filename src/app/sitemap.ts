import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shea-riley.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://shea-riley.com/experience',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://shea-riley.com/skills',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://shea-riley.com/links',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://shea-riley.com/website-screenshots/farm-hub-home-page-screenshot.jpg']
    },
    {
      url: 'https://shea-riley.com/certifications',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      images: [
        'https://shea-riley.com/cert-images/udemy-figma-ui-ux-design-essentials-2024.jpg',
        'https://shea-riley.com/cert-images/udemy-react-and-typescript-the-practical-guide.jpg',
        'https://shea-riley.com/cert-images/udemy-react-native-the-practical-guide-2024.jpg',
        'https://shea-riley.com/cert-images/udemy-react-the-complete-guide-2024.jpg'
      ]
    }
  ]
}
