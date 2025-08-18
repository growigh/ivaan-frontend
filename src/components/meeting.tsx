import Image from 'next/image'
import Arrow from './svg/arrow'

export default function Meeting() {
  return (
    <section className="container mx-auto mt-24 sm:mt-28 md:mt-42 max-sm:px-6 lg:px-20">
      <div className="flex items-center tracking-[2%] justify-center">
        <div className="border-2 border-white/20 text-white/70 rounded-2xl md:rounded-4xl inline-block p-3 md:p-6 flex-col uppercase">
          <p className="text-xl md:text-4xl font-semibold">Meeting #1</p>
          <p className="text-xs md:text-base">with Sarah</p>
        </div>
        <Arrow />
        <div className="border-2 border-white/20 text-white/70 rounded-2xl md:rounded-4xl inline-block p-3 md:p-6 flex-col uppercase">
          <p className="text-xl md:text-4xl font-semibold">Meeting #2</p>
          <p className="text-xs md:text-base">with sam and Sarah</p>
        </div>
        <Arrow className="hidden sm:visible" />
        <div className="border-2 border-white/20 text-white/70 rounded-4xl lg:inline-block p-6 flex-col uppercase hidden">
          <p className="text-xl md:text-4xl font-semibold">Meeting #3</p>
          <p className="text-xs md:text-base">with elon</p>
        </div>
        <Arrow className="hidden lg:visible" />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-24 sm:mt-32 md:mt-37">
        <div>
          <h2 className="text-3xl text-center md:text-left md:text-5xl font-semibold leading-[110%]">
            Edith Connect All Your
            <span className='block sm:inline'> Meeting Contexts</span>
          </h2>
          <p className="text-base md:text-lg mt-4 md:mt-8 text-white/70 text-center">
            Every detail, from every source unified.
          </p>
        </div>
        <div className="mt-23 md:mt-4">
          <Image
            src="/images/meeting.webp"
            alt="Meeting Image"
            width={480}
            height={480}
            className="rounded-4xl max-md:w-full max-md:max-h-[320px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
