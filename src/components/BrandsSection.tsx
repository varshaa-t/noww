"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function BrandsSection() {

    const imageArrayOne = [
        { src: "/images/brand-img-1.webp", alt: "Tax Management New Zealand", width: 71, height: 48 },
        { src: "/images/brand-img-2.webp", alt: "AIA", width: 45, height: 48 },
        { src: "/images/brand-img-3.webp", alt: "New Zealand Foreign Affairs & Trade", width: 129, height: 48 },
        { src: "/images/brand-img-4.webp", alt: "Trust Management", width: 76, height: 48 },
        { src: "/images/brand-img-5.webp", alt: "AON", width: 63, height: 48 },
        { src: "/images/brand-img-6.webp", alt: "SFO", width: 55, height: 48 },
        { src: "/images/brand-img-7.webp", alt: "Jarden", width: 81, height: 48 },
        { src: "/images/brand-img-8.webp", alt: "BB&S", width: 66, height: 48 },
        { src: "/images/brand-img-9.webp", alt: "Busy Bees", width: 61, height: 48 }
    ]

    const imageArrayTwo = [
        { src: "/images/brand-img-1.webp", alt: "Tax Management New Zealand", width: 111, height: 75 },
        { src: "/images/brand-img-2.webp", alt: "AIA", width: 71, height: 75 },
        { src: "/images/brand-img-3.webp", alt: "New Zealand Foreign Affairs & Trade", width: 201, height: 75 },
        { src: "/images/brand-img-4.webp", alt: "Trust Management", width: 120, height: 75 },
        { src: "/images/brand-img-5.webp", alt: "AON", width: 99, height: 75 },
        { src: "/images/brand-img-6.webp", alt: "SFO", width: 87, height: 75 },
        { src: "/images/brand-img-7.webp", alt: "Jarden", width: 127, height: 75 },
        { src: "/images/brand-img-8.webp", alt: "BB&S", width: 103, height: 75 },
        { src: "/images/brand-img-9.webp", alt: "Busy Bees", width: 95, height: 75 }
    ]

    const brandsTitleRef = useRef<HTMLDivElement | null>(null);  
    const brandsRef = useRef<HTMLDivElement | null>(null);  

    useGSAP(() => {
        if(!brandsRef.current || !brandsTitleRef.current) return;

        gsap.from(brandsRef.current.children, {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            stagger: 0.1,
            scrollTrigger: {
                trigger: brandsRef.current,
                start: "top 80%"
            }
        })

        const brandsCtx = gsap.context(() => {

            gsap.from(".word", {
                y: 5,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)",
                stagger: 0.1,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: brandsRef.current,
                    start: "top 80%",
                },
            });
              

        }, brandsRef);

        return () => brandsCtx.revert();

    }, []);

    return (
        <div ref={brandsRef} className='flex flex-col items-center space-y-10'> 
            <div    
                ref={brandsTitleRef}
                className='text-primary-blue font-bold text-center md:text-lg'
            >
                {`Commercial negotiations and workplace projects powered by NOWW Advisory`
                    .split("\n").map((line, index) => (
                        <div key={index}>
                            {line.split(" ").map((word, i) => (
                            <span key={i} className="inline-block overflow-hidden">
                                <span className="word inline-block mr-1">
                                {word}
                                </span>
                            </span>
                            ))}
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col space-y-10 xs:hidden'>
                <div className='flex justify-center space-x-10'>
                    <Image {...imageArrayOne[0]} />
                    <Image {...imageArrayOne[1]} />
                </div>
                <div className='flex justify-center space-x-10'>
                    <Image {...imageArrayOne[2]} />
                    <Image {...imageArrayOne[3]} />
                </div>
                <div className='flex justify-center space-x-10'>
                    <Image {...imageArrayOne[4]} />
                    <Image {...imageArrayOne[5]} />
                    <Image {...imageArrayOne[6]} />
                </div>
                <div className='flex justify-center space-x-10'>
                    <Image {...imageArrayOne[7]} />
                    <Image {...imageArrayOne[8]} />
                </div>
            </div>
            <div className='hidden xs:flex xs:flex-col xs:space-y-10 sm:hidden'>
                <div className='flex justify-center space-x-10'>
                    {imageArrayOne.slice(0, 3).map((img, index) => (
                        <Image key={index} {...img}/>
                    ))}
                </div>
                <div className='flex justify-center space-x-10'>
                    {imageArrayOne.slice(3, 7).map((img, index) => (
                        <Image key={index + 3} {...img}/>
                    ))}
                </div>
                <div className='flex justify-center space-x-10'>
                    {imageArrayOne.slice(7).map((img, index) => (
                        <Image key={index + 7} {...img}/>
                    ))}
                </div>
            </div>
            <div className='hidden sm:flex sm:flex-col sm:space-y-10 md:hidden'>
                <div className='flex justify-center space-x-10'>
                    {imageArrayOne.slice(0, 4).map((img, i) => (
                        <Image key={i} {...img}/>
                    ))}
                </div>
                <div className='flex justify-center space-x-14'>
                    {imageArrayOne.slice(4).map((img, i) => (
                        <Image key={i + 4} {...img}/>
                    ))}
                </div>
            </div>
            <div className='hidden md:flex md:flex-col md:space-y-10 lg:hidden'>
                <div className='flex justify-center space-x-24'>
                    {imageArrayTwo.slice(0, 3).map((img, idx) => (
                        <Image key={idx} {...img}/>
                    ))}
                </div>
                <div className='flex justify-center space-x-20'>
                    {imageArrayTwo.slice(3, 6).map((img, idx) => (
                        <Image key={idx + 3} {...img}/>
                    ))}
                </div>
                <div className='flex justify-center space-x-16'>
                    {imageArrayTwo.slice(6).map((img, idx) => (
                        <Image key={idx + 6} {...img}/>
                    ))}
                </div>
            </div>
            <div className='hidden lg:flex lg:flex-col lg:space-y-10'>
                <div className='flex justify-center space-x-20'>
                    {imageArrayTwo.slice(0, 4).map((img, rowIdx) => (
                        <Image key={rowIdx} {...img}/>
                    ))}
                </div>
                <div className='flex justify-center space-x-24'>
                    {imageArrayTwo.slice(4).map((img, rowIdx) => (
                        <Image key={rowIdx + 4} {...img}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrandsSection