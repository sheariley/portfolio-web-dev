import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'

export type NavMenuItemIconProps = {
  icon: IconDefinition
}

// FA icon wrapper to add a bit of styling
export default function NavMenuItemIcon({ icon }: NavMenuItemIconProps) {
  return (
    <span className="min-w-5 text-center">
      <Icon icon={icon} size="sm" />
    </span>
  )
}
