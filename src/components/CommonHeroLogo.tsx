import { usePathname } from 'next/navigation';
import React from 'react'

function CommonHeroLogo() {

  const path = usePathname();

  return (
    <svg className={`size-40 xs:size-44 lg:size-72 xl:size-80 ${path == "/about" ? "text-primary-yellow" : path == "/services" ? "text-light-pink" : "text-medium-yellow"}`} viewBox="0 0 183 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.02331e-05 84.8982L1.86051e-05 121.849L183 45.9013V0L0 2.09716L2.23612e-05 36.5967L140.504 29.1518L2.02331e-05 84.8982Z" fill="currentColor"></path>
        <path d="M183 300.898L183 332L4.848e-06 286.269L1.12124e-05 240.368L136.931 220.004L2.1197e-05 161.572L2.75558e-05 115.799L183 109.79V145.718L40.8369 147.252L183 208.241V250.179L42.4959 269.52L183 300.898Z" fill="currentColor"></path>
    </svg>
  )
}

export default CommonHeroLogo