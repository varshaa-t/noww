import React from 'react'
import Button from './Button'
import Image from 'next/image';

type WorkSectionProps = {
    title: string;
    text: string;
    src: string;
    alt: string;
    heading: "power" | "protect";
}

function WorkSection({ title, text, src, alt, heading }: WorkSectionProps) {

  return (
    <div className={`flex flex-col space-y-12 ${heading == "power" ? "md:flex-row" : "md:flex-row-reverse"} md:flex-row md:space-y-0 justify-between text-primary-blue px-10 md:px-12 lg:px-24`}>
        <div className={`flex flex-col space-y-5 self-center ${heading == "protect" && "lg:relative lg:left-[2vw] xl:left-0"}`}>
            <div className='text-4xl font-bold tracking-wide md:w-[40vw] lg:leading-14 lg:w-[30vw] lg:text-5xl xl:w-auto'>{title}</div>
            <div className='font-primary-light text-lg md:w-[40vw] xl:tracking-wide'>{text}</div>
            <Button
                variant='primary'
                text='Work with us'
            />
        </div>
        <div className='self-center lg:self-auto'>
            <Image
                width={616}
                height={616}
                src={src}
                alt={alt}
                className='rounded-3xl md:w-[40vw] md:h-80 lg:h-full lg:[30vw] xl:w-[40vw] xl:h-auto 2xl:w-full'
            />
        </div>
    </div>
  )
}

export default WorkSection