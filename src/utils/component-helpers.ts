import { type ClassValue, clsx } from 'clsx';
import { type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface PropsWithChildrenAndClassName extends PropsWithChildren {
  className?: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
