"use client"
import { barlow, open_Sans } from "@/app/fonts"

const AboutUs = () => {
    return (
        <section className="aboutUsBackground">
            <section className={`${open_Sans.className} aboutUsContainer`}>
                <div className="subTitleContainer">
                    <h2 >ABOUT US</h2>
                </div>
                <div className="contentContainer">
                    <div className="marginDiv">
                        <h3>Global Consensus, Local Compute</h3>
                        <p className={`${barlow.className}`}>Kinode OS combines the power of decentralized infrastructure with the security of sovereign computing. Execute smart contracts, run local AI, and message peers directly; all on a single integrated system.</p>
                    </div>
                    <div>
                        <h3>Public Cloud Infrastructure</h3>
                        <p className={`${barlow.className}`}>Enjoy lightning-quick cloud processing and data storage without corporate intermediaries. A high-bandwidth distributed network as powerful as AWS and secure as Ethereum.</p>
                    </div>
                    <div className="marginDiv">
                        <h3>Portable, Scalable, Usable</h3>
                        <p className={`${barlow.className}`}>Built on Wasm modules, Kinode OS is the first large-scale peer-to-peer network designed to be run on any machine by millions of users in dozens of programming languages.</p>
                    </div>
                    <div>
                        <h3>A Bespoke Internet Experience</h3>
                        <p className={`${barlow.className}`}>Explore the internet from the safety of your personal node, customized for your web usage tendencies. Control your data, own your applications, design your perfect internet.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AboutUs
