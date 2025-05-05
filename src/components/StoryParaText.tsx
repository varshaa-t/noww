import React from 'react'

type StoryParaTextProps = {
    text: string;
}

function StoryParaText({ text }: StoryParaTextProps) {

  return (
    <div className='font-primary-light md:w-80 lg:w-96 xl:w-[500px] 2xl:w-[600px]'>{text}</div>
  )
}

export default StoryParaText