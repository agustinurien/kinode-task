"use client"

import Image from "next/image"
import stairs from "../../../public/assets/stairs.svg"
import { open_Sans } from "@/app/fonts"
import Carrousel from "./Carrousel"
import { Suspense, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useAnimation, useInView } from "framer-motion"

const DynamicCarrousel = dynamic(() => import('./Carrousel'));

const Team = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()


    useEffect(() => {
        if (isInView) {
            controls.start("start")
        }
    }, [isInView])
    return (
        <section >
            <div className="teamPreImage">
                <Image
                    src={stairs}
                    height={1000}
                    width={1000}
                    alt="stairsImage"
                    className="stairs"
                    priority={true}
                ></Image>
                <div className="teamSubtitle_Container">
                    <motion.h2
                        variants={{
                            default: { opacity: 0, scale: 0.9 },
                            start: { opacity: 0.5, scale: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0 }}
                        id="team" className={`${open_Sans.className}`}>TEAM</motion.h2>
                </div>
            </div>
            <div ref={ref} className="teamBackground">


                <motion.div
                    variants={{
                        default: { width: "60%" },
                        start: { width: 0 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1, delay: 0 }}
                    className='framerMotionEffect'></motion.div>
                <motion.div
                    variants={{
                        default: { width: "60%" },
                        start: { width: -0 }
                    }}
                    initial="default"
                    animate={controls}
                    transition={{ duration: 1, delay: 0 }}
                    className='framerMotionEffect2'></motion.div>



                <Suspense fallback={<div style={{ color: "white" }}>Loading Carrousel...</div>}>
                    <DynamicCarrousel />
                </Suspense>

            </div>
        </section>
    )
}

export default Team
