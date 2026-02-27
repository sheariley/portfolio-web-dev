import './globals.css'

import {
  faBars,
  faBook,
  faBusinessTime,
  faCertificate,
  faCode,
  faFileText,
  faHome,
  faLink,
  faSquareCaretLeft
} from '@fortawesome/free-solid-svg-icons'
import type { Metadata, Viewport } from 'next'

import Icon from '@/lib/components/ui/Icon'
import NavDrawerContainer from '@/lib/components/ui/NavDrawerContainer'
import NavMenuItemIcon from '@/lib/components/ui/NavMenuItemIcon'
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
            openMenuIcon={<Icon icon={faBars} size="2x" />}
            closeMenuIcon={<Icon icon={faSquareCaretLeft} size="2x" />}
            menuItems={[
              {
                label: 'Home',
                path: '/',
                icon: <NavMenuItemIcon icon={faHome} />
              },
              {
                label: 'Skills',
                path: '/skills',
                icon: <NavMenuItemIcon icon={faBook} />
              },
              {
                label: 'Experience',
                path: '/experience',
                icon: <NavMenuItemIcon icon={faBusinessTime} />
              },
              {
                label: 'Certifications',
                path: '/certifications',
                icon: <NavMenuItemIcon icon={faCertificate} />
              },
              {
                label: 'Links',
                path: '/links',
                icon: <NavMenuItemIcon icon={faLink} />
              },
              {
                label: 'Resume',
                href: '/resume.pdf',
                download: true,
                icon: <NavMenuItemIcon icon={faFileText} />
              },
              {
                label: 'Site Source',
                href: ExternalLinkUrls.Source,
                target: '_blank',
                icon: <NavMenuItemIcon icon={faCode} />
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
