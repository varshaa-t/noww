import { usePathname } from "next/navigation";
import { FaArrowDownLong } from "react-icons/fa6";

function DownArrow() {

  const path = usePathname();

  return (
    <FaArrowDownLong className={`text-2xl ${(path === "/" || path === "/services") ? "text-primary-yellow" : "text-primary-blue"}`}/>
  )
}

export default DownArrow