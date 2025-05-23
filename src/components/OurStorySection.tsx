"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import StoryParaText from './StoryParaText'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function OurStorySection() {

    const textArray = [
        { text: "There was a way… a way to negotiate property lease agreement that didn’t isolate key stakeholders. Peter Doyle knew it was a possible. So NOWW Advisory was formed." },
        { text: "Armed with over 15 years of leadership and negotiation experience, and a sound financial and operations management background, Peter began NOWW Advisory with the purpose of providing bespoke property negotiation services to businesses." },
        { text: "Combined with property and workplace strategies, businesses seeking greater outcomes from their property portfolios and more client-focused property agreements, turn to Peter for advice." },
        { text: `“My negotiating style doesn’t isolate key stakeholders and instead builds rapport enables successful and sustainable outcomes.”` }
    ]

    const storyRef = useRef<HTMLDivElement | null>(null);
    const storyHeadingRef = useRef<HTMLDivElement | null>(null);
    const storyTitleRef = useRef<HTMLDivElement | null>(null);
    const storyTextRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        if(!storyRef.current || !storyHeadingRef.current || !storyTitleRef.current || !storyTextRef.current) return;

        gsap.from([storyHeadingRef.current, storyTitleRef.current, storyTextRef.current], {
            opacity: 0,
            autoAlpha: 1,
            y: 100,
            scrollTrigger: {
                trigger: storyRef.current,
                start: "top 60%"
            }
        })

        const storyCtx = gsap.context(() => {

            gsap.from(".word", {
                opacity: 0,
                autoAlpha: 1,
                y: 50,
                stagger: 0.15,
                clipPath: "inset(0% 0% 100% 0%)",
                scrollTrigger: {
                    trigger: storyRef.current,
                    start: "top 60%"
                }
            })

        }, storyRef)
        
        ScrollTrigger.refresh();

        return () => storyCtx.revert();
    }, []);

    return (
        <div
            ref={storyRef} 
            className='text-primary-blue flex flex-col space-y-16 md:space-y-24'
        >
            <div className='flex flex-col space-y-4 justify-between md:flex-row md:space-y-0'>
                <div className='flex flex-col space-y-4 md:space-y-6'>
                    <div
                        ref={storyHeadingRef} 
                        className='text-base'
                    >
                        Our story
                    </div>
                    <div 
                        ref={storyTitleRef}
                        className='tracking-wide font-bold text-4xl w-[270px] leading-11 xs:w-auto sm:w-96 sm:leading-11 md:w-72 lg:text-5xl lg:w-[350px] lg:leading-14 xl:w-lg'
                    >
                        {`Placing people before property`
                            .split("\n").map((line, index) => (
                                <div key={index}>
                                    {line.split(" ").map((word, i) => (
                                        <span 
                                            key={i}
                                            className='word inline-block mr-2'
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div 
                    ref={storyTextRef}
                    className='flex flex-col space-y-6 md:text-lg'
                >
                    <div className='md:w-80 lg:w-96 xl:w-[500px] 2xl:w-[600px]'>&quot;A deal is only done if you have two willing parties. If you approach the negotiations in such a way that the other party won’t come to the table, you’re not going to get anywhere.&quot;</div>
                    <div className='flex flex-col space-y-5'>
                        {textArray.map((text, index) => (
                            <div key={index}>
                                <StoryParaText {...text}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-screen rounded-3xl overflow-hidden -mx-10 md:-mx-12 lg:-mx-24'>
                <Image 
                    src={"/images/our-story-image.webp"}
                    alt='office-space'
                    width={1024}
                    height={469}
                    className='w-full object-cover h-[555px] xs:h-[750px] sm:h-[960px] md:h-auto'
                />
            </div>
        </div>
    )
}

export default OurStorySection