import { twMerge } from 'tailwind-merge';

import { PropsWithChildrenAndClassName } from '@/utils';

function CardBody({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <article className={twMerge('card-body', className)}>{children}</article>
  );
}

function CardTitle({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <div
      className={twMerge(
        'card-title mb-4 border-b-2 border-slate-400 border-opacity-20 text-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}

function CardActions({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <footer className={twMerge('card-actions justify-end', className)}>
      {children}
    </footer>
  );
}

export default function Card({
  children,
  className
}: PropsWithChildrenAndClassName) {
  return (
    <div
      className={twMerge(
        'card break-inside-avoid bg-info/10 shadow-md shadow-black backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Actions = CardActions;
