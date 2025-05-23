"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

function CapabilityTitle() {

    const capabilityTitleRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        if(!capabilityTitleRef.current) return;

        const capabilityTitleCtx = gsap.context(() => {
            gsap.from(".word", {
                opacity: 0,
                autoAlpha: 1,
                clipPath: "inset(0% 0% 100% 0%)",
                y: 50,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: capabilityTitleRef.current,
                    start: "top 80%"
                }
            })
        }, capabilityTitleRef)

        return () => capabilityTitleCtx.revert();
    }, []);

    return (
        <div 
            ref={capabilityTitleRef}
            className='pt-32 tracking-wide text-center text-primary-yellow text-4xl pb-12 lg:pb-16 lg:text-5xl'
        >
            {`Our Capability`.split(" ").map((word, index) => (
                <span
                    key={index}
                    className='word mr-3 inline-block'
                >
                    {word}
                </span>
            ))}
        </div>
    )
}

export default CapabilityTitle