import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CtaProps {
  to: string
  className?: string
  children: React.ReactNode
}

export default function Cta({ to, className, children }: CtaProps) {
  return (
    <Link
      href={to}
      className={cn(
        'text-base bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 px-4 py-3 rounded-xl font-medium inline-block',
        className
      )}>
      {children}
    </Link>
  )
}
