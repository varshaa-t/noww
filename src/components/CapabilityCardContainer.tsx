"use client";

import React, { useRef } from 'react'
import CapabilityCard from './CapabilityCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

type CardType = {
  title: string;
  number: string;
  variant: "filled" | "outlined";
  texts: string[];
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function CapabilityCardContainer() {

  const cards: CardType[] = [
    {
      title: "Connect",
      number: "01",
      variant: "filled",
      texts: [
        "Time to renew your lease?",
        "Need bigger work premises?",
        "Looking to secure a commercial space?",
        "Upgrading your workplace strategy?"
      ]
    },
    {
      title: "Engage",
      number: "02",
      variant: "filled",
      texts: [
        "We understand your specific requirements",
        "We negotiate on your behalf",
        "Let us project manage your move",
        "Our approach will align with your business objectives"
      ]
    },
    {
      title: "Deliver",
      number: "03",
      variant: "outlined",
      texts: [
        "We'll bring your workspace to life",
        "We can organise your move",
        "We'll secure premises that are future proof for your organisation"
      ]
    },
  ]

  const capabilityContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    const capabilityContainerMM = gsap.matchMedia();

    capabilityContainerMM.add("(min-width: 1024px)", () => {

      if(!capabilityContainerRef.current) return;

      gsap.from(capabilityContainerRef.current.children, {
        opacity: 0,
        autoAlpha: 1,
        y: 25,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: capabilityContainerRef.current,
          start: "top 70%"
        }
      })
    })

    capabilityContainerMM.add("(min-width: 370px) and (max-width: 1023px)", () => {

      if(!capabilityContainerRef.current) return;

      Array.from(capabilityContainerRef.current.children).forEach((child) => {
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
  }, []);

  return (
    <div 
      ref={capabilityContainerRef}
      className='px-10 flex flex-col justify-between space-y-4 pb-28 md:pb-40 md:px-12 lg:px-24 lg:flex-row lg:space-x-6 lg:space-y-0'
    >
      {cards.map((card, index) => (
          <CapabilityCard
              key={index}
              title={card.title}
              number={card.number}
              variant={card.variant}
              texts={card.texts}
          />
      ))}
    </div>
  )
}

export default CapabilityCardContainer