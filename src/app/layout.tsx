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
    <>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
          />
        </head>
        <body className="prose max-w-none">
          <div id="modal"></div>
          <div id="root">
            <NavDrawerContainer>{children}</NavDrawerContainer>
          </div>
        </body>
      </html>
    </>
  )
}
