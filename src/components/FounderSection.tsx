"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import FounderText from './FounderText'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FounderSection() {

    const founderTextArray = [
        { text: "Founder of NOWW Advisory, Peter Doyle brings almost two decades of experience in professional services, commercial negotiation, financial operations, and workplace management to the property sector." },
        { text: "Driven to achieve results for his clients, Peter knows the value of having in-depth knowledge at hand – he’s been on the receiving end." },
        { text: "Recognising the importance of building a rapport with all stakeholders and negotiating fair terms of agreement, Peter places successful client outcomes at the centre of every property negotiation he embarks on." },
        { text: "To benefit from Peter’s expertise, get in touch with NOWW Advisory today and discover how an effective property strategy can empower your business." }
    ]

    const foundersRef = useRef<HTMLDivElement | null>(null);
    const foundersTitleRef = useRef<HTMLDivElement | null>(null);
    const foundersImageRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        if(!foundersRef.current) return;

        gsap.from(foundersRef.current.children, {
            opacity: 0,
            autoAlpha: 1,
            y: 100,
            stagger: 0.15,
            scrollTrigger: {
                trigger: foundersRef.current,
                start: "top 80%"
            }
        })

        const foundersCtx = gsap.context(() => {

            gsap.from(".word", {
                clipPath: "inset(0% 0% 100% 0%)",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: foundersRef.current,
                    start: "top 80%",
                },
            })

        }, foundersRef)

        return () => foundersCtx.revert();

    }, [])

  return (
    <div 
        ref={foundersRef} 
        className='flex flex-col space-y-14 md:flex-row md:space-y-0 justify-between text-primary-blue'
    >
        <div 
            ref={foundersImageRef}
            className='rounded-3xl overflow-hidden self-center xl:self-auto'
        >
            <Image
                src={"/images/peter-doyle.webp"}
                alt='Peter Doyle'
                width={616}
                height={616}
                className='h-auto md:w-[40vw] lg:w-[35vw] xl:h-full xl:w-[35vw] 2xl:w-full'
            />
        </div>
        <div className='flex flex-col space-y-6 xl:self-center'>
            <div
                ref={foundersTitleRef} 
                className='text-4xl lg:text-5xl'
            >
                {`Meet Peter Doyle`
                    .split("\n").map((line, index) => (
                        <div key={index}>
                            {line
                                .split(" ").map((word, i) => (
                                    <span
                                        key={i}
                                        className='word inline-block mr-4 font-bold'
                                    >
                                        {word}
                                    </span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col space-y-8 text-lg'>
                {founderTextArray.map((text, index) => (
                    <div key={index}>
                        <FounderText {...text}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FounderSection