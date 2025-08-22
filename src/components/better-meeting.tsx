'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import AppearOnScroll from './appear-on-scroll'
import Cta from './cta'
import TypewriterText from './typewriter-text'

export default function BetterMeeting() {
  const [completedChats, setCompletedChats] = useState<number[]>([])
  const [isInView, setIsInView] = useState(false)
  const [isVideoInView, setIsVideoInView] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const chatObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    )

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoInView(true)
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    )

    const currentChatRef = chatContainerRef.current
    const currentVideoRef = videoContainerRef.current

    if (currentChatRef) {
      chatObserver.observe(currentChatRef)
    }

    if (currentVideoRef) {
      videoObserver.observe(currentVideoRef)
    }

    return () => {
      if (currentChatRef) {
        chatObserver.unobserve(currentChatRef)
      }
      if (currentVideoRef) {
        videoObserver.unobserve(currentVideoRef)
      }
    }
  }, [])

  // Handle video playback based on isVideoInView
  // 3) Playback effect (make sure muted/inline are set **before** play())
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Ensure Safari sees these flags on the element before play()
    v.muted = true
    v.playsInline = true

    if (isVideoInView) {
      // Some Safari builds need a load() kick before play()
      if (v.readyState < 2) v.load()
      v.play().catch(() => {
        // If Safari still refuses, nothing breaks; user can tap to play.
      })
    } else {
      v.pause()
    }
  }, [isVideoInView])

  const handleChatComplete = useCallback((index: number) => {
    setCompletedChats(prev => {
      if (!prev.includes(index)) {
        return [...prev, index]
      }
      return prev
    })
  }, [])

  const chatData = [
    {
      time: '[00:00]',
      speaker: 'Alex',
      message:
        'Thanks for joining. Alright, let’s get started. Goal today is to lock MVP scope and timeline.'
    },
    {
      time: '[00:12]',
      speaker: 'Mia',
      message:
        'Cool. I’ve got the latest note-taking flow and the context panel mock.'
    },
    {
      time: '[00:20]',
      speaker: 'Marco',
      message:
        "Quick tech update before that before that transcription latency's around two-is seconds per utterance on our current setup."
    }
  ]
  return (
    <AppearOnScroll
      className="container mx-auto mt-30 md:mt-40 px-6 lg:px-10"
      amount={0.2}>
      <h2 className="text-primary text-4xl md:text-[40px] md:tracking-[2%] font-semibold text-center md:text-left">
        Everything You Need for Better Meetings
      </h2>
      <p className="text-base md:text-xl text-white/75 mt-4 text-center md:text-left">
        Features built for clarity, speed, and smarter outcomes.
      </p>

      <div className="mt-26 flex flex-col md:flex-row gap-9 sm:gap-16 md:gap-15 lg:gap-43">
        <motion.div
          ref={videoContainerRef}
          className="border-2 rounded-3xl p-4 lg:p-6 max-w-xl flex gap-3 flex-col text-sm lg:text-base min-h-56 lg:min-w-[576px]"
          layout
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            layout: { duration: 0.6, ease: 'easeInOut' }
          }}>
          <video
            ref={videoRef}
            width={600}
            height={500}
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"     
            className="rounded-xl"
          >
            <source src="/videos/todo.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="inline-block">
          <p className="text-[28px] md:text-[42px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            High Quality
            <span className="text-white/90 md:block"> Notes</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75 pr-4">
            Only the details that matter, perfectly captured.
          </p>
          <Cta to="#hero" className="mt-8">
            Join the Waitlist
          </Cta>
        </div>
      </div>

      <div className="mt-28 md:mt-35 lg:mt-40 flex justify-between flex-col md:flex-row  gap-9 sm:gap-16 md:gap-18 lg:gap-40">
        <div className="inline-block lg:ml-14 order-2 md:order-1">
          <p className="text-[28px] md:text-[42px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Accurate
            <span className="text-white/90 md:block"> Transcripts</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75">
            Every word, captured and crystal clear.
          </p>
          <Cta to="#hero" className="mt-8">
            Get early Access
          </Cta>
        </div>

        <motion.div
          ref={chatContainerRef}
          className="border-2 rounded-3xl p-4 lg:p-6 max-w-[562px] flex gap-3 flex-col text-sm lg:text-base order-1 md:order-2"
          layout
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            layout: { duration: 0.6, ease: 'easeInOut' }
          }}>
          {chatData.map((chat, index) => {
            const shouldStart =
              isInView && (index === 0 || completedChats.includes(index - 1))
            const isCurrentlyTyping =
              shouldStart && !completedChats.includes(index)
            const shouldShowMessage =
              completedChats.includes(index) || isCurrentlyTyping

            return (
              <motion.div
                className=""
                key={index}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: shouldShowMessage ? 1 : 0,
                  height: shouldShowMessage ? 'auto' : 0
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  layout: { duration: 0.4, ease: 'easeInOut' }
                }}>
                {shouldShowMessage ? (
                  <>
                    <span className="text-white/50">{chat.time}</span>
                    <span className="mx-1 font-bold">{chat.speaker}:</span>
                    <TypewriterText
                      text={chat.message}
                      delay={index === 0 ? 500 : 200}
                      speed={20}
                      shouldStart={shouldStart}
                      onComplete={() => handleChatComplete(index)}
                      className=""
                    />
                  </>
                ) : (
                  <div className="invisible">
                    <span className="text-muted">{chat.time}</span>
                    <span className="mx-1 font-bold">{chat.speaker}:</span>
                    <span>{chat.message}</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row mt-28 md:mt-35 lg:mt-45 gap-17 md:gap-20 lg:gap-41">
        <div className="flex items-center justify-center">
          <Image
            src="/images/points.webp"
            width={580}
            height={380}
            className="md:w-[340px] lg:w-[580px]"
            alt="Points"
          />
        </div>

        <div className="inline-block">
          <p className="text-[28px] md:text-[42px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Clarity That
            <span className="text-white/90 md:block"> Connects</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75 pr-4">
            Where intelligent insights meet effortless meeting management.
          </p>
          <Cta to="#hero" className="mt-8">
            Join the Waitlist
          </Cta>
        </div>
      </div>
    </AppearOnScroll>
  )
}
