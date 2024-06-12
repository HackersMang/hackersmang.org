import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="max-container flex items-center justify-center px-4 md:px-6 z-0">
        <img src="/hackersmang-logo.svg" alt="hackersmang-logo"/>
      </div>
      <div className="max-container bg-grainy flex flex-row gap-2 md:gap-4 py-12 px-2 nav-link-outline rounded-t-3xl mt-[-1.2rem] lg:mt-[-4rem] relative z-30">
        <div>
          
        </div>
        <div className="">
          © 2024 hackersmang.org All rights reserved.
        </div>
        <div className="">
          Privacy Policy
        </div>
        <div className="">
          Terms of Use
        </div>
      </div>
    </footer>
  )
}

export default Footer
