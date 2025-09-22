"use client"

import { useUser } from '@/components/contexts/user-context'
import Link from 'next/link'
import Cta from './cta'
import { Button } from './ui/button'

export default function Header() {
  const { user, loading } = useUser()

  return (
    <header className="justify-between flex py-8 container mx-auto px-6">
      <div className="text-3xl md:text-4xl font-logo tracking-[15%]">IVAAN</div>

      {loading ? (
        <div className="w-8 h-8 animate-spin rounded-full border-b-2 border-white"></div>
      ) : user ? (
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="text-sm md:text-base border-white text-white hover:bg-white hover:text-black"
            >
              Dashboard
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="text-sm md:text-base border-white text-white hover:bg-white hover:text-black"
            >
              Login
            </Button>
          </Link>
          <Cta
            to="#hero"
            className="text-sm md:text-base bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 py-2">
            Early Access
          </Cta>
        </div>
      )}
    </header>
  )
}
