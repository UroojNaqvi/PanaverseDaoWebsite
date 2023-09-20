import Logo from "/public/Logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
    <Wrapper>
    <div className="flex justify-between py-4 items-center" >
        {/* logo */}
        <div>
            {/* <h2 className= "text-xl font-bold">Panaverse Doa</h2> */}
            <Image src={Logo} alt="Panaverse dao logo"/>
        </div>
        {/* Navigation Bar */}
        <ul className="flex space-x-8 font-medium">
            <li >
                <Link href={"/"}> 
                Home
                </Link>
                </li>
            <li>
           <Link href={"/courses"}>
           Courses
           </Link>
           </li>
        </ul>

    </div>
    </Wrapper>
    </header>
  )
}

export default Header