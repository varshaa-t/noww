import { isOpenState } from "@/jotai/atoms/isOpen";
import { useAtom } from "jotai";

type NavbarIconProps = {
    isScrolled?: boolean;
};

function NavbarIcon({ isScrolled }: NavbarIconProps) {

    const [isOpen] = useAtom(isOpenState);

    return (
        <div className="relative w-7 h-4 flex flex-col justify-between">
            <span className={`absolute w-full h-[3px] transition-all duration-300 
                ${isOpen ? "rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "top-0 left-0"} 
                ${isScrolled ? "bg-primary-blue" : "bg-primary-yellow"}`}
            />
            <span className={`absolute w-full h-[3px] transition-all duration-300 
                ${isOpen ? "opacity-0 scale-0" : "top-1/2 left-0 -translate-y-1/2"} 
                ${isScrolled ? "bg-primary-blue" : "bg-primary-yellow"}`}
            />
            <span className={`absolute w-full h-[3px] transition-all duration-300 
                ${isOpen ? "-rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "bottom-0 left-0"} 
                ${isScrolled ? "bg-primary-blue" : "bg-primary-yellow"}`}
            />
        </div>
    );
}

export default NavbarIcon;
