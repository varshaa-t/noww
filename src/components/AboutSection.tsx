"use client";

import React, { useRef } from 'react'
import About from './About'
import Button from './Button'
import WorkflowCard from './WorkflowCard'
import CTASection from './CTASection'
import FooterSection from './FooterSection'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AboutLogo from './AboutLogo';

gsap.registerPlugin(useGSAP);

function AboutSection() {

  const aboutTextRef = useRef<HTMLDivElement | null>(null);
  const aboutTitleRef = useRef<HTMLDivElement | null>(null);
  const aboutButtonRef = useRef<HTMLDivElement | null>(null);
  const workflowRef = useRef<HTMLDivElement | null>(null);

  const cardArray = [
    { title: "Connect",
      text: "We meet with you, the client, to understand your workplace requirements needs."
    },
    { title: "Engage",
      text: "Our tailored services align with your property and business strategies."
    },
    { title: "Deliver",
      text: "We engage in fair and reasonable discussion, negotiating on your behalf to ensure a successful outcome."
    },
    { title: "Support",
      text: "We can provide long-term support and advice to ensure your workplace environment remains conducive to your needs."
    }
  ]

  useGSAP(() => {

    if(!aboutTextRef.current || !aboutTitleRef.current || !aboutButtonRef.current) return;

    Array.from(aboutTextRef.current.children).forEach((child) => {
      gsap.from(child, {
        opacity: 0,
          autoAlpha: 1,
          y: 50,
          ease: "power1.out",
          scrollTrigger: {
            trigger: child,
            start: "top 80%",
          },
      })
    })

    const ctxAbout = gsap.context(() => {

      gsap.from(".word", {
        opacity: 0,
        autoAlpha: 1,
        stagger: 0.15,
        y: 50,
        clipPath: "inset(0% 0% 100% 0%)",
        scrollTrigger: {
          trigger: aboutTitleRef.current,
          start: "top 90%"
        }
      })
      
    }, aboutTitleRef)

    gsap.from(aboutButtonRef.current, {
      opacity: 0,
      autoAlpha: 1,
      y: 50,
      scrollTrigger: {
        trigger: aboutButtonRef.current,
        start: "top 80%"
      }
    })

    const aboutMM = gsap.matchMedia();

    aboutMM.add("(max-width: 380px)", () => {

      if(!workflowRef.current) return;

      Array.from(workflowRef.current.children).forEach((child) => {
        gsap.from(child, {
          opacity: 0,
          autoAlpha: 1,
          y: 50,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: child,
            start: "top 80%",
          },
        });
      });
    })

    aboutMM.add("(min-width: 381px) and (max-width: 1023px)", () => {

      if(!workflowRef.current) return;

      Array.from(workflowRef.current.children).forEach((child) => {
        gsap.from(child, {
          opacity: 0,
          autoAlpha: 1,
          y: 50,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: child,
            start: "top 80%",
          }
        })
      })
    })

    aboutMM.add("(min-width: 1024px)", () => {

      if(!workflowRef.current) return;

      gsap.from(workflowRef.current.children, {
        opacity: 0,
        autoAlpha: 1,
        y: 100,
        stagger: 0.15,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: workflowRef.current,
          start: "top 70%"
        }
      })

    })

    const aboutLogoAnimation = gsap.to(".logo-path", {
      attr: { fill: "#EDEECE" },
      scrollTrigger: {
        trigger: ".sticky",
        start: "top 50%",
        end: "bottom top",
        scrub: true
      },
    });

    return () => {
      ctxAbout.revert();
      aboutLogoAnimation.kill();
    }

  }, []);

  return (
    <div className='bg-primary-blue rounded-t-3xl pb-16 px-6 pt-28 md:px-10 lg:pt-52 lg:px-24'>
      <div className='flex justify-between items-start'>
        <div 
          ref={aboutTextRef}
          className='flex flex-col pb-20 space-y-16 xs:space-y-24 sm:pb-32 md:pb-60 lg:space-y-96 lg:pb-80 xl:pb-96'
        >
          <About
            title='Client and stakeholder consideration.'
            text="Experienced business leadership that's driven by fair outcomes."
          />
          <About 
            title='People are your greatest business asset.'
            text='Invest in your people, work with us to create an environment for them to thrive.'
          />
        </div>
        <div className='sticky top-36 hidden lg:block'>
          <AboutLogo/>
        </div>
      </div>
      <div className='flex flex-col justify-between space-y-8 pb-14 lg:flex-row lg:items-end lg:space-y-0'>
        <div 
          ref={aboutTitleRef}
          className='text-white font-bold text-4xl tracking-wide leading-12 xs:w-[65vw] sm:w-[55vw] sm:leading-14 md:w-[43vw] lg:text-5xl lg:w-[55vw] lg:leading-20 lg:tracking-wider lg:text-[64px]'
        >
          {`Powering your workplace journey`
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
        <div 
          ref={aboutButtonRef}
          className='w-fit'
        >
          <Button
            variant='secondary'
            text='Our approach'
            arrowType='primary'
          />
        </div>
      </div>
      <div ref={workflowRef} className='grid grid-cols-1 gap-y-4 gap-x-6 pb-32 xs:pb-44 md:grid-cols-2 lg:gap-y-0 lg:grid-cols-4'>
        {cardArray.map((card, index) => (
          <WorkflowCard
            {...card}
            key={index}
          />
        ))}
      </div>
      <div className='pb-24'>
        <CTASection/>
      </div>
      <div>
        <FooterSection/>
      </div>
    </div>
  )
}

export default AboutSection