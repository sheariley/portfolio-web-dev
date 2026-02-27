import Link from 'next/link'
import React, {
  type ComponentPropsWithRef,
  type PropsWithChildren,
  type Ref,
  type RefAttributes
} from 'react'

import { cn, type ThemeColor } from '@/lib/utils'

export type ButtonDisplayType = 'default' | 'link' | 'outline'

export type ButtonWidthType = 'default' | 'square' | 'wide' | 'block'

export type ButtonSize = 'default' | 'xs' | 'sm' | 'lg'

type ButtonIconProps = {
  icon?: React.ReactNode | null
  iconAfterText?: boolean
}

type ComponentSpecificProps = {
  displayType?: ButtonDisplayType
  widthType?: ButtonWidthType
  themeColor?: 'default' | ThemeColor | 'ghost'
  active?: boolean
  size?: ButtonSize
  className?: string | undefined
  children?: React.ReactNode | undefined
}

type ButtonSpecificProps = ComponentPropsWithRef<'button'>

type LinkSpecificProps = ComponentPropsWithRef<typeof Link>

export type RegularButtonProps = ComponentSpecificProps & ButtonIconProps & ButtonSpecificProps

export type LinkButtonProps = ComponentSpecificProps & ButtonIconProps & LinkSpecificProps

export type ButtonComponentProps = RegularButtonProps | LinkButtonProps

const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement | typeof Link,
  ButtonComponentProps
>(function renderButton(
  { className, displayType, widthType, themeColor, active, size, ...props },
  ref
) {
  const classes = getClassNameFromProps({
    displayType,
    widthType,
    themeColor,
    active,
    size,
    className
  })

  if (isLinkSpecificProps(props)) {
    return (
      <LinkButton
        ref={ref as Ref<HTMLAnchorElement | typeof Link>}
        className={classes}
        {...props}
      />
    )
  }

  return (
    <RegularButton
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      {...(props as Omit<ButtonSpecificProps, 'ref' | 'className'>)}
    />
  )
})

export default Button

const RegularButton = React.forwardRef<HTMLButtonElement, ButtonSpecificProps & ButtonIconProps>(
  function renderRegularButton(
    { children, icon, iconAfterText, ...props }: ButtonSpecificProps & ButtonIconProps,
    ref
  ) {
    return (
      <button ref={ref as Ref<HTMLButtonElement>} {...props}>
        <ButtonChildrenWrapper icon={icon} iconAfterText={iconAfterText}>
          {children}
        </ButtonChildrenWrapper>
      </button>
    )
  }
)

const LinkButton = React.forwardRef<
  HTMLAnchorElement | typeof Link,
  LinkSpecificProps & ButtonIconProps
>(function renderLinkButton(
  { children, icon, iconAfterText, ...props }: LinkSpecificProps & ButtonIconProps,
  ref
) {
  return (
    <Link ref={ref as RefAttributes<HTMLAnchorElement>['ref']} {...props}>
      <ButtonChildrenWrapper icon={icon} iconAfterText={iconAfterText}>
        {children}
      </ButtonChildrenWrapper>
    </Link>
  )
})

function ButtonChildrenWrapper({
  iconAfterText,
  children,
  ...props
}: PropsWithChildren<ButtonIconProps>) {
  return (
    <>
      {!iconAfterText && <ButtonIconWrapper {...props} />}
      {!!React.Children.count(children) && (
        <span className="btn-wrapped-content inline-block content-center items-center">
          {children}
        </span>
      )}
      {!!iconAfterText && <ButtonIconWrapper {...props} />}
    </>
  )
}

function ButtonIconWrapper({ icon }: ButtonIconProps) {
  return (
    !!icon && (
      <span className="inline-flex min-w-5 items-center justify-center justify-items-center">
        {icon}
      </span>
    )
  )
}

function isLinkSpecificProps(props: ButtonComponentProps): props is LinkSpecificProps {
  return typeof props === 'object' && 'href' in props
}

function getClassNameFromProps({
  displayType,
  widthType,
  themeColor,
  active,
  size,
  className
}: ComponentSpecificProps) {
  return cn(
    'btn inline-flex flex-row items-center content-center justify-items-center leading-tight',
    size && size !== 'default' && ButtonSizeClasses[size],
    active && 'btn-active',
    displayType && displayType !== 'default' && ButtonDisplayTypeClasses[displayType],
    widthType && widthType !== 'default' && ButtonWidthTypeClasses[widthType],
    themeColor && themeColor !== 'default' && ButtonThemeColorClasses[themeColor],
    className
  )
}

// These class mappings are required because TailwindCSS does not support dynamic class names in a straightforward way.
// It scans the code for class names at build time, so we need to define them explicitly here to ensure they are
// included in the final CSS bundle. This allows us to use these classes dynamically based on the props passed to the
// component.
const ButtonThemeColorClasses = {
  default: 'btn-default',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  neutral: 'btn-neutral',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost'
}

const ButtonDisplayTypeClasses = {
  default: '', // Default size, no class needed
  link: 'btn-link',
  outline: 'btn-outline'
}

const ButtonWidthTypeClasses = {
  default: '', // Default size, no class needed
  square: 'btn-square',
  wide: 'btn-wide',
  block: 'btn-block'
}

const ButtonSizeClasses = {
  default: '', // Default size, no class needed
  xs: 'btn-xs',
  sm: 'btn-sm',
  lg: 'btn-lg'
}
