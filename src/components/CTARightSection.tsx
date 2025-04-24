import React from 'react'
import CTAIcon from './CTAIcon'
import Button from './Button'

function CTARightSection() {
  return (
    <div className='relative bg-primary-yellow text-primary-blue rounded-3xl flex py-16 px-4 h-[500px] xs:px-16 xs:h-[600px] sm:h-[550px] lg:w-[50vw] lg:h-[650px] xl:h-[550px]'>
        <div className='flex flex-col space-y-6'>
            <div className=' font-bold tracking-wide leading-12 text-[32px] w-80 md:w-96 md:text-[40px] lg:leading-14 xl:leading-16 lg:w-60 lg:text-5xl xl:w-[450px]'>
                Ready to chat?
                Start your journey.
            </div>
            <Button
                variant='primary'
                text='Contact us today'
            />
        </div>
        <div className='absolute bottom-12 right-8 xs:bottom-12 xs:right-16 sm:bottom-12 sm:right-16 md:bottom-12 md:right-16 lg:right-16 lg:bottom-14 xl:right-16 xl:bottom-14 2xl:bottom-16 2xl:right-16'>
            <CTAIcon/>
        </div>
    </div>
  )
}

export default CTARightSection