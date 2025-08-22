import ArrowRight from './svg/arrow-right'
import { Button } from './ui/button'
import AppearOnScroll from './appear-on-scroll'

export default function Path() {
  return (
    <AppearOnScroll className="container mx-auto mt-45 px-6 lg:px-10" amount={0.2}>
      <h2 className="text-primary text-3xl md:text-4xl tracking-[2%] font-semibold">
        Your Path to Better Meetings
      </h2>
      <p className="text-base md:text-xl text-white/75 mt-2 md:mt-4">
        From start to finish, Ivaan has you covered.
      </p>

      <div className="flex flex-col lg:flex-row mt-13 sm:mt-16 lg:mt-26 gap-6 md:gap-5 lg:gap-12">
        <div className="p-10 lg:p-12 border-2 border-white/15 rounded-3xl">
          <p className="text-xl lg:text-2xl text-white/90">
            Connect Your Calendar
          </p>
          <p className="font-light text-sm lg:text-base text-white/75 pt-5">
            Ask about meeting details, topics, and goals, just like chatting
            with a assistant.
          </p>
        </div>

        <div className="p-10 lg:p-12 border-2 border-white/15 rounded-3xl">
          <p className="text-xl lg:text-2xl text-white/90">Talk to Ivaan</p>
          <p className="font-light text-sm lg:text-base text-white/75 pt-5">
            Link your Google, Outlook, or other calendar so Ivaan knows your
            schedule.
          </p>
        </div>

        <div className="p-10 lg:p-12 border-2 border-white/15 rounded-3xl">
          <p className="text-xl lg:text-2xl text-white/90">Let Ivaan Deliver</p>
          <p className="font-light text-sm lg:text-base text-white/75 pt-5">
            Get high quality notes, action items, and transcripts instantly
            after every meeting.
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-11 flex justify-end">
        <Button className="w-full md:w-fit text-left max-md:rounded-full flex justify-between items-center max-lg:bg-gradient-to-tr from-[#2D8CFF] to-[#1B5499] lg:bg-primary">
          <p className="">Get Early Access</p>
          <ArrowRight className="lg:hidden" />
        </Button>
      </div>
    </AppearOnScroll>
  )
}
