import { twJoin } from 'tailwind-merge'

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={twJoin(
        'my-2 flex w-112.5 scale-[.65] flex-col items-center select-none md:mt-16 md:mb-10 md:scale-100 lg:mt-0',
        className
      )}
    >
      <div
        className={twJoin(
          '-skew-x-12 text-8xl font-bold whitespace-nowrap antialiased',
          'to-primary bg-linear-to-b from-gray-500 from-40% via-gray-300 via-60% to-80% bg-clip-text text-transparent',
          'before:bg-primary before:absolute before:-bottom-1 before:block before:h-4 before:w-full before:blur-lg',
          'text-primary-content'
        )}
      >
        Shea Riley
      </div>
      <div
        className={twJoin(
          'bg-primary/30 border-b-primary/10 border-opacity-20 relative right-2 bottom-5 inline-block rounded-md border-b-2 px-1 text-xl leading-7 whitespace-nowrap backdrop-blur-[7px]',
          'text-primary-content'
        )}
      >
        Software Engineer and Front-end Architect
      </div>
    </header>
  )
}
