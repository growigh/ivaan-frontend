import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="justify-between flex py-8 container mx-auto">
      <div className="text-3xl md:text-4xl font-logo tracking-[15%]">EDITH</div>
      <Button variant="secondary">Early Access</Button>
    </header>
  )
}
