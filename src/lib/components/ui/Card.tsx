import { cn, type ThemeColor } from '@/lib/utils'
import { type ComponentProps } from 'react'

export type CardSize = 'card-xs' | 'card-sm' | 'card-md' | 'card-lg' | 'card-xl'
export type CardBorderStyle = 'card-border' | 'card-dash'
export type CardFigurePosition = 'card-side' | 'image-full'
export type CardThemeColor = ThemeColor | 'base'

export type CardProps = ComponentProps<'div'> & {
  size?: CardSize
  borderStyle?: CardBorderStyle
  figurePosition?: CardFigurePosition
  themeColor?: CardThemeColor
}

function CardBody({ children, className, ...props }: ComponentProps<'article'>) {
  return (
    <article {...props} className={cn('card-body p-0 pb-2 md:p-4 md:pb-4', className)}>
      {children}
    </article>
  )
}

function CardTitle({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('card-title pb-2', className)}>
      {children}
    </div>
  )
}

function CardActions({ children, className, ...props }: ComponentProps<'footer'>) {
  return (
    <footer {...props} className={cn('card-actions justify-end', className)}>
      {children}
    </footer>
  )
}

export default function Card({
  size = 'card-md',
  borderStyle,
  figurePosition,
  themeColor = 'base',
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        'card card-border space-y-2 divide-y-2 px-4 py-2',
        size,
        borderStyle,
        figurePosition,
        themeColor && CardThemeColorClasses[themeColor],
        'break-inside-avoid',
        className
      )}
    >
      {children}
    </div>
  )
}

Card.Body = CardBody
Card.Title = CardTitle
Card.Actions = CardActions

// These class mappings are required because TailwindCSS does not support dynamic class names in a straightforward way.
// It scans the code for class names at build time, so we need to define them explicitly here to ensure they are
// included in the final CSS bundle. This allows us to use these classes dynamically based on the props passed to the
// component.
const CardThemeColorClasses = {
  base: 'bg-base-100 text-base-content divide-base-300/30',
  primary: 'bg-primary text-primary-content divide-primary-content',
  secondary: 'bg-secondary text-secondary-content divide-secondary-content',
  accent: 'bg-accent text-accent-content divide-accent-content',
  neutral: 'bg-neutral text-neutral-content divide-neutral-content',
  info: 'bg-info text-info-content divide-info-content',
  success: 'bg-success text-success-content divide-success-content',
  warning: 'bg-warning text-warning-content divide-warning-content',
  error: 'bg-error text-error-content divide-error-content'
}
