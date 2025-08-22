import Cta from './cta'

export default function Header() {
  return (
    <header className="justify-between flex py-8 container mx-auto px-6">
      <div className="text-3xl md:text-4xl font-logo tracking-[15%]">IVAAN</div>
      <Cta
        to="#hero"
        className="text-sm md:text-base bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 py-2">
        Early Access
      </Cta>
    </header>
  )
}
