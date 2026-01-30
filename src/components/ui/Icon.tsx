import {
  FontAwesomeIcon,
  type FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';

export type IconProps = FontAwesomeIconProps;

// A wrapper to abstract the underlying component used to render icons for the app, in case we decide to change that later.
export default function Icon(props: FontAwesomeIconProps) {
  return <FontAwesomeIcon {...props} />;
}
