import Image from "next/image"
import logo from "../../../public/assets/Vector.png"
import radius from "../../../public/assets/radius.svg"
import { FaTwitter, FaGithub, FaTelegram, FaYoutube, FaDiscord } from "react-icons/fa";
import { open_Sans } from "@/app/fonts";

const Footer = () => {
    return (
        <section className={`${open_Sans.className} footer`}>

            <div className="footerContent">
                <div className="comunity">
                    <h2>Join the comunity</h2>
                    <span>josh@kinode.org</span>
                </div>


                <div className="containerRadius">
                    <Image
                        src={radius}
                        width={200}
                        height={200}
                        className="radius"
                    ></Image>
                    <div className="contenedorLogoFooter">
                        <Image
                            src={logo}
                            width={1000}
                            height={1000}
                            className="logoFooter"
                        ></Image>
                    </div>
                </div>


                <div className="socials">
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaDiscord /></a>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaTelegram /></a>
                    <a href=""><FaYoutube /></a>
                </div>
            </div>

            <div className="rights">
                <span>Copyright ©2024 KINODE. All Rights Reserved.</span>
            </div>
            <div className="gradientFooter">

            </div>
        </section>
    )
}

export default Footer
