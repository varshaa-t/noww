
type NavColumnTagProps = {
    text: string;
    isScrolled?: boolean;
}

function NavColumnTag({text, isScrolled}: NavColumnTagProps) {

  return (
    <li className={`text-[33px] hover:underline underline-offset-[20px] decoration-1 cursor-pointer lg:decoration-auto lg:text-[17px] lg:hover:underline lg:underline-offset-2 ${isScrolled ? "text-primary-blue": "text-primary-yellow"}`}>
        {text}
    </li>
  )
}

export default NavColumnTag