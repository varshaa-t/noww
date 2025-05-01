import { FaArrowDownLong } from "react-icons/fa6";

type DownArrowProps = {
  page: "landing" | "about" | "services" | "process";
}

const pageClasses = {
  "landing": "text-primary-yellow",
  "about": "text-primary-blue",
  "services": "text-primary-yellow",
  "process": "text-primary-blue"
}

function DownArrow({ page }: DownArrowProps) {

  return (
    <FaArrowDownLong className={`text-2xl ${pageClasses[page]}`}/>
  )
}

export default DownArrow