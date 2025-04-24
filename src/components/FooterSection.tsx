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
          <div className='flex justify-between mx-[2vw] xs:mx-[4vw] sm:mx-[3vw] lg:-mx-[1vw] xl:mx-[0.5vw] 2xl:mx-[1vw] pt-8'>
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
          <div className='text-[14px] block text-primary-yellow font-primary-light mx-[2vw] xs:mx-[4vw] sm:mx-[3vw] lg:hidden'>
            © 2025 NOWW Advisory. All rights reserved.
          </div>
          <div className='block mx-[2vw] xs:hidden'>
                <LinkedIn/>
          </div>
        </div>
    </div>
  )
}

export default FooterSection