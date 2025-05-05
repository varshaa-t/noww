import Image from 'next/image';
import React from 'react'
import DownArrow from '../../public/icons/DownArrow';
import CommonHeroLogo from './CommonHeroLogo';

type CommonHeroProps = {
    pageTitle: string;
    title: string;
    paraTitle: string;
    paraText: string;
    src: string;
    alt: string;
}

function CommonHeroSection({ pageTitle, title, paraTitle, paraText, src, alt }: CommonHeroProps) {
    
  return (
    <div className='relative'>
        <div className='flex flex-col space-y-12'>
            <div className='flex flex-col justify-between space-y-20 md:space-x-20 md:space-y-0 md:flex-row 2xl:space-x-4'>
                <div className='flex flex-col justify-between text-primary-blue space-y-14 md:space-y-0 xl:space-y-24 2xl:space-y-0'>
                    <div className='flex flex-col space-y-20'>
                        <div className='font-primary-light text-lg'>{pageTitle}</div>
                        <div className='font-semibold tracking-wide text-5xl w-60 leading-14 xs:w-auto sm:w-[450px] md:text-[64px] md:w-80 md:leading-16 lg:w-80 xl:w-[550px] 2xl:w-[550px] 2xl:leading-20'>{title}</div>
                    </div>
                    <div className='flex flex-col space-y-4 font-primary-light tracking-wide text-[18px]'>
                        <div>{paraTitle}</div>
                        <div className='md:w-80 lg:w-[420px] xl:w-[500px] 2xl:w-[600px]'>{paraText}</div>
                    </div>
                </div>
                <div>
                    <Image 
                        src={src}
                        alt={alt}
                        width={616}
                        height={714}
                        className='rounded-3xl h-full object-cover lg:w-lg 2xl:w-auto'
                    />
                </div>
            </div>
            <div className='self-end hidden md:block'>
                <DownArrow
                    page='about'
                />
            </div>
        </div>
        <div className='absolute bottom-0 right-0 translate-x-20 -translate-y-32 md:translate-x-24 md:-translate-y-40 lg:translate-x-44 lg:-translate-y-56 xl:translate-x-44 xl:-translate-y-52 2xl:translate-x-36 2xl:-translate-y-56'>
            <CommonHeroLogo
                page='about'
            />
        </div>
    </div>
  )
}

export default CommonHeroSection