"use client"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { submitEarlyAccess } from "../api"
import { getCurrentUTMParams, storeUTMParams, UTMParams } from "../utils/utm"
import { BorderBeam } from "./magicui/border-beam"
import { Button } from "./ui/button"

// Zod schema for email validation
const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address")
})

export const CTAField = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [utmParams, setUtmParams] = useState<UTMParams>({})

  // Capture UTM parameters on component mount
  useEffect(() => {
    const params = getCurrentUTMParams()
    setUtmParams(params)
    
    // Store UTM params for future use
    storeUTMParams(params)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate using Zod
    try {
      emailSchema.parse({ email })
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message)
        return
      }
    }

    setIsSubmitting(true)

    try {
      // Call early access API with UTM parameters
      await submitEarlyAccess({
        email: email,
        source: 'early-access-form',
        utm: utmParams
      })
      
      toast.success("Thank you! We'll be in touch soon.")
      setEmail("")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
     <form onSubmit={onSubmit}className="flex sm:flex-row flex-col gap-4 justify-center mt-10 sm:mt-14">
        <div className="relative rounded-xl border sm:w-106">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl w-full focus:outline-none"
            disabled={isSubmitting}
          />
          <BorderBeam
            duration={8}
            size={100}
            borderWidth={2}
            className="from-[#B9D9FF] via-[#63A9FE] to-[#003575]"
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get Early Access"}
        </Button>
    </form>
  )
}