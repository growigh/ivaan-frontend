import Image from 'next/image'
import { Button } from './ui/button'

export default function BetterMeeting() {
  return (
    <section className="container mx-auto mt-40 px-6 md:px-20">
      <h2 className="text-primary text-4xl tracking-[2%] font-semibold">
        Everything You Need for Better Meetings
      </h2>
      <p className="text-xl text-white/75 mt-4">
        Features built for clarity, speed, and smarter outcomes.
      </p>

      <div className="flex mt-26">
        <div></div>

        <div className="inline-block space-y-6">
          <p className="text-4xl text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            High Quality <br />
              <span className=" text-white/90">Notes</span>
          </p>
          <p className="text-xl text-white/75">
            Only the details that matter,
            <br /> perfectly captured.
          </p>
          <Button>Join the Waitlist</Button>
        </div>
      </div>

      <div className="mt-40">
        <div className="inline-block space-y-6 self-center">
          <p className="text-4xl text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Accurate
            <br />
            <span className=" text-white/90">Transcripts</span>
          </p>
          <p className="text-xl text-white/75">
            Every word, captured and crystal clear.
          </p>
          <Button>Get early Access</Button>
        </div>

        <div></div>
      </div>

      <div className="flex mt-40 justify-between">
        <div className='flex-2/3'>
          <Image src="/images/points.webp" width={500} height={380} alt="Points" />
        </div>

        <div className="inline-block space-y-6 flex-1/3 self-center">
          <p className="text-4xl text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Clarity That
            <br />
            <span className=" text-white/90">Connects</span>
          </p>
          <p className="text-xl text-white/75">
            Where intelligent insights meet
            <br /> effortless meeting management.
          </p>
          <Button>Join the Waitlist</Button>
        </div>
      </div>
    </section>
  )
}
