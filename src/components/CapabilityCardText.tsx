import React from 'react'

type CapabilityCardTextProps = {
    text: string;
}

function CapabilityCardText({ text }: CapabilityCardTextProps) {

  return (
    <div className='border-b-[1px] leading-tight text-sm md:text-lg'>{text}</div>
  )
}

export default CapabilityCardText