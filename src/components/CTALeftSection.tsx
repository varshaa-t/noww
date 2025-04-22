import React from 'react'
import Button from './Button'

function CTALeftSection() {
  return (
    <div className="bg-[url('/images/CTA-img.webp')] bg-cover bg-no-repeat bg-center relative px-10 rounded-3xl h-[350px] pt-16 pb-10 lg:w-[40vw] lg:h-[650px] xl:h-[550px]">
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className='relative z-10 flex flex-col space-y-8'>
            <div className='text-white text-[32px] md:text-[40px] font-bold tracking-wide leading-10 md:leading-14 lg:text-5xl'>
                Want to join our
                experienced team?
            </div>
            <Button
                variant='primary'
                text='Join the team'
            />
        </div>
    </div>
  )
}

export default CTALeftSection