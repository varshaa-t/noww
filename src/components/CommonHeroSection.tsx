"use client";

import Image from 'next/image';
import React, { useRef } from 'react'
import DownArrow from '../../public/icons/DownArrow';
import CommonHeroLogo from './CommonHeroLogo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { usePathname } from 'next/navigation';

type CommonHeroProps = {
    pageTitle: string;
    title: string;
    paraTitle: string;
    paraText: string;
    src: string;
    alt: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function CommonHeroSection({ pageTitle, title, paraTitle, paraText, src, alt }: CommonHeroProps) {

    const commonHeroRef = useRef<HTMLDivElement | null>(null);
    const pageTitleRef = useRef<HTMLDivElement | null>(null);
    const commonHeroTitleRef = useRef<HTMLDivElement | null>(null);
    const commonHeroTextRef = useRef<HTMLDivElement | null>(null);
    const commonHeroImageRef = useRef<HTMLImageElement | null>(null);
    const commonHeroLogoRef = useRef<HTMLDivElement | null>(null);
    const commonHeroArrowRef = useRef<HTMLDivElement | null>(null);

    const path = usePathname();

    useGSAP(() => {
        if(!commonHeroRef.current || !pageTitleRef.current|| !commonHeroTitleRef.current || !commonHeroTextRef.current || !commonHeroImageRef.current || !commonHeroLogoRef.current || !commonHeroArrowRef.current) return;

        gsap.from(commonHeroImageRef.current, {
            opacity: 0,
            autoAlpha: 1,
            y: 100
        })
        
        gsap.from([commonHeroTitleRef.current, pageTitleRef.current, commonHeroTextRef.current], {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            delay: 0.5
        })

        gsap.from([commonHeroLogoRef.current], {
            opacity: 0,
            autoAlpha: 1,
            delay: 0.5,
            y: -100
        })
        
        const commonHeroCtx = gsap.context(() => {
            
            gsap.from(".word", {
                opacity: 0,
                autoAlpha: 1,
                y: 50,
                clipPath: "inset(0% 0% 100% 0%)",
                delay: 0.5,
                stagger: 0.15
            })

        }, commonHeroRef)

        gsap.from(commonHeroArrowRef.current, {
            opacity: 0,
            autoAlpha: 1,
            y: 25,
            scrollTrigger: {
                trigger: commonHeroArrowRef.current,
                start: "top 90%"
            }
        })

        ScrollTrigger.refresh();

        return () => commonHeroCtx.revert();

    }, [])
    
    return (
        <div 
            ref={commonHeroRef}
            className='relative'
        >
            <div className='flex flex-col space-y-12'>
                <div className='flex flex-col justify-between space-y-20 md:space-x-20 md:space-y-0 md:flex-row 2xl:space-x-4'>
                    <div className={`flex flex-col justify-between space-y-14 ${path == "/services" ? "text-primary-yellow" : "text-primary-blue"} md:space-y-[5vw] lg:space-y-[10vw] xl:space-y-[20vw] 2xl:space-y-0`}>
                        <div className='flex flex-col space-y-20'>
                            <div 
                                ref={pageTitleRef} 
                                className='font-primary-light text-lg'
                            >
                                {pageTitle}
                            </div>
                            <div 
                                ref={commonHeroTitleRef}
                                className='font-semibold tracking-wide text-5xl w-60 leading-14 xs:w-auto sm:w-[450px] md:text-[64px] md:w-80 md:leading-16 lg:w-80 xl:w-[600px] 2xl:w-[550px] 2xl:leading-20'
                            >
                                {title.split("\n").map((line, index) => (
                                    <div key={index}>
                                        {line.split(" ").map((word, i) => (
                                            <span key={i} className='word inline-block mr-4'>{word}</span>
                                        ))
                                        }
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                        <div 
                            ref={commonHeroTextRef}
                            className='flex flex-col space-y-4 font-primary-light tracking-wide text-[18px]'
                        >
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
                            ref={commonHeroImageRef}
                            className='rounded-3xl object-cover w-full md:h-[600px] lg:w-lg lg:h-[600px] xl:h-[700px] 2xl:w-auto'
                        />
                    </div>
                </div>
                <div 
                    ref={commonHeroArrowRef}
                    className='self-end hidden md:block'
                >
                    <DownArrow/>
                </div>
            </div>
            <div 
                ref={commonHeroLogoRef}
                className='absolute bottom-0 right-0 translate-x-20 -translate-y-32 md:translate-x-24 md:-translate-y-40 lg:translate-x-44 lg:-translate-y-80 xl:translate-x-44 xl:-translate-y-72 2xl:translate-x-36 2xl:-translate-y-56'
            >
                <CommonHeroLogo/>
            </div>
        </div>
    )
}

export default CommonHeroSection