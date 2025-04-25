"use client";

import React, { useRef } from 'react'
import Button from './Button'
import Image from 'next/image'
import UpwardRightArrow from '../../public/icons/UpwardRightArrow'
import ExploreSectionImg from './ExploreSectionImg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ExploreSection() {

    const exploreTextRefOne = useRef<HTMLDivElement | null>(null);
    const exploreButtonRefOne = useRef<HTMLDivElement | null>(null);
    const exploreBgRefOne = useRef<HTMLDivElement | null>(null);
    const exploreBgRefTwo = useRef<HTMLDivElement | null>(null);
    const exploreTextRefTwo = useRef<HTMLDivElement | null>(null);
    const exploreTextRefThree = useRef<HTMLDivElement | null>(null);
    const exploreTextRefFour = useRef<HTMLDivElement | null>(null);
    const exploreImageRefOne = useRef<HTMLImageElement | null>(null);
    const exploreImageRefTwo = useRef<HTMLImageElement | null>(null);
    const exploreButtonRefTwo = useRef<HTMLDivElement | null>(null);    
    const exploreGreenBgRef = useRef<HTMLDivElement | null>(null);  
    const exploreBlueBgRef = useRef<HTMLDivElement | null>(null); 
    const exploreTextRefFive = useRef<HTMLDivElement | null>(null);
    const exploreTextRefSix = useRef<HTMLDivElement | null>(null); 

    useGSAP(() => {
        
        if(!exploreTextRefOne.current || !exploreButtonRefOne.current || !exploreBgRefOne.current || !exploreBgRefTwo.current || !exploreTextRefTwo.current || !exploreTextRefThree.current || !exploreTextRefFour.current || !exploreImageRefOne.current || !exploreImageRefTwo.current || !exploreButtonRefTwo.current || !exploreGreenBgRef.current || !exploreBlueBgRef.current || !exploreTextRefFive.current || !exploreTextRefSix.current) return;

        const ctx1 = gsap.context(() => {

            gsap.from(".word", {
                opacity: 0,
                clipPath: "inset(0% 0% 100% 0%)",
                y: 50,
                stagger: 0.15,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: exploreTextRefOne.current,
                    start: "top 80%"
                }
            })

        }, exploreTextRefOne);

        gsap.from(exploreButtonRefOne.current, {
            opacity: 0,
            autoAlpha: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: exploreButtonRefOne.current,
              start: "top 75%"
            }
          })

        gsap.from([exploreBgRefOne.current, exploreBgRefTwo.current, exploreTextRefTwo.current, exploreTextRefFour.current, exploreImageRefOne.current , exploreImageRefTwo.current, exploreButtonRefTwo.current], {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            scrollTrigger: {
                trigger: exploreBgRefOne.current,
                start: "top 80%"
            }
        })

        const ctx2 = gsap.context(() => {

            gsap.from(".word", {
                opacity: 0,
                clipPath: "inset(0% 0% 100% 0%)",
                y: 50,
                stagger: 0.15,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: exploreTextRefThree.current,
                    start: "top 80%"
                }
            })

        }, exploreTextRefThree)

        gsap.to(exploreImageRefOne.current, {
            y: -20,
            ease: "power1.out",
            scrollTrigger: {
                trigger: exploreImageRefOne.current,
                start: "top bottom", 
                end: "bottom top",   
                scrub: true
            }
        });

        gsap.to(exploreImageRefTwo.current, {
            y: -30,
            ease: "power1.out",
            scrollTrigger: {
                trigger: exploreImageRefTwo.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        gsap.from(exploreGreenBgRef.current, {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            duration: 0.7,
            scrollTrigger: {
                trigger: exploreGreenBgRef.current,
                start: "top 70%"
            }
        })

        gsap.from(exploreBlueBgRef.current, {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            delay: 0.2,
            duration: 0.2,
            scrollTrigger: {
                trigger: exploreBlueBgRef.current,
                start: "top 70%"
            }
        })

        const ctx3 = gsap.context(() => {

            gsap.from(".word", {
                opacity: 0,
                autoAlpha: 1,
                clipPath: "inset(0% 0% 100% 0%)",
                y: 50,
                stagger: 0.15, 
                scrollTrigger: {
                    trigger: exploreTextRefFive.current,
                    start: "top 100%"
                }
            })

        }, exploreTextRefFive)

        const ctx4 = gsap.context(() => {

            gsap.from(".word", {
                opacity: 0,
                autoAlpha: 1,
                clipPath: "inset(0% 0% 100% 0%)",
                y: 50,
                stagger: 0.15, 
                duration: 0.5,
                scrollTrigger: {
                    trigger: exploreBlueBgRef.current,
                    start: "top 70%"
                }
            })
            
        }, exploreTextRefSix)

        return () => {
            ctx1.revert();
            ctx2.revert();
            ctx3.revert();
            ctx4.revert();
        }

    }, []);

  return (
    <div>
        <div className='flex flex-col space-y-12 py-24 px-8 xs:px-7 sm:px-10 md:items-center md:py-44'>
            <div 
                ref={exploreTextRefOne}
                className='text-primary-blue font-semibold tracking-wide text-4xl leading-12 xs:w-[450px] xs:leading-11 sm:leading-10 sm:w-[570px] md:text-center md:leading-14 md:text-5xl md:w-[600px] lg:leading-20 lg:tracking-wider lg:text-[64px] lg:w-[800px] xl:text-6xl xl:w-3xl'
            >
                {`Your end-to-end partner for commercial and workplace success`
                .split("\n").map((line, index) => (
                    <div key={index}>
                        {line.split(" ").map((word, i) => (
                            <span key={i} className='word inline-block mr-4'>
                                {word}
                            </span>
                        ))}
                    </div>
                ))
                }
            </div>
            <div ref={exploreButtonRefOne}>
                <Button
                    text='Explore our services'
                    variant='primary'
                />
            </div>
        </div>
        <div className='relative h-full rounded-3xl overflow-hidden text-white pb-20 xs:pb-32 md:pb-20 xl:pb-40 2xl:pb-52'>
            <div ref={exploreBgRefOne} className="absolute inset-0 z-0 bg-[url('/images/explore-section-1.webp')] bg-cover bg-[0%_50%]"></div>
            <div ref={exploreBgRefTwo} className="absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-black/80 to-black/40"></div>
            <div className="relative flex flex-col items-center h-full w-full space-y-8 -mt-14 xs:mt-0 xs:space-y-6 md:-mt-4 md:space-y-8 lg:space-y-10 lg:-mt-14 xl:space-y-8 xl:-mt-14 2xl:space-y-8 2xl:mt-10">
                <Image
                    ref={exploreImageRefOne}
                    width={200}
                    height={293}
                    src={"/images/explore-section-2.webp"}
                    alt='two-people-conversing'
                    className='hidden z-10 rounded-md absolute lg:block lg:left-16 lg:top-28 xl:top-24 2xl:top-2 2xl:left-28'
                />
                <Image
                    ref={exploreImageRefTwo}
                    width={200}
                    height={293}
                    src={"/images/explore-section-3.webp"}
                    alt='tall-buildings'
                    className='hidden z-10 rounded-md brightness-85 absolute lg:block lg:-bottom-10 lg:right-16 xl:right-14 xl:-bottom-28 2xl:-bottom-36 2xl:right-28'
                />
                <div 
                    ref={exploreTextRefTwo}
                    className='pt-[120px] text-xl font-primary-light tracking-wide'
                >
                    Building relationships
                </div>
                <div 
                    ref={exploreTextRefThree}
                    className='relative z-20 tracking-wider text-center font-semibold text-4xl w-72 xs:w-auto sm:text-4xl sm:w-[500px] sm:leading-12 md:text-5xl md:leading-16 md:w-[650px] lg:w-[800px] lg:text-6xl lg:leading-20'
                >
                    {`Facilitate your property and workplace strategy`
                    .split("\n").map((line, index) => (
                        <div key={index}>
                            {line.split(" ").map((word, i) => (
                                <span key={i} className='word inline-block mr-4'>
                                    {word}
                                </span>
                            ))}
                        </div>
                    ))
                    }
                </div>
                <div 
                    ref={exploreTextRefFour}
                    className='relative z-20 tracking-wide text-center font-semibold font-primary-light text-xl w-80 xs:w-[430px] sm:leading-7 sm:w-lg md:leading-10 md:text-[28px] md:w-[800px] lg:text-3xl'
                >
                    At NOWW Advisory, we take a pragmatic approach to commercial property negotiations.
                </div>
                <div
                    ref={exploreButtonRefTwo}
                >
                    <Button
                        text='Explore our services'
                        variant='secondary'
                    />
                </div>
            </div>
        </div>
        <div className='py-24 flex flex-col space-y-7 px-8 xs:px-10 text-white lg:px-16 lg:space-y-0 lg:flex-row lg:space-x-10 xl:px-20 2xl:px-24'>
          <div 
            ref={exploreGreenBgRef}
            className='bg-dark-green rounded-3xl overflow-hidden flex flex-col lg:flex-row lg:justify-between lg:w-2/3'
          >
            <div className='pt-10 flex flex-col pb-10 space-y-10 px-6 lg:self-end lg:px-10 '>
                <UpwardRightArrow  
                    color='#117640'
                    bgColor='#f9bc52'
                />
                <div 
                    ref={exploreTextRefFive}
                    className='font-semibold tracking-wide text-[32px] leading-9 xs:w-72 xs:leading-9 sm:leading-10 md:text-4xl md:w-80 md:leading-11 lg:w-56 lg:text-4xl xl:text-3xl xl:w-64 xl:leading-9 2xl:text-4xl 2xl:w-[300px] 2xl:leading-11'
                >
                    {`Expert advice, with end-to-end solutions.`
                    .split("\n").map((line, index) => (
                        <div key={index}>
                            {line.split(" ").map((word, i) => (
                                <span key={i} className='word inline-block mr-2'>
                                    {word}
                                </span>
                            ))}
                        </div>
                    ))
                    }
                </div>
                <div className='text-xl sm:tracking-wide md:text-2xl md:w-[800px] lg:text-xl lg:w-48 xl:w-64 2xl:text-2xl 2xl:w-80'>
                    Bespoke, tailored, and commercial property negotiation
                </div>
                <div className='tracking-wide underline cursor-pointer -mt-7 text-xl lg:text-base 2xl:text-xl'>Learn more about our approach</div>
            </div>
            <div>
                <Image
                    width={291}
                    height={835}
                    src={"/images/explore-section-4.webp"}
                    alt='advice-img'
                    className='rounded-3xl w-full object-cover object-top h-80 xs:h-[420px] sm:h-[700px] lg:h-full'
                />
            </div>
          </div>
          <div 
            ref={exploreBlueBgRef}
            className='flex flex-col space-y-4 bg-primary-blue pt-12 pb-14 rounded-3xl pl-5 pr-5 xs:pl-10 xs:pr-10 sm:pr-4 md:space-y-10 lg:w-1/3'
           >
            <div 
                ref={exploreTextRefSix}
                className='font-semibold text-2xl xs:w-72 sm:tracking-wide sm:w-80 md:w-96 md:text-3xl lg:w-auto xl:w-80 2xl:w-96'
            >
                {`We work along side you on all aspects of your workplace project to ensure a successful outcome for your business and people.`
                .split("\n").map((line, index) => (
                    <div key={index}>
                        {line.split(" ").map((word, i) => (
                            <span key={i} className='word inline-block mr-2'>
                                {word}
                            </span>
                        ))}
                    </div>
                ))
                }
            </div>
            <div className='tracking-wide underline cursor-pointer text-xl lg:text-base 2xl:text-xl'>Learn more about us</div>
            <ExploreSectionImg/>
          </div>
        </div>
    </div>
  )
}

export default ExploreSection