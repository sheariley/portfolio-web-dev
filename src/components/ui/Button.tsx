import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentPropsWithRef, LegacyRef, Ref, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classnames from 'classnames';

export type ButtonThemeColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost';

export type ButtonDisplayType = 'default' | 'link' | 'outline';

export type ButtonWidthType = 'default' | 'square' | 'wide' | 'block';

export type ButtonSize = 'default' | 'xs' | 'sm' | 'lg';

type ComponentSpecificProps = {
  icon?: IconProp;
  iconSize?: SizeProp;
  displayType?: ButtonDisplayType;
  widthType?: ButtonWidthType;
  themeColor?: ButtonThemeColor;
  active?: boolean;
  size?: ButtonSize;
};

export type ButtonSpecificProps = ComponentPropsWithRef<'button'> &
  ComponentSpecificProps;

export type AnchorSpecificProps = ComponentPropsWithRef<'a'> &
  ComponentSpecificProps;

export type LinkSpecificProps = LinkProps & ComponentSpecificProps;

export type ButtonComponentProps =
  | ButtonSpecificProps
  | AnchorSpecificProps
  | LinkSpecificProps;

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

function getClassNameFromProps(props: ButtonComponentProps) {
  const { displayType, widthType, themeColor, active, size, className } = props;
  return classnames(
    'btn',
    size && size !== 'default' && `btn-${size}`,
    active && 'btn-active',
    displayType && displayType !== 'default' && `btn-${displayType}`,
    widthType && widthType !== 'default' && `btn-${widthType}`,
    themeColor && themeColor !== 'default' && `btn-${themeColor}`,
    className
  );
}

function getIntrinsicProps<T>(
  props: AnchorSpecificProps | ButtonSpecificProps | LinkSpecificProps
): T {
  const intrinsicProps = { ...props };
  delete intrinsicProps.icon;
  delete intrinsicProps.iconSize;
  delete intrinsicProps.displayType;
  delete intrinsicProps.widthType;
  delete intrinsicProps.themeColor;
  delete intrinsicProps.active;
  delete intrinsicProps.size;
  delete intrinsicProps.className;
  return intrinsicProps as T;
}

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | typeof Link,
  ButtonComponentProps
>(function Button(props, ref) {
  const classes = getClassNameFromProps(props);

  if (isAnchorSpecificProps(props)) {
    const intrinsicProps = getIntrinsicProps<ComponentPropsWithRef<'a'>>(props);
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        className={classes}
        {...intrinsicProps}
      >
        {props.icon && (
          <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
        )}
        {props.children}
      </a>
    );
  }

  if (isLinkSpecificProps(props)) {
    const intrinsicProps = getIntrinsicProps<LinkProps>(props);
    return (
      <Link
        ref={ref as LegacyRef<HTMLAnchorElement>}
        className={classes}
        {...intrinsicProps}
      >
        {props.icon && (
          <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
        )}
        {props.children}
      </Link>
    );
  }

  const intrinsicProps =
    getIntrinsicProps<ComponentPropsWithRef<'button'>>(props);
  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      {...intrinsicProps}
    >
      {props.icon && (
        <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
      )}
      {props.children}
    </button>
  );
});

export default Button;
