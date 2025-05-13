import React from 'react'
import { GoArrowRight } from "react-icons/go";

type RightArrowProps = {
  arrowType: "primary" | "secondary";
}

const arrowTypeClasses = {
  "primary": "text-medium-yellow",
  "secondary": "text-primary-blue"
}

function RightArrow({ arrowType }: RightArrowProps) {
  return (
    <GoArrowRight className={`text-2xl group-hover:text-primary-blue ${arrowTypeClasses[arrowType]}`}/>
  )
}

export default RightArrow