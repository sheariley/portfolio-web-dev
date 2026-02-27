import './globals.css'

import {
  faBook,
  faBusinessTime,
  faCertificate,
  faCode,
  faFileText,
  faHome,
  faLink
} from '@fortawesome/free-solid-svg-icons'
import type { Metadata, Viewport } from 'next'

import NavDrawerContainer from '@/lib/components/ui/NavDrawerContainer'
import { ExternalLinkUrls } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Shea Riley - Full-Stack Software Engineer and Architect',
  description: "Shea Riley's Software Engineering Portfolio Website",
  icons: '/favicon.svg'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="prose max-w-none">
        <div id="modal-container"></div>
        <div id="root">
          <NavDrawerContainer
            menuItems={[
              {
                label: 'Home',
                path: '/',
                icon: faHome
              },
              {
                label: 'Skills',
                path: '/skills',
                icon: faBook
              },
              {
                label: 'Experience',
                path: '/experience',
                icon: faBusinessTime
              },
              {
                label: 'Certifications',
                path: '/certifications',
                icon: faCertificate
              },
              {
                label: 'Links',
                path: '/links',
                icon: faLink
              },
              {
                label: 'Resume',
                href: '/resume.pdf',
                download: true,
                icon: faFileText
              },
              {
                label: 'Site Source',
                href: ExternalLinkUrls.Source,
                target: '_blank',
                icon: faCode
              }
            ]}
          >
            {children}
          </NavDrawerContainer>
        </div>
      </body>
    </html>
  )
}
