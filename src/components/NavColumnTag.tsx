import { isOpenState } from "@/jotai/atoms/isOpen";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

type NavColumnTagProps = {
    text: string;
    isScrolled?: boolean;
}

function NavColumnTag({text, isScrolled}: NavColumnTagProps) {

  const [isOpen] = useAtom(isOpenState);
  const pathname = usePathname();

  return (
    <li className={`text-[33px] hover:underline underline-offset-[20px] decoration-1 cursor-pointer lg:decoration-auto lg:text-[17px] lg:hover:underline lg:underline-offset-2 ${isOpen ? "text-primary-yellow" : pathname === "/about" || pathname === "/process" ? "text-primary-blue" : isScrolled ? "text-primary-blue": "text-primary-yellow"}`}>
        {text}
    </li>
  )
}

export default NavColumnTag