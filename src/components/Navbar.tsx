"use client";

import { useEffect, useState } from "react"
import Logo from "./Logo"
import NavColumnTag from "./NavColumnTag"
import NavbarIcon from "./NavbarIcon";
import LinkedIn from "../../public/icons/LinkedIn";
import Image from "next/image";
import { useAtom } from "jotai";
import { isOpenState } from "@/jotai/atoms/isOpen";
import Link from "next/link";

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useAtom(isOpenState);

    const navBarArray = [
        { text: "About Us",
          route: "/about"
        }, 
        { text: "Services", 
          route: "/services"
        },
        { text: "Our Approach",
          route: "/process"
        },
        { text: "Contact", 
          route: "/contact"
        } 
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        }

        const handleResize = () => {
            if(window.innerWidth > 1024){
                setIsOpen(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

  return (
    <nav className={`fixed z-50 left-0 right-0 w-full transition-all duration-300 
        ${isScrolled ? "bg-primary-yellow" : "bg-transparent"}`}
    >
        <div className="hidden lg:flex lg:justify-between lg:items-end lg:py-6 lg:px-24">
            <Link href={'/'}>
                <Logo isScrolled={isScrolled}/>  
            </Link>
            <ul className="hidden lg:flex lg:space-x-[10vw] xl:space-x-[13vw]">
                {navBarArray.map((element, index) => (
                    <Link 
                        key={index}
                        href={element.route}
                    >
                        <NavColumnTag isScrolled={isScrolled} text={element.text}/>
                    </Link>
                ))}
            </ul>          
        </div>
        {isOpen &&
            <div className="bg-primary-blue h-screen flex flex-col justify-between px-6 py-4 md:px-10 lg:hidden">
                <div className="flex justify-between items-center lg:hidden">
                    <Link href={'/'}>
                        <Logo/>
                    </Link>
                    <div 
                        className="relative w-7 h-4 cursor-pointer lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <NavbarIcon />
                    </div>
                </div>
                <ul className="flex flex-col items-end space-y-6 lg:hidden">
                    {navBarArray.map((element, index) => (
                        <Link
                            key={index}  
                            href={element.route}
                        >
                            <NavColumnTag text={element.text}/>
                        </Link>
                    ))}
                </ul>
                <div className="flex items-center space-x-4 self-end lg:hidden">
                    <div className="text-xl text-primary-yellow">Follow us</div>
                    <LinkedIn/>
                </div>
                <div className="absolute top-[500px] left-0 lg:hidden">
                    <Image
                        width={209} 
                        height={198}
                        src={"/images/arrow.svg"}
                        alt="arrow-icon" 
                    />
                </div>
            </div>
        }
        {!isOpen &&
            <div className="flex justify-between items-end px-6 py-4 md:px-10 lg:hidden">
                <Link href={'/'}>
                    <Logo isScrolled={isScrolled}/>          
                </Link>
                <div 
                    className="relative w-7 h-4 cursor-pointer lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <NavbarIcon isScrolled={isScrolled}/>
                </div>
            </div>
        }
    </nav>
  )
}

export default Navbar