import React from 'react'
import CTALeftSection from './CTALeftSection'
import CTARightSection from './CTARightSection'

function CTASection() {
  return (
    <div className='flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0'>
        <CTALeftSection/>
        <CTARightSection/>
    </div>
  )
}

export default CTASection