import React from 'react'
import About from './About'
import Button from './Button'
import WorkflowCard from './WorkflowCard'
import CTASection from './CTASection'
import FooterSection from './FooterSection'

function AboutSection() {

  const cardArray = [
    { title: "Connect",
      text: "We meet with you, the client, to understand your workplace requirements needs."
    },
    { title: "Engage",
      text: "Our tailored services align with your property and business strategies."
    },
    { title: "Deliver",
      text: "We engage in fair and reasonable discussion, negotiating on your behalf to ensure a successful outcome."
    },
    { title: "Support",
      text: "We can provide long-term support and advice to ensure your workplace environment remains conducive to your needs."
    }
  ]

  return (
    <div className='bg-primary-blue rounded-t-3xl pb-16 px-6 pt-28 md:px-10 lg:pt-52 lg:px-24'>
      <div className='flex flex-col pb-20 space-y-16 xs:space-y-24 sm:pb-32 md:pb-60 lg:space-y-96 lg:pb-80 xl:pb-96'>
        <About
          title='Client and stakeholder consideration.'
          text="Experienced business leadership that's driven by fair outcomes."
        />
        <About 
          title='People are your greatest business asset.'
          text='Invest in your people, work with us to create an environment for them to thrive.'
        />
      </div>
      <div className='flex flex-col justify-between space-y-8 pb-14 lg:flex-row lg:items-end lg:space-y-0'>
        <div className='text-white font-bold text-4xl tracking-wide leading-12 xs:w-[65vw] sm:w-[55vw] sm:leading-14 md:w-[43vw] lg:text-5xl lg:w-[55vw] lg:leading-20 lg:tracking-wider lg:text-[64px]'>
          Powering your workplace journey
        </div>
        <div className='w-fit'>
          <Button
            variant='secondary'
            text='Our approach'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-y-4 gap-x-6 pb-32 xs:pb-44 md:grid-cols-2 lg:gap-y-0 lg:grid-cols-4'>
        {cardArray.map((card, index) => (
          <WorkflowCard
            {...card}
            key={index}
          />
        ))}
      </div>
      <div className='pb-24'>
        <CTASection/>
      </div>
      <div>
        <FooterSection/>
      </div>
    </div>
  )
}

export default AboutSection