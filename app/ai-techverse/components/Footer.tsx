import { SocialDock } from './Socials'

const Footer = () => {
  return (
    <footer>
      <div className="max-container flex items-center justify-center px-4 lg:px-6 z-0">
        <img src="/hackersmang-logo.svg" alt="hackersmang-logo" />
      </div>
      <div className="bg-grainy items-center justify-center lg:col-span-3 lg:grid lg:grid-cols-3 w-full nav-link-outline rounded-t-3xl mt-[-1.4rem] md:mt-[-2.5rem] lg:mt-[-4.8rem] p-4 relative z-30">
        <div className='text-lg items-center justify-center w-full'>
          <SocialDock />
        </div>
        <div className="hidden lg:flex items-center justify-center w-full text-gray-30">
          © 2024 HackersMang All rights reserved.
        </div>
        <div className="hidden lg:flex flex-col gap-2 items-center justify-center w-full">
          <div className='text-gray-30'>
            Privacy Policy
          </div>
          <div className='text-gray-30'>
            Terms of Use
          </div>
        </div>
        <div className="flex lg:hidden items-center justify-center w-full mt-2 text-gray-30">
          © 2024 HackersMang All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
