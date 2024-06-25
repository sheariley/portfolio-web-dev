import { PropsWithChildren } from 'react';

export default function PageHeader({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-1 text-center">
      <span className="inline-block rounded-md backdrop-blur-sm">
        {children}
      </span>
    </h1>
  );
}
