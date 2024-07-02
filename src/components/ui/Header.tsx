import { twJoin } from 'tailwind-merge';

import portraitImg from '@/assets/self-portrait.png';

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={twJoin(
        'mb-1 flex w-[450px] select-none flex-col items-center scale-[.65] md:mb-10 md:mt-16 md:scale-100 lg:mt-0 max_md:h-[340px]',
        className
      )}
    >
      <img
        src={portraitImg}
        width={400}
        height={351}
        className="m-0 rounded-xl border-b-4 border-b-[#39803d]/80 drop-shadow-[0_15px_15px_#40d7f6]"
      />
      <div
        className={twJoin(
          'mt-[-56px] whitespace-nowrap text-8xl font-bold antialiased -skew-x-12',
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
