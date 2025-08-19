'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
  onComplete?: () => void
  className?: string
  shouldStart?: boolean
}

export default function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 30, 
  onComplete,
  className = '',
  shouldStart = true
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const onCompleteRef = useRef(onComplete)

  // Update ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (!shouldStart) {
      setStarted(false)
      setCurrentIndex(0)
      setDisplayedText('')
      return
    }
    
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(delayTimer)
    } else {
      setStarted(true)
    }
  }, [delay, shouldStart])

  useEffect(() => {
    if (!started || currentIndex >= text.length) {
      if (currentIndex >= text.length && onCompleteRef.current) {
        onCompleteRef.current()
      }
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex + 1))
      setCurrentIndex(currentIndex + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, started])

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {displayedText}
      {currentIndex < text.length && started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-4 bg-current ml-0.5"
        />
      )}
    </motion.span>
  )
}
