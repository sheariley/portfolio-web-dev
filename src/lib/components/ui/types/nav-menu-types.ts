import { type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { type MouseEvent } from 'react'
import Link from 'next/link'

export type NavMenuItemBase = {
  label: string
  icon: IconDefinition
  onClick?(event: MouseEvent<HTMLAnchorElement>): void
}

export type NavMenuRouteItem = NavMenuItemBase & {
  path: string
}

export type NavMenuLinkItem = NavMenuItemBase & {
  href: string
  target?: string
  download?: boolean
}

export type NavMenuItem = NavMenuRouteItem | NavMenuLinkItem

export type NavMenuProps = {
  menuItems: NavMenuItem[]
  onItemClick?(event: MouseEvent<HTMLAnchorElement>): void
}

export type NavLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  to: string
}

export type NavMenuItemIconProps = {
  icon: IconDefinition
}

export function isNavMenuLinkItem(item: NavMenuItem): item is NavMenuLinkItem {
  return 'href' in item
}
