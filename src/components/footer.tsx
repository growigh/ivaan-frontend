import AppearOnScroll from './appear-on-scroll'
import { CTAField } from './cta-field'
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
      <AppearOnScroll
        className="flex sm:flex-row flex-col gap-4 mt-10 sm:mt-12 md:mt-14"
        amount={0.2}>
        <CTAField />
      </AppearOnScroll>
      <div className="text-white/70 text-sm mt-20 sm:mt-24 md:mt-40 pb-10">
        &copy; {new Date().getFullYear()} Growigh
      </div>
    </footer>
  )
}
