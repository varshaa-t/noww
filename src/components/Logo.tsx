import { isOpenState } from "@/jotai/atoms/isOpen";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

type LogoProps = {
  isScrolled?: boolean;
}

function Logo({isScrolled} : LogoProps) {

  const [isOpen] = useAtom(isOpenState);
  const pathname = usePathname();

  return (
    <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer ${isOpen ? "text-primary-yellow" : pathname === "/about" || pathname === "/process" ? "text-primary-blue" : isScrolled ? "text-primary-blue" : "text-primary-yellow"}`}>
        <path d="M83.8426 0.728882L89.2379 0.728882L78.1486 27.5L71.4465 27.5L71.7528 7.46833L61.9254 27.5L54.3646 27.5L54.3646 0.728882L59.6105 0.728882L59.6105 22.3297L70.0352 0.728882L76.7901 0.728882L75.703 21.2833L83.8426 0.728882Z" fill="currentColor"></path>
        <path d="M115.381 0.728882L119.922 0.728882L113.245 27.5L106.543 27.5L103.57 7.46833L95.038 27.5L88.3545 27.5L87.4771 0.728882L92.723 0.728882L92.9471 21.526L101.852 0.728882L107.975 0.728882L110.799 21.2833L115.381 0.728882Z" fill="currentColor"></path>
        <path d="M17.2786 0.5L22.4312 0.5L22.4312 27.2711L15.6769 27.2711L5.21852 7.55682L5.24621 27.2711L3.39318e-08 27.2711L0.0659274 0.5L6.74937 0.5L17.2786 20.1209L17.2786 0.5ZM25.4569 13.6688C25.3822 5.23053 30.8335 0.426756 38.4504 0.5201C46.0673 0.426756 51.5559 5.23053 51.4625 13.6688C51.5559 22.1072 46.0673 27.1477 38.4504 27.0544C30.8335 27.1477 25.3822 22.1072 25.4569 13.6688ZM38.2637 22.8539L38.6557 22.8539C43.4163 22.8539 46.2913 19.3815 46.2913 13.6688C46.2913 7.93751 43.4163 4.50245 38.6557 4.50245L38.2637 4.50245C33.5031 4.50245 30.6281 7.93751 30.6281 13.6688C30.6281 19.3815 33.5031 22.8539 38.2637 22.8539Z" fill="currentColor"></path>
    </svg>
  )
}

export default Logo