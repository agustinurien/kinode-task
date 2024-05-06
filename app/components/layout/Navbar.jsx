import Image from "next/image"
import logo from "../../../public/assets/Vector.png"
import { open_Sans } from "@/app/fonts"

const Navbar = () => {
    return (
        <div className={`${open_Sans.className} navBarBack`}>
            <a href="">Build</a>
            <a href="">Documentation</a>
            <a href="/">
                <Image
                    src={logo}
                    height={60}
                    width={60}
                    className="logo"
                ></Image>
            </a>
            <a href="">About Us</a>
            <a href="">Get Involved</a>
        </div>
    )
}

export default Navbar
