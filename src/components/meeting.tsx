import Image from 'next/image'
import AppearOnScroll from './appear-on-scroll'
import { RotatingText } from './ui/shadcn-io/rotating-text'

export default function Meeting() {
  return (
    <AppearOnScroll
      className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between mt-31 md:mt-40"
      amount={0.2}>
      <div className="flex flex-col text-center md:text-left gap">
        <div>
          <h2 className="text-3xl sm:text-2xl-4xl lg:text-5xl font-semibold leading-[110%]">
            Ivaan Connect All Your
            <span className="block sm:inline md:block lg:inline xl:block">
              {' '}
              Meeting Contexts
            </span>
          </h2>
          <p className="text-base md:text-lg mt-4 lg:mt-8 text-white/70 text-center md:text-left">
            Every detail, from every source unified.
          </p>
        </div>

        <RotatingText
          text={['Which meeting?', 'What to do next?', 'What was discussed?']}
          duration={3000}
          className="text-3xl md:text-2xl lg:text-[32px] font-semibold mt-24 xl:mt-36 2xl:mt-mt-44"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="mt-23 md:mt-4">
        <Image
          src="/images/meeting.webp"
          alt="Meeting Image"
          width={480}
          height={480}
          className="rounded-4xl h-[278px] sm:w-full sm:max-h-[320px] mx-auto md:h-full md:w-[278px] lg:w-[480px] lg:max-h-[480px] object-cover"
        />
      </div>
    </AppearOnScroll>
  )
}
