import Image from 'next/image'
import AppearOnScroll from './appear-on-scroll'
import { CTAField } from './cta-form'

export default function Hero() {
  return (
    <AppearOnScroll
      className="text-center mt-16 sm:mt-24 px-6"
      amount={0.15}
      id="hero">
      <h1 className="text-5xl md:text-6xl font-heading !leading-[120%] sm:!leading-[140%] font-semibold tracking-[2%]">
        Ivaan, Your Personal AI
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
      <CTAField />

      <div className="text-sm md:text-lg text-gray-500 tracking-[2%] mt-10 sm:mt-12">
        First 100 Users will get{' '}
        <span className="text-white">Lifetime 50% Off</span>
      </div>
    </AppearOnScroll>
  )
}
