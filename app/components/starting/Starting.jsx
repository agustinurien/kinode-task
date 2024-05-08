"use client"
import Image from "next/image"
import kinode from "../../../public/assets/kinode.png"
import { open_Sans } from "@/app/fonts"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Starting = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("start")
        }
    }, [isInView])
    return (
        <section
            ref={ref}
            className="containerStart">
            <div className="content">

                <motion.div
                    variants={{
                        default: { y: 100, opacity: 0 },
                        start: { y: 0, opacity: 1 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 0.4, delay: 0 }}
                    className="kinodeTextContainer">
                    <Image
                        src={kinode}
                        height={400}
                        width={400}
                        alt="title"
                        priority={true}
                        className="kinodeTextLogo"

                    >
                    </Image>
                    <motion.h2
                        variants={{
                            default: { opacity: 0 },
                            start: { opacity: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className={`${open_Sans.className} subHeadline`}>A decentralized OS, built for crypto.</motion.h2>
                </motion.div>

            </div>
        </section>
    )
}

export default Starting
