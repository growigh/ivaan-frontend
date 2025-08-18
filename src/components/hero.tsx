import Image from 'next/image'
import { BorderBeam } from './magicui/border-beam'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="text-center mt-12 sm:mt-24 px-6">
      <h1 className="text-5xl md:text-6xl font-heading !leading-[120%] sm:!leading-[140%] font-semibold tracking-[2%]">
        Edith, Your Personal AI
        <span className="sm:block"> Meeting Assistant</span>
      </h1>
      <p className="text-base text-white/80 md:text-lg mt-6 md:mt-8 max-md:px-4">
        AI assistant that remembers, connects and talks about all your meetings.
      </p>
      <div className="sm:flex gap-5 justify-center w-full mt-12 md:mt-16 hidden">
        <Image src="/images/zoom.webp" width={40} height={40} alt="Zoom" />
        <Image src="/images/meet.webp" width={40} height={40} alt="Meet" />
        <Image src="/images/teams.webp" width={40} height={40} alt="Teams" />
        <Image src="/images/slack.webp" width={40} height={40} alt="Slack" />
        <Image
          src="/images/discord.webp"
          width={40}
          height={40}
          alt="Discord"
        />
        <Image src="/images/more.webp" width={40} height={40} alt="More" />
      </div>
      <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10 sm:mt-14">
        <div className="relative rounded-xl border sm:w-106">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl w-full focus:outline-none"
          />
          <BorderBeam
            duration={8}
            size={100}
            borderWidth={2}
            className="from-[#B9D9FF] via-[#63A9FE] to-[#003575]"
          />
        </div>
        <Button>Get Early Access</Button>
      </div>
      <div className="text-sm md:text-lg text-gray-500 tracking-[2%] mt-10 sm:mt-12">
        First 100 Users will get{' '}
        <span className="text-white">Lifetime 50% Off</span>
      </div>
    </section>
  )
}
