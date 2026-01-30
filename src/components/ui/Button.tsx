import { ThemeColor } from '@/utils';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import classnames from 'classnames';
import {
  Children,
  ComponentPropsWithRef,
  PropsWithChildren,
  Ref,
  RefAttributes,
  forwardRef
} from 'react';
import { Link } from 'react-router';
import Icon from './Icon';

export type ButtonDisplayType = 'default' | 'link' | 'outline';

export type ButtonWidthType = 'default' | 'square' | 'wide' | 'block';

export type ButtonSize = 'default' | 'xs' | 'sm' | 'lg';

type ButtonIconProps = {
  icon?: IconProp;
  iconSize?: SizeProp;
  iconAfterText?: boolean;
};

type ComponentSpecificProps = {
  displayType?: ButtonDisplayType;
  widthType?: ButtonWidthType;
  themeColor?: 'default' | ThemeColor | 'ghost';
  active?: boolean;
  size?: ButtonSize;
  className?: string | undefined;
  children?: React.ReactNode | undefined;
};

type ButtonSpecificProps = ComponentPropsWithRef<'button'>;

type LinkSpecificProps = ComponentPropsWithRef<typeof Link>;

type AnchorSpecificProps = ComponentPropsWithRef<'a'>;

export type RegularButtonProps = ComponentSpecificProps
  & ButtonIconProps
  & ButtonSpecificProps;

export type LinkButtonProps = ComponentSpecificProps
  & ButtonIconProps
  & LinkSpecificProps;

export type AnchorButtonProps = ComponentSpecificProps
  & ButtonIconProps
  & AnchorSpecificProps;

export type ButtonComponentProps =
  | RegularButtonProps
  | LinkButtonProps
  | AnchorButtonProps;

const Button = forwardRef<
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
  });

  if (isAnchorSpecificProps(props)) {
    return (
      <AnchorButton
        ref={ref as Ref<HTMLAnchorElement>}
        className={classes}
        {...props}
      />
    );
  }

  if (isLinkSpecificProps(props)) {
    return (
      <LinkButton
        ref={ref as Ref<HTMLAnchorElement | typeof Link>}
        className={classes}
        {...props}
      />
    );
  }

  return (
    <RegularButton
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      {...(props as Omit<ButtonSpecificProps, 'ref' | 'className'>)}
    />
  );
});

export default Button;

const RegularButton = forwardRef<
  HTMLButtonElement,
  ButtonSpecificProps & ButtonIconProps
>(function renderRegularButton(
  {
    children,
    icon,
    iconSize,
    iconAfterText,
    ...props
  }: ButtonSpecificProps & ButtonIconProps,
  ref
) {
  return (
    <button ref={ref as Ref<HTMLButtonElement>} {...props}>
      <ButtonChildrenWrapper
        icon={icon}
        iconSize={iconSize}
        iconAfterText={iconAfterText}
      >
        {children}
      </ButtonChildrenWrapper>
    </button>
  );
});

const AnchorButton = forwardRef<
  HTMLAnchorElement,
  AnchorSpecificProps & ButtonIconProps
>(function renderAnchorButton(
  {
    children,
    icon,
    iconSize,
    iconAfterText,
    ...props
  }: AnchorSpecificProps & ButtonIconProps,
  ref
) {
  return (
    <a ref={ref as RefAttributes<HTMLAnchorElement>['ref']} {...props}>
      <ButtonChildrenWrapper
        icon={icon}
        iconSize={iconSize}
        iconAfterText={iconAfterText}
      >
        {children}
      </ButtonChildrenWrapper>
    </a>
  );
});

const LinkButton = forwardRef<
  HTMLAnchorElement | typeof Link,
  LinkSpecificProps & ButtonIconProps
>(function renderLinkButton(
  {
    children,
    icon,
    iconSize,
    iconAfterText,
    ...props
  }: LinkSpecificProps & ButtonIconProps,
  ref
) {
  return (
    <Link ref={ref as RefAttributes<HTMLAnchorElement>['ref']} {...props}>
      <ButtonChildrenWrapper
        icon={icon}
        iconSize={iconSize}
        iconAfterText={iconAfterText}
      >
        {children}
      </ButtonChildrenWrapper>
    </Link>
  );
});

function ButtonChildrenWrapper({
  iconAfterText,
  children,
  ...props
}: PropsWithChildren<ButtonIconProps>) {
  return (
    <>
      {!iconAfterText && <ButtonIconWrapper {...props} />}
      {!!Children.count(children) && (
        <span className="btn-wrapped-content inline-block content-center items-center">
          {children}
        </span>
      )}
      {!!iconAfterText && <ButtonIconWrapper {...props} />}
    </>
  );
}

function ButtonIconWrapper({ icon, iconSize }: ButtonIconProps) {
  return (
    !!icon && (
      <span className="inline-flex min-w-5 place-items-center justify-center">
        <Icon icon={icon} size={iconSize} />
      </span>
    )
  );
}

function isAnchorSpecificProps(
  props: ButtonComponentProps
): props is AnchorSpecificProps {
  return typeof props === 'object' && 'href' in props;
}

function isLinkSpecificProps(
  props: ButtonComponentProps
): props is LinkSpecificProps {
  return typeof props === 'object' && 'to' in props;
}

function getClassNameFromProps({
  displayType,
  widthType,
  themeColor,
  active,
  size,
  className
}: ComponentSpecificProps) {
  return classnames(
    'not-[has-[&_.btn-wrapped-content]]:gap-x-0 btn inline-flex flex-row place-items-center content-center leading-none',
    size && size !== 'default' && ButtonSizeClasses[size],
    active && 'btn-active',
    displayType
      && displayType !== 'default'
      && ButtonDisplayTypeClasses[displayType],
    widthType && widthType !== 'default' && ButtonWidthTypeClasses[widthType],
    themeColor
      && themeColor !== 'default'
      && ButtonThemeColorClasses[themeColor],
    className
  );
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
};

const ButtonDisplayTypeClasses = {
  default: '', // Default size, no class needed
  link: 'btn-link',
  outline: 'btn-outline'
};

const ButtonWidthTypeClasses = {
  default: '', // Default size, no class needed
  square: 'btn-square',
  wide: 'btn-wide',
  block: 'btn-block'
};

const ButtonSizeClasses = {
  default: '', // Default size, no class needed
  xs: 'btn-xs',
  sm: 'btn-sm',
  lg: 'btn-lg'
};
