import { type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { type MouseEvent } from 'react'

import { cn } from '@/lib/utils'

type NavMenuItemBase = {
  label: string
  icon: IconDefinition
  onClick?(event: MouseEvent<HTMLAnchorElement>): void
}

type NavMenuRouteItem = NavMenuItemBase & {
  path: string
}

type NavMenuLinkItem = NavMenuItemBase & {
  href: string
  target?: string
  download?: boolean
}

type NavMenuItem = NavMenuRouteItem | NavMenuLinkItem

type NavMenuProps = {
  menuItems: NavMenuItem[]
  onItemClick?(event: MouseEvent<HTMLAnchorElement>): void
}

function isNavMenuLinkItem(item: NavMenuItem): item is NavMenuLinkItem {
  return 'href' in item
}

function NavMenuItemIcon({ icon }: { icon: IconDefinition }) {
  return (
    <span className="min-w-5 text-center">
      <FontAwesomeIcon icon={icon} />
    </span>
  )
}

type NavLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  to: string
}

function NavLink({ to, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));

  return (
    <Link
      href={to}
      className={cn(isActive ? 'text-primary font-semibold' : 'text-base-content', className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function NavMenu({ menuItems, onItemClick }: NavMenuProps) {
  function handleItemClick(item: NavMenuItem, event: MouseEvent<HTMLAnchorElement>) {
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
