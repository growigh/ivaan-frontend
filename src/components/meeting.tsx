import Image from 'next/image'

export default function Meeting() {
  return (
    <section className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between mt-31 md:mt-40">
      <div>
        <h2 className="text-3xl sm:text-2xl-4xl text-center md:text-left lg:text-5xl font-semibold leading-[110%]">
          Edith Connect All Your
          <span className="block sm:inline md:block"> Meeting Contexts</span>
        </h2>
        <p className="text-base md:text-lg mt-4 lg:mt-8 text-white/70 text-center md:text-left">
          Every detail, from every source unified.
        </p>
      </div>

      <div className="mt-23 md:mt-4">
        <Image
          src="/images/meeting.webp"
          alt="Meeting Image"
          width={480}
          height={480}
          className="rounded-4xl h-[278px] sm:w-full sm:max-h-[320px] mx-auto md:h-full md:w-[278px] lg:w-[480px] lg:max-h-[480px] object-cover"
        />
      </div>
    </section>
  )
}
