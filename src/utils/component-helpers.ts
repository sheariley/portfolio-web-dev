import { PropsWithChildren } from 'react';

export interface PropsWithChildrenAndClassName extends PropsWithChildren {
  className?: string;
}
