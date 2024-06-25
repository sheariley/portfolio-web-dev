import { twJoin } from 'tailwind-merge';

export default function Header() {
  return (
    <header className="mb-10 mt-5 flex w-[450px] select-none flex-col items-center scale-[.65] md:scale-100 max_lg:mt-8 max_md:mb-1">
      <div
        className={twJoin(
          'whitespace-nowrap text-8xl font-bold antialiased -skew-x-12',
          'bg-gradient-to-b from-primary-content from-50% to-info to-70% bg-clip-text text-transparent',
          'before:absolute before:-bottom-1 before:block before:h-4 before:w-full before:bg-info before:blur-lg',
          'text-primary-content'
        )}
      >
        Shea Riley
      </div>
      <div
        className={twJoin(
          'relative bottom-5 right-2 inline-block whitespace-nowrap rounded-md border-b-2 border-b-primary-content border-opacity-20 px-[2px] text-xl leading-7 backdrop-blur-[7px]',
          'text-primary-content'
        )}
      >
        Web Developer and Front-end Architect
      </div>
    </header>
  );
}
