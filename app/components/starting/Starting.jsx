"use client"
import Image from "next/image"
import kinode from "../../../public/assets/kinode.png"
import logo from "../../../public/assets/Vector.png"
import { open_Sans } from "@/app/fonts"
import { motion } from "framer-motion"

const Starting = () => {
    return (
        <section
            className="containerStart">
            <div className="content">

                <div className="kinodeTextContainer">
                    <Image
                        src={kinode}
                        height={"auto"}
                        width={"auto"}
                        alt="title"
                    >
                    </Image>
                    <h2 className={`${open_Sans.className} subHeadline`}>A decentralized OS, built for crypto.</h2>
                </div>

            </div>
        </section>
    )
}

export default Starting
