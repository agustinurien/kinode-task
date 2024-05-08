"use client"

import Image from "next/image"
import treeImage from "../../../public/assets/garden2.png"
import brain from "../../../public/assets/b.png"
import assembly from "../../../public/assets/assembly.png"
import hill from "../../../public/assets/champion.png"
import cmcc from "../../../public/assets/cmcc.png"
import delphi from "../../../public/assets/delphi.png"
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from "react"
import { open_Sans } from "@/app/fonts"
const Partners = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation();
    useEffect(() => {
        const loopAnimation = () => {

            controls.start("animate").then(() => {
                controls.start("animate2", { repeat: Infinity, repeatType: "reverse", ease: "easeInOut", duration: 1.5 })
            });
        }
        loopAnimation()

    }, [])

    useEffect(() => {
        if (isInView) {
            controls.start("start")
        }
    }, [isInView])


    return (
        <div className="partnerBack">
            <div className="treeImageContainer">
                <Image
                    src={treeImage}
                    width={1500}
                    height={1500}
                    className="treeImage"
                    alt="treeImage"
                ></Image>
                <div className="gradientTree">
                </div>
                <div className="gradientBetween">
                </div>
                <div className="gradientBetweenBottom">
                </div>
            </div>
            <div className={`${open_Sans.className} sponsorContainer`}>

                <motion.div
                    variants={{
                        default: { opacity: 0 },
                        start: { opacity: 1 },
                        animate2: { y: 0 },
                        animate: { y: 10 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1 }}
                    className="sponsorCard">
                    <a href="https://www.championhillventures.com/">

                        <div >
                            <Image
                                src={hill}
                                width={100}
                                height={100}
                                alt="ChampionHillImage"
                                className="logoSponsor"
                            ></Image>
                        </div>
                    </a>
                    <h2>Champion Hill</h2>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={{
                        default: { opacity: 0, y: 100 },
                        start: { opacity: 1 },
                        animate2: { y: 100 },
                        animate: { y: 90 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="sponsorCard">
                    <a href="https://assembly.capital/">

                        <div >
                            <Image
                                src={assembly}
                                width={100}
                                height={100}
                                alt="assemblyImage"
                                className="logoSponsor"
                            ></Image>
                        </div>
                    </a>
                    <h2>Assembly</h2>
                </motion.div>

                <motion.div
                    variants={{
                        default: { opacity: 0 },
                        start: { opacity: 1 },
                        animate2: { y: 0 },
                        animate: { y: 10 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="sponsorCard">
                    <a href="https://delphiventures.io/">

                        <div >
                            <Image
                                src={delphi}
                                width={100}
                                height={100}
                                alt="delphiImage"
                                className="logoSponsor"
                            ></Image>
                        </div>
                    </a>
                    <h2>Delphi</h2>
                </motion.div>

                <motion.div
                    variants={{
                        default: { opacity: 0, y: 100 },
                        start: { opacity: 1 },
                        animate2: { y: 100 },
                        animate: { y: 90 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="sponsorCard">
                    <a href="https://www.cmcc.vc/">

                        <div >
                            <Image
                                src={cmcc}
                                width={100}
                                height={100}
                                alt="cmccImage"
                                className="logoSponsor"
                            ></Image>
                        </div>
                    </a>
                    <h2>CMCC</h2>
                </motion.div>

                <motion.div
                    variants={{
                        default: { opacity: 0 },
                        start: { opacity: 1 },
                        animate2: { y: 0 },
                        animate: { y: 10 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="sponsorCard">
                    <a href="https://www.bigbrain.holdings/">

                        <div >
                            <Image
                                src={brain}
                                width={100}
                                height={100}
                                alt="brainImage"
                                className="logoSponsor"
                            ></Image>
                        </div>
                    </a>
                    <h2>Big Brain</h2>
                </motion.div>

            </div>
        </div >
    )
}

export default Partners
