import React from 'react'
import LinkedIn from '../../public/icons/LinkedIn'
import FooterIcon from './FooterIcon'

function FooterSection() {
  return (
    <div>
        <div className='flex justify-center'>
        <div className='border-b border-primary-yellow pb-20'>
          <FooterIcon/>
        </div>
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex justify-between px-[8vw] 2xl:px-[7vw] pt-8'>
            <div className='flex text-primary-yellow font-primary-light space-x-4 lg:space-x-6 2xl:space-x-8'>
              <div className='text-[14px] hidden lg:block'>© 2025 NOWW Advisory. All rights reserved.</div>
              <div className='text-[14px]'>Privacy Policy</div>
              <div className='text-[14px]'>Terms of Use</div>
              <div className='text-[14px]'>Site by N4</div>
            </div>
            <div className='hidden xs:block'>
              <LinkedIn/>
            </div>
        </div>
        <div className='text-[14px] block text-primary-yellow font-primary-light px-[8vw] lg:hidden 2xl:px-[7vw]'>© 2025 NOWW Advisory. All rights reserved.</div>
        <div className='block xs:hidden px-[8vw]'>
              <LinkedIn/>
        </div>
      </div>
    </div>
  )
}

export default FooterSection