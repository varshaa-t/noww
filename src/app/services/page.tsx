import CapabilityCardContainer from '@/components/CapabilityCardContainer'
import CapabilityTitle from '@/components/CapabilityTitle'
import CommonHeroSection from '@/components/CommonHeroSection'
import CTASection from '@/components/CTASection'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import WorkSection from '@/components/WorkSection'
import Image from 'next/image'
import React from 'react'

function ServicesPage() {

  return (
    <div className='bg-primary-yellow'>
      <div className='relative z-10 bg-light-green rounded-b-3xl overflow-hidden px-10 md:px-12 lg:px-24'>
        <Navbar/>
        <div className='pt-24 md:pt-32 md:pb-12'>
          <CommonHeroSection
            pageTitle='Our Services'
            title='Independent commercial property advice'
            paraTitle='Workplaces that work for you'
            paraText='Improve your lease terms with independent commercial advice that answers your workplace and empowers your staff.'
            src='/images/services-hero-image.webp'
            alt='workplace'
          />
        </div>
      </div>
      <div className='relative z-0 w-screen -mt-8 pb-16 md:pb-28'>
        <Image
          width={1280}
          height={587}
          src={"/images/services-img-1.webp"}
          alt='workspace'
          className='w-full rounded-b-3xl object-cover h-[555px] xs:h-[750px] sm:h-[960px] md:h-auto'
        />
      </div>
      <div className='flex flex-col space-y-36 pb-16 md:space-y-60 md:pb-24 lg:pb-28'>
        <WorkSection
          title='Power your business'
          text='People - they’re your greatest asset so creating a workplace environment that attracts, sustains, and encourages performance is essential. At NOWW Advisory, we work with businesses to secure commercial tenancy agreements that meet both client and stakeholder expectations. To make your property work for you, leave it in the hands of our experienced negotiators. They’re in your corner.'
          src='/images/services-img-2.webp'
          alt='people-working'
          heading='power'
          variant='primary'
        />
        <WorkSection
          title='Protect your property'
          text='Need a lease negotiated? A fit-out facilitated? An office space allocated? NOWW Advisory’s property strategy services are formulated with the tenant in mind. From tenant advisory services to lease renewals, workplace strategies to refurbishment agreements, our team’s experience enables us to develop long-term agreements that places the tenant experience at the heart of the negotiation.'
          src='/images/CTA-img.webp'
          alt='people-working'
          heading='protect'
          variant='primary'
        />
      </div>
      <div className='bg-primary-blue rounded-t-3xl'>
        <CapabilityTitle/>
        <CapabilityCardContainer/>
        <div className='pb-20 md:pb-40'>
          <WorkSection
            title='Position your people'
            text='Effective property negotiations require collaboration across industry groups and operational management amongst internal functions. NOWW Advisory is trusted, respected, and professional in their approach, with a proven track record of building rapport with owners, tenants, and external stakeholders. Position your people for success with a proposed solution that secures the expert advice of our team.'
            src='/images/work-image.webp'
            alt='man-working'
            heading='protect'
            variant='secondary'
          />
        </div>
        <div className='px-10 pb-28 sm:pb-32 md:px-12 lg:px-24'>
            <CTASection/>
        </div>
        <div className='pb-14 px-6 sm:px-10 lg:px-24'>
          <FooterSection/>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
