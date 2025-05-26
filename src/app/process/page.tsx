import CommonHeroSection from '@/components/CommonHeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {

  return (
    <div className='bg-primary-blue'>
        <div className='bg-primary-yellow text-primary-blue rounded-b-3xl overflow-hidden px-10 md:px-12 lg:px-24'>
            <Navbar/>
            <div className='pt-24 md:pt-32 md:pb-12'>
                <CommonHeroSection
                    pageTitle='Our Approach'
                    title='A tailored approach'
                    paraTitle='Property advice for commercial tenants'
                    paraText="NOWW Advisory's approach to your lease negotiations is simple. It places tenants at the centre of every deal.'"
                    src='/images/process-hero-image.webp'
                    alt='advice-img'
                />
            </div>
      </div>
    </div>
  )
}

export default page
