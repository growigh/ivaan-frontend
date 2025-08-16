import { BorderBeam } from './magicui/border-beam'
import { Button } from './ui/button'

export default function Footer() {
  return (
    <footer className="container mx-auto mt-60 px-6 md:px-10">
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-bold">Join the Waitlist</p>
        <p className="text-white/75">
          First 100 Users will get Lifetime 50% Off
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-14">
        <div className="relative rounded-xl border">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl w-106 focus:outline-none"
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
      <div className="text-white/70 text-sm mt-40 pb-10">
        &copy; {new Date().getFullYear()} Growigh
      </div>
    </footer>
  )
}
