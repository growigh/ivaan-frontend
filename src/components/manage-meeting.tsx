import Image from 'next/image'
import { Button } from './ui/button'
import AppearOnScroll from './appear-on-scroll'

export default function ManageMeeting() {
  return (
    <AppearOnScroll className="container mx-auto mt-32 flex flex-col md:flex-row justify-between px-6 md:px-10" amount={0.2}>
      <div className="flex flex-col gap-28">
        <div className="text-white/90 tracking-[2%]">
          <p className="text-3xl md:text-2xl lg:text-4xl leading-[130%]">
            Manage Hundreds of
            <span className='block'>meetings with</span>
          </p>
          <p className="font-bold text-5xl lg:text-6xl mt-4">Edith</p>
        </div>
        <div className="">
          <Button>Get early Access</Button>
          <p className="text-white/70 mt-4">
            Stay on top of every conversation without breaking a sweat.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/network.webp"
          alt="Edith managing meetings"
          className=""
          width={600}
          height={380}
        />
      </div>
  </AppearOnScroll>
  )
}
