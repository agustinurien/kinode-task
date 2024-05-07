"use client"

import Image from "next/image"
import logo from "../../../public/assets/Vector.png"
import { open_Sans } from "@/app/fonts"
import { motion } from "framer-motion"

const Navbar = () => {

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
    return (
        <motion.div
            className={`${open_Sans.className} navBarBack`}>
            <a href="https://kinode.org/build">Build</a>
            <a href="#" onClick={scrollToAboutUs}>About Us</a>
            <a href="/">
                <Image
                    src={logo}
                    height={60}
                    width={60}
                    className="logo"
                    alt="logKinode"
                ></Image>
            </a>
            <a href="#" onClick={scrollToTeam}>Team</a>
            <a href="https://book.kinode.org/">Documentation</a>

        </motion.div>
    )
}

export default Navbar
