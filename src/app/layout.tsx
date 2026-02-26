import './globals.css'

import type { Metadata, Viewport } from 'next'

import NavDrawerContainer from '@/lib/components/ui/NavDrawerContainer'

export const metadata: Metadata = {
  title: 'Shea Riley - Full-Stack Software Engineer and Architect',
  description: "Shea Riley's Software Engineering Portfolio Website"
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
          <NavDrawerContainer>{children}</NavDrawerContainer>
        </div>
      </body>
    </html>
  )
}
