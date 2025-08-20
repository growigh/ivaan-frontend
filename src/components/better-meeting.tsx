'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import TypewriterText from './typewriter-text'
import { Button } from './ui/button'
import AppearOnScroll from './appear-on-scroll'

export default function BetterMeeting() {
  const [completedChats, setCompletedChats] = useState<number[]>([])
  
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
      time: "[00:00]",
      speaker: "Alex",
      message: "Thanks for joining. Alright, let’s get started. Goal today is to lock MVP scope and timeline."
    },
    {
      time: "[00:12]",
      speaker: "Mia",
      message: "Cool. I’ve got the latest note-taking flow and the context panel mock."
    },
    {
      time: "[00:20]",
      speaker: "Marco",
      message: "Quick tech update before that before that transcription latency's around two-is seconds per utterance on our current setup."
    },
  ]
  return (
    <AppearOnScroll className="container mx-auto mt-30 md:mt-40 px-6 lg:px-20" amount={0.2}>
      <h2 className="text-primary text-4xl md:text-[40px] md:tracking-[2%] font-semibold text-center md:text-left">
        Everything You Need for Better Meetings
      </h2>
      <p className="text-base md:text-xl text-white/75 mt-4 text-center md:text-left">
        Features built for clarity, speed, and smarter outcomes.
      </p>

      <div className="flex mt-26">
        <div></div>

        <div className="inline-block">
          <p className="text-[28px] md:text-[32px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            High Quality
            <span className="text-white/90 md:block"> Notes</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75 pr-4">
            Only the details that matter, perfectly captured.
          </p>
          <Button className='mt-8'>Join the Waitlist</Button>
        </div>
      </div>

      <div className="mt-40 flex justify-between flex-col md:flex-row gap-24 md:gap-24">
        <div className="inline-block self-center">
          <p className="text-[28px] md:text-[32px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Accurate
            <span className="text-white/90 md:block"> Transcripts</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75">
            Every word, captured and crystal clear.
          </p>
          <Button className='mt-8'>Get early Access</Button>
        </div>

        <motion.div 
          className='border rounded-3xl p-4 lg:p-6 max-w-xl flex gap-3 flex-col text-sm lg:text-base min-h-56'
          layout
          transition={{ 
            duration: 0.6, 
            ease: "easeInOut",
            layout: { duration: 0.6, ease: "easeInOut" }
          }}
        >
          {chatData.map((chat, index) => {
            const shouldStart = index === 0 || completedChats.includes(index - 1)
            const isCurrentlyTyping = shouldStart && !completedChats.includes(index)
            const shouldShowMessage = completedChats.includes(index) || isCurrentlyTyping
            
            return (
              <motion.div 
                className='' 
                key={index}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: shouldShowMessage ? 1 : 0,
                  height: shouldShowMessage ? "auto" : 0
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeInOut",
                  layout: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                {shouldShowMessage ? (
                  <>
                    <span className='text-muted'>{chat.time}</span>
                    <span className='mx-1 font-bold'>{chat.speaker}:</span>
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
                    <span className='text-muted'>{chat.time}</span>
                    <span className='mx-1 font-bold'>{chat.speaker}:</span>
                    <span>{chat.message}</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row mt-40 gap-16 md:gap-0 lg:gap-20">
        <div className="flex-[60%] lg:flex-2/3 flex items-center justify-center">
          <Image
            src="/images/points.webp"
            width={560}
            height={380}
            className='md:w-[340px] lg:w-[560px]'
            alt="Points"
          />
        </div>

        <div className="inline-block flex-[40%] lg:flex-1/3 self-center">
          <p className="text-[28px] md:text-[32px] text-white/60 tracking-[2%] leading-[130%] font-bold uppercase">
            Clarity That
            <span className="text-white/90 md:block"> Connects</span>
          </p>
          <p className="text-base mt-2 md:mt-6 md:text-xl text-white/75 pr-4">
            Where intelligent insights meet effortless meeting management.
          </p>
          <Button className='mt-8'>Join the Waitlist</Button>
        </div>
      </div>
  </AppearOnScroll>
  )
}
