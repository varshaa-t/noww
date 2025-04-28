"use client";

import React, { useRef } from 'react'
import LinkedIn from '../../public/icons/LinkedIn'
import FooterIcon from './FooterIcon'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function FooterSection() {

  const footerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    if(!footerRef.current) return;

    gsap.from(footerRef.current.children, {
      opacity: 0,
      autoAlpha: 1,
      stagger: 0.15,
      y: 100, 
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 70%"
      }
    })

  }, []);

  return (
    <div
      ref={footerRef}
    >
        <div className='flex justify-center'>
          <div className='border-b border-primary-yellow pb-20'>
            <FooterIcon/>
          </div>
        </div>
        <div className='flex flex-col space-y-5'>
          <div className='flex justify-between mx-[2vw] xs:mx-[4vw] sm:mx-[3vw] lg:-mx-[1vw] xl:mx-[0.5vw] 2xl:mx-[1vw] pt-8'>
              <div className='flex text-primary-yellow font-primary-light space-x-4 lg:space-x-6 2xl:space-x-8'>
                <div className='text-[14px] hidden lg:block'>© 2025 NOWW Advisory. All rights reserved.</div>
                <div className='text-[14px] hover:underline hover:underline-offset-4 hover:cursor-pointer'>Privacy Policy</div>
                <div className='text-[14px] hover:underline hover:underline-offset-4 hover:cursor-pointer'>Terms of Use</div>
                <div className='text-[14px] hover:underline hover:underline-offset-4 hover:cursor-pointer'>Site by N4</div>
              </div>
              <div className='hidden xs:block'>
                <LinkedIn/>
              </div>
          </div>
          <div className='text-[14px] block text-primary-yellow font-primary-light mx-[2vw] xs:mx-[4vw] sm:mx-[3vw] lg:hidden'>
            © 2025 NOWW Advisory. All rights reserved.
          </div>
          <div className='block mx-[2vw] xs:hidden'>
                <LinkedIn/>
          </div>
        </div>
    </div>
  )
}

export default FooterSection