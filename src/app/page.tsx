import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Meeting from '@/components/meeting'
import BetterMeeting from '@/components/better-meeting'
import Path from '@/components/path'
import ManageMeeting from '@/components/manage-meeting'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Meeting />
      <BetterMeeting />
      <Path />
      <ManageMeeting />
      <Footer />
    </>
  )
}
