import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="justify-between flex py-8 container mx-auto px-6 md:px-0">
      <div className="text-3xl md:text-4xl font-logo tracking-[15%]">EDITH</div>
      <Button variant="secondary" className="text-sm md:text-base">Early Access</Button>
    </header>
  )
}
