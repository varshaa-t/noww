import { isOpenState } from "@/jotai/atoms/isOpen";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

type NavbarIconProps = {
    isScrolled?: boolean;
};

function NavbarIcon({ isScrolled }: NavbarIconProps) {

    const [isOpen] = useAtom(isOpenState);
    const pathname = usePathname();

    return (
        <div className="relative w-7 h-4 flex flex-col justify-between">
            <span className={`absolute w-full h-[3px] transition-all duration-300 
                ${isOpen ? "rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-yellow" : "top-0 left-0"} 
                ${isScrolled || pathname === "/about" || pathname === "/process" ? "bg-primary-blue" : "bg-primary-yellow"}`}
            />
            <span className={`absolute w-full h-[3px] transition-all duration-300 
                ${isOpen ? "opacity-0 scale-0" : "top-1/2 left-0 -translate-y-1/2"} 
                ${isScrolled || pathname === "/about" || pathname === "/process" ? "bg-primary-blue" : "bg-primary-yellow"}`}
            />
            <span className={`absolute w-full h-[3px] transition-all duration-300 
                ${isOpen ? "-rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-yellow" : "bottom-0 left-0"} 
                ${isScrolled || pathname === "/about" || pathname === "/process" ? "bg-primary-blue" : "bg-primary-yellow"}`}
            />
        </div>
    );
}

export default NavbarIcon;
