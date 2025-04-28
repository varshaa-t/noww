"use client";

import React, { useRef } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function CTALeftSection() {

  const ctaLeftRef = useRef<HTMLDivElement | null>(null);
  const ctaLeftTextRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    if(!ctaLeftRef.current || !ctaLeftTextRef.current) return;
    
    gsap.from(ctaLeftRef.current, {
      opacity: 0,
      autoAlpha: 1,
      y: 100,
      scrollTrigger: {
        trigger: ctaLeftRef.current,
        start: "top 90%"
      }
    })

    const leftCtaCtx = gsap.context(() => {

      gsap.from(".word", {
        opacity: 0,
        autoAlpha: 1,
        y: 50,
        stagger: 0.15,
        clipPath: "inset(0% 0% 100% 0%)",
        scrollTrigger: {
          trigger: ctaLeftRef.current,
          start: "top 80%"
        }
      })

    }, ctaLeftTextRef) 

    return () => leftCtaCtx.revert();

  }, []);

  return (
    <div 
      ref={ctaLeftRef} 
      className="bg-[url('/images/CTA-img.webp')] bg-cover bg-no-repeat bg-center relative px-10 rounded-3xl h-[350px] pt-16 pb-10 lg:w-[40vw] lg:h-[650px] xl:h-[550px]"
    >
      <div className='absolute inset-0 bg-black opacity-40 rounded-3xl'></div>
      <div className='relative z-10 flex flex-col space-y-8'>
          <div 
            ref={ctaLeftTextRef}
            className='text-white text-[32px] font-bold tracking-wide leading-10 sm:w-[40vw] md:w-[50vw] md:text-[40px] md:leading-14 lg:text-5xl lg:w-auto'
          >
            {`Want to join our experienced team?`
              .split("\n").map((line, index) => (
                <div key={index}>
                  {line.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className='word inline-block mr-4'
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ))
            }
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