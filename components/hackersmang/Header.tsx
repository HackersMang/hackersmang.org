import Image from "next/image"
import Link from "next/link"

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-neutral-white shadow-md py-2">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-5">
        {/* Logo Section */}
        <div className="h-full w-fit flex justify-center items-center text-sm p-0 cursor-pointer">
          <Link href="/" passHref>
            <Image
              src="/icon.png"
              alt="hackersmang-logo"
              width={70}
              height={70}
              className="rounded-full cursor-pointer"
            />
          </Link>
        </div>

        {/* Modern Events Button */}
        <Link
          href="/events"
          className="group relative flex items-center justify-center gap-2 md:px-6 py-3 text-neutral-navy font-semibold rounded-2xl transition-all duration-300 overflow-hidden hover:underline"
          aria-label="View all events"
        >
          {/* Button Content */}
          <div className="relative flex items-center gap-2">
            {/* Icon */}
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Text */}
            <span className="text-sm outfit-bold tracking-wide">
              Events
            </span>

            {/* Animated Dot */}
            <div className="w-1.5 h-1.5 bg-neutral-100 rounded-full animate-pulse opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>
    </header>
  )
}