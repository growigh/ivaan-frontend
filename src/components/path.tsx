import Image from 'next/image'
import { Button } from './ui/button'

export default function Path() {
  return (
    <section className="container mx-auto mt-45 px-2">
      <h2 className="text-primary text-4xl tracking-[2%] font-semibold">
        Your Path to Better Meetings
      </h2>
      <p className="text-xl text-white/75 mt-4">
        From start to finish, Edith has you covered.
      </p>

      <div className="flex flex-col sm:flex-row mt-26 gap-12">
        <div className="p-12 border-2 border-white/15 rounded-3xl">
          <p className="text-2xl text-white/90">Connect Your Calendar</p>
          <p className="font-light text-white/75 pt-5">
            Ask about meeting details, topics, and goals, just like chatting
            with a assistant.
          </p>
        </div>

        <div className="p-12 border-2 border-white/15 rounded-3xl">
          <p className="text-2xl text-white/90">Talk to Edith</p>
          <p className="font-light text-white/75 pt-5">
            Link your Google, Outlook, or other calendar so Edith knows your
            schedule.
          </p>
        </div>

        <div className="p-12 border-2 border-white/15 rounded-3xl">
          <p className="text-2xl text-white/90">Let Edith Deliver</p>
          <p className="font-light text-white/75 pt-5">
            Get high quality notes, action items, and transcripts instantly
            after every meeting.
          </p>
        </div>
      </div>

      <div className='mt-11 flex justify-end'>
        <Button className="self-end">Get early Access</Button>
      </div>
    </section>
  )
}
