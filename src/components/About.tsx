import React from 'react'
import UpwardRightArrow from '../../public/icons/UpwardRightArrow'

type AboutProps = {
    title: string;
    text: string;
}

function About({ title, text }: AboutProps) {

  return (
    <div className='flex flex-col text-primary-yellow space-y-8 sm:space-y-6 md:space-y-10 lg:space-y-8'>
        <UpwardRightArrow 
          color='#122a5b'
          bgColor='#f9bc52'
        />
        <div className='font-semibold tracking-wide text-3xl md:text-[40px] md:leading-12 lg:leading-14 lg:text-5xl lg:w-[500px] xl:w-[570px] 2xl:w-[600px]'>{title}</div>
        <div className='font-primary-light text-xl md:text-[28px] md:w-[570px] md:leading-8 lg:leading-10 lg:text-[32px] xl:w-[600px]'>{text}</div>
    </div>
  )
}

export default About