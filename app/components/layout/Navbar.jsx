"use client"

import Image from "next/image"
import logo from "../../../public/assets/Vector.png"
import { open_Sans } from "@/app/fonts"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Navbar = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    const scrollToTeam = (event) => {
        event.preventDefault();
        const teamSection = document.getElementById("team");
        if (teamSection) {
            teamSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToAboutUs = (event) => {
        event.preventDefault();
        const aboutSection = document.getElementById("aboutUs");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        if (isInView) {
            controls.start("start")
        }
    }, [isInView])
    return (
        <div
            ref={ref}
            className={`${open_Sans.className} navBarBack`}>
            <motion.a
                variants={{
                    default: { x: -50, opacity: 0 },
                    start: { x: 0, opacity: 1 }
                }}
                initial="default"
                animate={controls}
                transition={{ duration: 0.3, delay: 0.2 }}
                href="https://kinode.org/build">Build</motion.a>
            <motion.a
                variants={{
                    default: { x: -50, opacity: 0 },
                    start: { x: 0, opacity: 1 }
                }}
                initial="default"
                animate={controls}
                transition={{ duration: 0.3, delay: 0 }}
                href="#" onClick={scrollToAboutUs}>About Us</motion.a>
            <motion.a
                variants={{
                    default: { opacity: 0, scale: 0.5 },
                    start: { opacity: 1, scale: 1 }
                }}
                initial="default"
                animate={controls}
                transition={{ duration: 0.3, delay: 0 }}
                href="/">
                <Image
                    src={logo}
                    height={60}
                    width={60}
                    className="logo"
                    alt="logKinode"
                ></Image>
            </motion.a>
            <motion.a
                variants={{
                    default: { x: 50, opacity: 0 },
                    start: { x: 0, opacity: 1 }
                }}
                initial="default"
                animate={controls}
                transition={{ duration: 0.2, delay: 0 }}
                href="#" onClick={scrollToTeam}>Team</motion.a>
            <motion.a
                variants={{
                    default: { x: 50, opacity: 0 },
                    start: { x: 0, opacity: 1 }
                }}
                initial="default"
                animate={controls}
                transition={{ duration: 0.2, delay: 0.3 }}
                href="https://book.kinode.org/">Documentation</motion.a>

        </div>
    )
}

export default Navbar
