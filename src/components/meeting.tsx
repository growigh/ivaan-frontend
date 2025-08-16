import Image from 'next/image'
import Arrow from './svg/arrow'

export default function Meeting() {
  return (
    <section className="container mx-auto mt-42 px-6 md:px-20">
      <div className="flex items-center tracking-[2%] justify-center">
        <div className="border-2 border-white/20 text-white/70 rounded-4xl inline-block p-3 md:p-6 flex-col uppercase">
          <p className="text-xl md:text-4xl font-semibold">Meeting #1</p>
          <p className='text-xs md:text-base'>with Sarah</p>
        </div>
        <Arrow />
        <div className="border-2 border-white/20 text-white/70 rounded-4xl inline-block p-3 md:p-6 flex-col uppercase">
          <p className="text-xl md:text-4xl font-semibold">Meeting #2</p>
          <p className='text-xs md:text-base'>with sam and Sarah</p>
        </div>
        <Arrow className='hidden md:visible' />
        <div className="border-2 border-white/20 text-white/70 rounded-4xl md:inline-block p-6 flex-col uppercase hidden">
          <p className="text-xl md:text-4xl font-semibold">Meeting #3</p>
          <p className='text-xs md:text-base'>with elon</p>
        </div>
        <Arrow className='hidden md:visible' />
      </div>
      <div className="flex justify-between mt-37">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[110%]">Edith Connect All Your<br /> Meeting Contexts</h2>
          <p className="text-base md:text-lg mt-8 text-white/70">Every detail, from every source unified.</p>
        </div>
        <div>
          <Image
            src="/images/meeting.webp"
            alt="Meeting Image"
            width={480}
            height={480}
            className="rounded-4xl"
          />
        </div>
      </div>
    </section>
  )
}
