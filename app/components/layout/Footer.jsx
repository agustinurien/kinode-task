import Image from "next/image"
import logo from "../../../public/assets/Vector.png"
import radius from "../../../public/assets/radius.svg"
import { FaTwitter, FaGithub, FaTelegram, FaYoutube, FaDiscord } from "react-icons/fa";
import { open_Sans } from "@/app/fonts";

const Footer = () => {
    return (
        <section className={`${open_Sans.className} footer`}>

            <div className="footerContent">
                <div className="comunityContainer">
                    <div className="comunityText">

                        <h2>Join the comunity</h2>
                        <span>josh@kinode.org</span>
                    </div>
                </div>


                <div className="containerRadius">
                    <Image
                        src={radius}
                        width={200}
                        height={200}
                        className="radius"
                        alt="radiusVector"
                    ></Image>
                    <div className="contenedorLogoFooter">
                        <Image
                            src={logo}
                            width={1000}
                            height={1000}
                            className="logoFooter"
                            alt="logoKinode"
                        ></Image>
                    </div>
                </div>


                <div className="socials">
                    <a href="https://twitter.com/KinodeOS"><FaTwitter /></a>
                    <a href="https://discord.com/invite/mYDj74NkfP"><FaDiscord /></a>
                    <a href="https://github.com/kinode-dao"><FaGithub /></a>
                    <a href="https://t.me/uqbarnetwork"><FaTelegram /></a>
                    <a href="https://www.youtube.com/@kinodeOS"><FaYoutube /></a>
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
