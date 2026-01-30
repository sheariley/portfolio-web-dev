import { twJoin } from 'tailwind-merge';

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={twJoin(
        'my-2 flex w-112.5 select-none flex-col items-center scale-[.65] md:mb-10 md:mt-16 md:scale-100 lg:mt-0',
        className
      )}
    >
      <div
        className={twJoin(
          'whitespace-nowrap text-8xl font-bold antialiased -skew-x-12',
          'bg-linear-to-b from-gray-500 from-40% via-gray-300 via-60% to-primary to-80% bg-clip-text text-transparent',
          'before:absolute before:-bottom-1 before:block before:h-4 before:w-full before:bg-primary before:blur-lg',
          'text-primary-content'
        )}
      >
        Shea Riley
      </div>
      <div
        className={twJoin(
          'relative bottom-5 right-2 inline-block whitespace-nowrap rounded-md bg-primary/30 border-b-2 border-b-primary/10 border-opacity-20 px-1 text-xl leading-7 backdrop-blur-[7px]',
          'text-primary-content'
        )}
      >
        Software Engineer and Front-end Architect
      </div>
    </header>
  );
}
