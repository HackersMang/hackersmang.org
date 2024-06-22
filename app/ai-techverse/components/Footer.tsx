import { DockDemo } from './Socials'

const Footer = () => {
  return (
    <footer>
      <div className="max-container flex items-center justify-center px-4 md:px-6 z-0">
        <img src="/hackersmang-logo.svg" alt="hackersmang-logo" />
      </div>
      <div className="max-container bg-grainy items-center justify-center md:col-span-3 md:grid md:grid-cols-3 w-full nav-link-outline rounded-t-3xl mt-[-1.4rem] lg:mt-[-4.8rem] p-4 relative z-30">
        <div className='text-lg items-center justify-center w-full'>
          <DockDemo />
        </div>
        <div className="hidden md:flex items-center justify-center w-full">
          © 2024 hackersMang All rights reserved.
        </div>
        <div className="hidden md:flex flex-col gap-2 items-center justify-center w-full">
          <div>
            Privacy Policy
          </div>
          <div>
            Terms of Use
          </div>
        </div>
        <div className="flex md:hidden items-center justify-center w-full mt-2">
          © 2024 hackersMang All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
