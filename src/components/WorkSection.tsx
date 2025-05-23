"use client";

import React, { useRef } from 'react'
import Button from './Button'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

type WorkSectionProps = {
    title: string;
    text: string;
    src: string;
    alt: string;
    heading: "power" | "protect";
    variant: "primary" | "secondary";
}

const variantClasses = {
    "primary": "text-primary-blue",
    "secondary": "text-white"
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function WorkSection({ title, text, src, alt, heading, variant }: WorkSectionProps) {

    const primaryType = variant === "primary";

    const workSectionTitleRef = useRef<HTMLDivElement | null>(null);
    const workSectionTextRef = useRef<HTMLDivElement | null>(null);
    const workSectionButtonRefOne = useRef<HTMLDivElement | null>(null);
    const workSectionButtonRefTwo = useRef<HTMLDivElement | null>(null);
    const workSectionImageRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        if(!workSectionTitleRef.current || !workSectionTextRef.current) return;

        const workCtx = gsap.context(() => {
            gsap.from(".word", {
                opacity: 0,
                clipPath: "inset(0% 0% 100% 0%)",
                y: 50,
                stagger: 0.1,
                delay: 0.2,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: workSectionTitleRef.current,
                    start: "top 80%"
                }
            })
        }, workSectionTitleRef)

        gsap.from([workSectionTextRef.current, workSectionButtonRefOne.current, workSectionButtonRefTwo.current], {
            opacity: 0,
            autoAlpha: 1,
            y: 100,
            scrollTrigger: {
                trigger: workSectionTextRef.current,
                start: "top 80%"
            }
        })

        gsap.from(workSectionImageRef.current, {
            opacity: 0,
            autoAlpha: 1,
            y: 75,
            scrollTrigger: {
                trigger: workSectionTextRef.current,
                start: "top 95%"
            }
        })

        return () => workCtx.revert();
    }, []);

  return (
    <div className={`flex flex-col space-y-12 ${heading == "power" ? "md:flex-row" : "md:flex-row-reverse"} md:flex-row md:space-y-0 justify-between px-10 ${variantClasses[variant]} md:px-12 lg:px-24`}>
        <div className={`flex flex-col space-y-5 self-center ${heading == "protect" && "lg:relative lg:left-[2vw] xl:left-0"}`}>
            <div 
                ref={workSectionTitleRef}
                className='text-4xl font-bold tracking-wide md:w-[40vw] lg:leading-14 lg:w-[30vw] lg:text-5xl xl:w-auto'
            >
                {title.split(" ").map((word, index) => (
                    <span 
                        key={index}
                        className='word mr-3 inline-block'
                    >
                        {word}
                    </span>
                ))}
            </div>
            <div 
                ref={workSectionTextRef}
                className='font-primary-light text-lg md:w-[40vw] xl:tracking-wide'
            >
                {text}
            </div>
            {primaryType ?
                <div ref={workSectionButtonRefOne}>
                    <Button
                        variant='primary'
                        text='Work with us'
                        arrowType='primary'
                    />
                </div> :
                <div ref={workSectionButtonRefTwo}>
                    <Button
                        variant='secondary'
                        text='Work with us'
                        arrowType='primary'
                    />
                </div>
            }
        </div>
        <div 
            ref={workSectionImageRef}
            className='self-center lg:self-auto'
        >
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