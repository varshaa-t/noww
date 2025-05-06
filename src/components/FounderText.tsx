import React from 'react'

type FounderTextProps = {
    text: string;
}

function FounderText({ text }: FounderTextProps) {
  return (
    <div className='font-primary-light md:w-[40vw] 2xl:w-[650px]'>{text}</div>
  )
}

export default FounderText