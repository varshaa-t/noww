import React from 'react'
import StoryParaText from './StoryParaText'
import Image from 'next/image'

function FounderSection() {

    const founderTextArray = [
        { text: "Founder of NOWW Advisory, Peter Doyle brings almost two decades of experience in professional services, commercial negotiation, financial operations, and workplace management to the property sector." },
        { text: "Driven to achieve results for his clients, Peter knows the value of having in-depth knowledge at hand – he’s been on the receiving end." },
        { text: "Recognising the importance of building a rapport with all stakeholders and negotiating fair terms of agreement, Peter places successful client outcomes at the centre of every property negotiation he embarks on." },
        { text: "To benefit from Peter’s expertise, get in touch with NOWW Advisory today and discover how an effective property strategy can empower your business." }
    ]

  return (
    <div className='flex flex-col space-y-14 md:flex-row md:space-y-0 justify-between text-primary-blue'>
        <div className='rounded-3xl overflow-hidden self-center xl:self-auto'>
            <Image
                src={"/images/peter-doyle.webp"}
                alt='Peter Doyle'
                width={616}
                height={616}
                className='h-auto md:w-80 lg:w-96 xl:h-full xl:w-[500px] 2xl:w-full'
            />
        </div>
        <div className='flex flex-col space-y-6 xl:self-center'>
            <div className='text-4xl lg:text-5xl'>Meet Peter Doyle</div>
            <div className='flex flex-col space-y-8 text-lg'>
                {founderTextArray.map((text, index) => (
                    <div key={index}>
                        <StoryParaText {...text}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FounderSection