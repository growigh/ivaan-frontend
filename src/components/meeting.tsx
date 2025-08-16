import Image from 'next/image'
import Arrow from './svg/arrow'

export default function Meeting() {
  return (
    <section className="container mx-auto mt-42 px-20">
      <div className="flex items-center tracking-[2%] justify-center">
        <div className="border-2 border-white/20 text-white/70 rounded-4xl inline-block p-6 flex-col uppercase">
          <p className="text-4xl font-semibold">Meeting #1</p>
          <p>with Sarah</p>
        </div>
        <Arrow />
        <div className="border-2 border-white/20 text-white/70 rounded-4xl inline-block p-6 flex-col uppercase">
          <p className="text-4xl font-semibold">Meeting #2</p>
          <p>with sam and Sarah</p>
        </div>
        <Arrow />
        <div className="border-2 border-white/20 text-white/70 rounded-4xl inline-block p-6 flex-col uppercase">
          <p className="text-4xl font-semibold">Meeting #3</p>
          <p>with elon</p>
        </div>
        <Arrow />
      </div>
      <div className="flex justify-between mt-37">
        <div>
          <h2 className="text-5xl font-semibold leading-[110%]">Edith Connect All Your<br /> Meeting Contexts</h2>
          <p className="text-lg mt-8 text-white/70">Every detail, from every source unified.</p>
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
