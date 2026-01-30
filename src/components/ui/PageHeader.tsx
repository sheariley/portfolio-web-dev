import { type PropsWithChildrenAndClassName } from '@/utils';
import { twJoin } from 'tailwind-merge';

export default function PageHeader({
  className,
  children
}: PropsWithChildrenAndClassName) {
  return (
    <h1 className={twJoin('mb-1 text-center', className)}>
      <span className="inline-block rounded-md backdrop-blur-sm">
        {children}
      </span>
    </h1>
  );
}
