'use client'

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
import React from 'react'

import { cn, ExternalLinkUrls } from '@/lib/utils'
import Button from './Button'
import Header from './Header'
import NavMenu from './NavMenu'

export type NavDrawerContainerProps = React.ComponentProps<'div'>

export default function NavDrawerContainer({
  children,
  className,
  ...props
}: NavDrawerContainerProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  function handleDrawerClose() {
    setDrawerOpen(false)
    document.body.scrollIntoView()
  }

  function handleDrawerOpen() {
    setDrawerOpen(true)
  }

  return (
    <div className={cn('drawer lg:drawer-open', className)} {...props}>
      <input
        id="nav-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => {}}
      />
      <div className="drawer-content flex flex-col items-center p-2 pt-4 md:px-6 lg:p-8">
        {!drawerOpen && (
          <div className="border-base-300 bg-base-100 fixed top-0 left-0 z-50 flex w-full justify-start border-b p-1 lg:hidden">
            <Button
              aria-label="open sidebar"
              widthType="square"
              size="sm"
              themeColor="ghost"
              icon={faBars}
              iconSize="2x"
              onClick={handleDrawerOpen}
            />
          </div>
        )}
        <Header />
        <main className="container-main container mx-auto px-4 pb-16 md:px-6 lg:px-8">
          <div className="layout-content">{children}</div>
        </main>
      </div>
      <div className="drawer-side shadow-xl shadow-black">
        <label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay lg:hidden"
          onClick={handleDrawerClose}
        ></label>
        <div className="border-base-100/30 bg-base-100 text-base-content relative flex min-h-full w-48 flex-col border-r-2 p-1 backdrop-blur-xl max-lg:pt-8">
          <Button
            aria-label="close sidebar"
            className="absolute top-2 right-2 lg:hidden"
            widthType="square"
            size="sm"
            themeColor="ghost"
            icon={faSquareCaretLeft}
            iconSize="2x"
            onClick={handleDrawerClose}
          />
          <NavMenu
            onItemClick={handleDrawerClose}
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
          />
        </div>
      </div>
    </div>
  )
}
