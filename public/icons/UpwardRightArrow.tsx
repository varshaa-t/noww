import React from 'react'

type UpwardRightArrowProps = {
  color: "#117640" | "#122a5b";
}

function UpwardRightArrow({color}: UpwardRightArrowProps) {

  return (
    <svg width="56" height="56" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.125" cy="28.125" r="28.125" fill="#F9BC52"></circle>
        <path fillRule="evenodd" clipRule="evenodd" d="M32.085 21.1162L24.486 21.1162L24.486 15.7504L35.5595 15.7504L40.875 15.7504L40.875 32.081L35.5595 32.081L35.5595 25.1574L20.3658 40.344L20.3658 40.3625L20.3473 40.3625L20.345 40.3647L17.8955 40.3647L17.8931 40.3625L15 40.3625L15 24.0318L20.3658 24.0318L20.3658 32.8353L32.085 21.1162Z" fill={color}></path>
    </svg>
  )
}

export default UpwardRightArrow