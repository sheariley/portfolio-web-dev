import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/lib/utils'
import {
  isNavMenuLinkItem,
  NavLinkProps,
  NavMenuItem,
  NavMenuItemIconProps,
  NavMenuProps
} from './types/nav-menu-types'

function NavMenuItemIcon({ icon }: NavMenuItemIconProps) {
  return (
    <span className="min-w-5 text-center">
      <FontAwesomeIcon icon={icon} />
    </span>
  )
}

function NavLink({ to, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to))

  return (
    <Link
      href={to}
      className={cn(isActive ? 'text-primary-content bg-primary' : 'text-base-content', className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export default function NavMenu({ menuItems, onItemClick }: NavMenuProps) {
  function handleItemClick(item: NavMenuItem, event: React.MouseEvent<HTMLAnchorElement>) {
    if (onItemClick) onItemClick(event)
    if (item.onClick) item.onClick(event)
  }

  return (
    <ul className="menu flex-1 space-y-3">
      {menuItems.map(item => {
        if (isNavMenuLinkItem(item)) {
          return (
            <li key={item.href}>
              <a
                href={item.href}
                download={item.download}
                target={item.target}
                onClick={handleItemClick.bind(null, item)}
              >
                <NavMenuItemIcon icon={item.icon} />
                {item.label}
              </a>
            </li>
          )
        }

        return (
          <li key={item.path}>
            <NavLink to={item.path} onClick={handleItemClick.bind(null, item)}>
              <NavMenuItemIcon icon={item.icon} />
              {item.label}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
