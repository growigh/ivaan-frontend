"use client"

import { PropsWithChildren, useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Props = PropsWithChildren<{
  className?: string
  // Delay for the animation (seconds)
  delay?: number
  // Initial Y offset in pixels
  offsetY?: number
  // Animation duration (seconds)
  duration?: number
  // Trigger the animation only once
  once?: boolean
  // Intersection ratio to consider in view (0-1)
  amount?: number
}>

export default function AppearOnScroll({
  children,
  className,
  delay = 0,
  offsetY = 24,
  duration = 0.5,
  once = true,
  amount = 0.2,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: offsetY }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
