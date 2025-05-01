import CommonHeroSection from '@/components/CommonHeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

function AboutPage() {
    
  return (
    <div className='bg-primary-yellow'>
      <div className='bg-medium-yellow rounded-b-3xl overflow-hidden px-10 md:px-12 lg:px-24'>
        <Navbar/>
        <div className='pt-24 md:pt-32 md:pb-12'>
          <CommonHeroSection
            pageTitle='About Us'
            title='Strategic negotiation for business success'
            paraTitle='Trusted tenant-centric advice'
            paraText='At NOWW Advisory, results don’t come at the cost of relationships. Fair negotiation and an understanding of the commercial property landscape ensures agreements can be obtained, agreed upon, and delivered.'
            src='/images/about-us-hero-image.webp'
            alt='tall-buildings'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage