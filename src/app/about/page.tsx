import BrandsSection from '@/components/BrandsSection'
import CommonHeroSection from '@/components/CommonHeroSection'
import CTASection from '@/components/CTASection'
import FooterSection from '@/components/FooterSection'
import FounderSection from '@/components/FounderSection'
import Navbar from '@/components/Navbar'
import OurStorySection from '@/components/OurStorySection'
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
      <div className='flex flex-col space-y-20 pt-16 px-10 md:px-12 md:pt-28 lg:px-24'>
        <OurStorySection/>
        <BrandsSection/>
      </div>
      <div className='pt-16 px-10 pb-32 md:px-12 md:pt-40 lg:px-24'>
        <FounderSection/>
      </div>
      <div className='rounded-t-3xl pt-8 px-10 bg-primary-blue md:px-12 lg:px-24 lg:pt-14'>
        <div className='pb-24'>
          <CTASection/>
        </div>
        <div>
          <FooterSection/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage