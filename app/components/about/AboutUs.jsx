"use client"
import { barlow, open_Sans } from "@/app/fonts"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
const AboutUs = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()


    useEffect(() => {
        if (isInView) {
            controls.start("start")
        }
    }, [isInView])


    return (
        <section id="aboutUs" className="aboutUsBackground">
            <section
                className={`${open_Sans.className} aboutUsContainer`}>
                <div className="subTitleContainer">
                    <motion.h2
                        variants={{
                            default: { opacity: 0, scale: 0.9 },
                            start: { opacity: 0.5, scale: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0 }}
                    >ABOUT US</motion.h2>
                </div>
                <div className="contentContainer">
                    <motion.div
                        variants={{
                            default: { y: 50, opacity: 0 },
                            start: { y: 0, opacity: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="marginDiv">
                        <h3>Global Consensus, Local Compute</h3>
                        <p className={`${barlow.className}`}>Kinode OS combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly; all on a single integrated system.</p>
                    </motion.div>
                    <motion.div
                        variants={{
                            default: { y: 50, opacity: 0 },
                            start: { y: 0, opacity: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3>Public Cloud Infrastructure</h3>
                        <p className={`${barlow.className}`}>Enjoy lightning-quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and secure as Ethereum.</p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={{
                            default: { y: 50, opacity: 0 },
                            start: { y: 0, opacity: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="marginDiv">
                        <h3>Portable, Scalable, Usable</h3>
                        <p className={`${barlow.className}`}>Built on Wasm modules, Kinode OS is the first large-scale peer-to-peer network designed to be run on any machine by millions of users in dozens of programming languages.</p>
                    </motion.div>
                    <motion.div
                        variants={{
                            default: { y: 50, opacity: 0 },
                            start: { y: 0, opacity: 1 }
                        }}
                        initial="default"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <h3>A Bespoke Internet Experience</h3>
                        <p className={`${barlow.className}`}>Explore the internet from the safety of your personal node, customized for your web usage tendencies. Control your data, own your applications, design your perfect internet.</p>
                    </motion.div>
                </div>
            </section>
        </section>
    )
}

export default AboutUs
