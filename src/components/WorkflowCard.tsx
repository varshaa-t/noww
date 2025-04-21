import React from 'react'
import UpwardRightArrow from '../../public/icons/UpwardRightArrow'

type WorkflowCardProps = {
  title: string;
  text: string;
}

function WorkflowCard({ title, text }: WorkflowCardProps) {
  return (
    <div className='flex flex-col py-10 w-full bg-medium-yellow rounded-3xl text-primary-blue space-y-7 pl-8 pr-8 h-96 sm:space-y-5 md:h-[420px] lg:h-[440px] xl:pl-6 xl:pr-6 xl:h-[400px] 2xl:pl-8 2xl:pr-0'>
        <UpwardRightArrow
          color='#f9bc52'
          bgColor='#122a5b'
        />
        <div className='font-bold text-2xl md:text-[32px] lg:text-3xl xl:text-[32px]'>{title}</div>
        <div className='font-primary-light font-bold text-xl md:leading-6 md:tracking-wide lg:tracking-normal lg:leading-5.5 xl:tracking-wide 2xl:tracking-normal xl:leading-5.5 2xl:leading-6 2xl:w-60'>{text}</div>
    </div>
  )
}

export default WorkflowCard