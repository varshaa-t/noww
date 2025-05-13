"use client";

import React, { useRef } from 'react'
import CTAIcon from './CTAIcon'
import Button from './Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function CTARightSection() {

    const ctaRightRef = useRef<HTMLDivElement | null>(null);
    const ctaRightTextRef = useRef<HTMLDivElement | null>(null);

    useGSAP(( ) => {

        if(!ctaRightRef.current || !ctaRightTextRef.current) return;
        
        gsap.from(ctaRightRef.current, {
            opacity: 0,
            autoAlpha: 1,
            y: 100,
            delay: 0.2,
            scrollTrigger: {
              trigger: ctaRightTextRef.current,
              start: "top 90%"
            }
          })

        const rightCtaCtx = gsap.context(() => {

        gsap.from(".word", {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            stagger: 0.15,
            delay: 0.2,
            clipPath: "inset(0% 0% 100% 0%)",
            scrollTrigger: {
            trigger: ctaRightRef.current,
            start: "top 80%"
            }
        })
    
        }, ctaRightTextRef) 
    
        return () => rightCtaCtx.revert();

    }, []);

  return (
    <div 
        ref={ctaRightRef}
        className='relative bg-primary-yellow text-primary-blue rounded-3xl flex py-16 px-4 h-[500px] xs:px-16 xs:h-[600px] sm:h-[550px] lg:w-[50vw] lg:h-[650px] xl:h-[550px]'
    >
        <div className='flex flex-col space-y-6'>
            <div 
                ref={ctaRightTextRef}
                className='font-bold tracking-wide leading-12 text-[32px] w-80 md:w-96 md:text-[40px] lg:leading-14 xl:leading-16 lg:w-60 lg:text-5xl xl:w-[450px]'
            >
                {`Ready to chat? Start your journey.`
                .split("\n").map((line, index) => (
                    <div key={index}>
                        {line
                        .split(" ").map((word, i) => (
                            <span
                                key={i}
                                className='word inline-block mr-4'
                            >
                                {word}
                            </span>
                        ))
                        }
                    </div>
                ))
                }
            </div>
            <Button
                variant='primary'
                text='Contact us today'
                arrowType='primary'
            />
        </div>
        <div className='absolute bottom-12 right-8 xs:bottom-12 xs:right-16 sm:bottom-12 sm:right-16 md:bottom-12 md:right-16 lg:right-16 lg:bottom-14 xl:right-16 xl:bottom-14 2xl:bottom-16 2xl:right-16'>
            <CTAIcon/>
        </div>
    </div>
  )
}

export default CTARightSection