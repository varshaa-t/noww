import React from 'react'
import CapabilityCardText from './CapabilityCardText';
import Button from './Button';

type CapabilityCardProps = {
    title: string;
    number: string;
    variant: "filled" | "outlined";
    texts: string[];
}

function CapabilityCard({ title, number, variant, texts }: CapabilityCardProps) {

  const isOutlined = variant === "outlined";

  return (
    <div className={`rounded-3xl flex flex-col space-y-6 w-full py-10 px-6 xs:px-8 sm:space-y-8 sm:py-12 md:px-10 lg:h-[460px] xl:h-[420px] 2xl:py-14 ${variant == "filled" ? "bg-primary-yellow text-primary-blue h-[400px] sm:h-[450px]" : "text-primary-yellow bg-primary-blue border-4 border-primary-yellow h-[500px] xs:h-[480px] md:h-[520px]"}`}>
        <div className='flex items-center justify-between'>
            <div className='font-bold tracking-wide text-2xl md:text-[32px] lg:text-2xl xl:text-[32px]'>{title}</div>
            <div className='border-[1.5px] rounded-3xl px-4 pt-1 text-xs'>{number}</div>
        </div>
        <div className='flex flex-col space-y-7'>
            {texts.map((text, index) => (
              <CapabilityCardText
                key={index}
                text={text}
              />
            ))}
        </div>
        {isOutlined && 
          <div className='block mt-32 mx-auto xs:mt-28 lg:hidden'>
            <Button
              variant='tertiary'
              text='Work with us'
              arrowType='secondary'
            />
        </div>
        }
    </div>
  )
}

export default CapabilityCard