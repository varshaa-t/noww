import React from 'react'
import RightArrow from '../../public/icons/RightArrow';

type ButtonProps = {
    variant: "primary" | "secondary" | "tertiary";
    text: string;
    arrowType: "primary" | "secondary";
}

const variantClasses = {
    "primary": "text-white bg-primary-blue",
    "secondary": "text-primary-blue bg-white",
    "tertiary": "bg-medium-yellow text-primary-blue hover:bg-primary-blue hover:text-medium-yellow"
}

function Button({ variant, text, arrowType }: ButtonProps) {
  return (
    <button className={`group flex items-center space-x-2 text-xl w-fit px-6 py-3 cursor-pointer rounded-4xl hover:bg-medium-yellow hover:text-primary-blue ${variantClasses[variant]}`}>
        <div>{text}</div>
        <RightArrow arrowType={arrowType}/>
    </button>
  )
}

export default Button