import Image from 'next/image'
import { Button } from './ui/button'
import AppearOnScroll from './appear-on-scroll'

export default function ManageMeeting() {
  return (
    <AppearOnScroll
      className="container mx-auto mt-32 flex flex-col md:flex-row justify-between px-6 lg:gap-10 xl:gap-40 lg:px-10"
      amount={0.2}>
      <div className="flex flex-col md:gap-13 lg:gap-20 xl:gap-28">
        <div className="text-white/90 tracking-[2%]">
          <p className="text-3xl md:text-2xl lg:text-4xl leading-[130%]">
            Manage Hundreds of
            <span className="block sm:inline md:block"> meetings with</span>
          </p>
          <p className="font-bold text-5xl lg:text-6xl mt-4">IVAAN</p>
        </div>
        <div className="hidden md:block">
          <Button>Get early Access</Button>
          <p className="text-white/70 mt-4">
            Stay on top of every conversation without breaking a sweat.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-20 md:mt-0">
        <Image
          src="/images/network.webp"
          alt="IVAAN managing meetings"
          className="md:w-[335px] lg:w-[600px]"
          width={600}
          height={380}
        />
        <div className="mt-18 md:hidden">
          <Button>Join Waitlist</Button>
          <p className="text-white/70 mt-4">
            Stay on top of every conversation without breaking a sweat.
          </p>
        </div>
      </div>
    </AppearOnScroll>
  )
}
