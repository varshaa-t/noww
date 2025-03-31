import React from 'react'
import RightArrow from '../../public/icons/RightArrow';

type ButtonProps = {
    variant: "primary" | "secondary";
    text: string;
}

const variantClasses = {
    "primary": "text-white bg-primary-blue",
    "secondary": "text-primary-blue bg-white"
}

function Button({ variant, text }: ButtonProps) {
  return (
    <button className={`group flex items-center space-x-2 text-xl w-fit px-6 py-3 cursor-pointer rounded-4xl hover:bg-medium-yellow hover:text-primary-blue ${variantClasses[variant]}`}>
        <div>{text}</div>
        <RightArrow/>
    </button>
  )
}

export default Button