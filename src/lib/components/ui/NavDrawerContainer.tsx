'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import Button from './Button'
import Header from './Header'
import NavMenu from './NavMenu'
import { NavMenuItem } from './types/nav-menu-types'

export type NavDrawerContainerProps = React.ComponentProps<'div'> & {
  // TODO: Add default SVC icons for the open/close icon options and make these props optional when promoting
  openMenuIcon: React.ReactNode
  closeMenuIcon: React.ReactNode
  menuItems: NavMenuItem[]
}

export default function NavDrawerContainer({
  openMenuIcon,
  closeMenuIcon,
  menuItems,
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
              icon={openMenuIcon}
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
            icon={closeMenuIcon}
            onClick={handleDrawerClose}
          />
          <NavMenu onItemClick={handleDrawerClose} menuItems={menuItems} />
        </div>
      </div>
    </div>
  )
}
