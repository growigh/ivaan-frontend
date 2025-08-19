import Image from 'next/image'
import { Button } from './ui/button'

export default function BetterMeeting() {
  return (
    <section className="container mx-auto mt-30 md:mt-40 px-6 lg:px-20">
      <h2 className="text-primary text-4xl md:text-[40px] md:tracking-[2%] font-semibold text-center md:text-left">
        Everything You Need for Better Meetings
      </h2>
      <p className="text-base md:text-xl text-white/75 mt-4 text-center md:text-left">
        Features built for clarity, speed, and smarter outcomes.
      </p>

      <div className="flex mt-26">
        <div></div>

        <div className="inline-block">
          <p className="text-[28px] md:text-[32px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            High Quality
            <span className="text-white/90 md:block"> Notes</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75 pr-4">
            Only the details that matter, perfectly captured.
          </p>
          <Button className='mt-8'>Join the Waitlist</Button>
        </div>
      </div>

      <div className="mt-40">
        <div className="inline-block self-center">
          <p className="text-[28px] md:text-[32px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Accurate
            <span className="text-white/90 md:block"> Transcripts</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75">
            Every word, captured and crystal clear.
          </p>
          <Button className='mt-8'>Get early Access</Button>
        </div>

        <div></div>
      </div>

      <div className="flex flex-col md:flex-row mt-40 gap-16 md:gap-0 lg:gap-20">
        <div className="flex-[60%] lg:flex-2/3 flex items-center justify-center">
          <Image
            src="/images/points.webp"
            width={560}
            height={380}
            className='md:w-[340px] lg:w-[560px]'
            alt="Points"
          />
        </div>

        <div className="inline-block flex-[40%] lg:flex-1/3 self-center">
          <p className="text-[28px] md:text-[32px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Clarity That
            <span className="text-white/90 md:block"> Connects</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75 pr-4">
            Where intelligent insights meet effortless meeting management.
          </p>
          <Button className='mt-8'>Join the Waitlist</Button>
        </div>
      </div>
    </section>
  )
}
