"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion'; // Importa las funciones necesarias de Framer Motion
import Image from 'next/image';
import arrow from '../../../public/assets/arrow.png'
import { barlow, open_Sans } from '@/app/fonts';


const Carrousel = () => {

    const [scrollX, setScrollX] = useState(0);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })




    const team = [
        {
            imageUrl: 'https://kinode.org/static/media/doria.b6ca01e47a65e078139b.jpeg',
            name: 'Doria',
            position: 'Lead Develeoper',
            description: 'Doria has been a passionate researcher and hobbyist investor in cryptocurrency since 2013. A lifelong programmer, she specializes in distributed systems and functional programming. Building Kinode has taught her about project management and team building. When she is not busy fixing bugs, her time is spent traveling, reading science-fiction, and taking lindy walks.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/markus.9fb672ac3d6d16889d99.jpeg',
            name: 'Markus',
            position: 'Developer',
            description: 'Markus made a brief appearance in tradfi before succumbing to the zoomer call of crypto. In the Ethereum ecosystem, he developed a lending protocol and NFT marketplace and now contributes to Kinode infrastructure and userspace apps.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/joshamy.de1fc894acac764173a0.jpeg',
            name: 'Josh',
            position: 'Comunity Manager',
            description: 'Josh holds an A.B. in Philosophy (Hons) and an M.A. in Applied Linguistics from Georgia State University. He is a former Marine. Before working at Kinode, he spent a decade teaching English and Computer Science in Japan, Turkey, and China. He currently resides in El Salvador with his family.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/nick.2f6cd67258ffe9eaf63f.jpeg',
            name: 'Nick',
            position: 'Developer',
            description: 'Nick holds a PhD from the University of Chicago in Physical Chemistry, where he studied the structure of complex liquids using computer simulations. Before joining Kinode, he worked as a Backend Software Engineer at an Automatic Speech Recognition startup, building a searchable archive for Zoom recordings.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/luc.dfb3bbf77c70cd88cabe.jpeg',
            name: 'Luc',
            position: 'Developer',
            description: 'Luc started out working with games for a decade, slowly moving over to ML, with decentralization being his key focus.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/basile.374f44e46d0b4a8f101e.jpeg',
            name: 'Timothy',
            position: 'CEO',
            description: 'Timothy has over a decade of experience as a programmer, developer, and business leader. He has founded multiple successful web 3 companies and has served on the board of the Urbit Foundation, where he has dedicated himself to the project of building blockchain functionality into the Urbit stack.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/edgar.5366319615e441527911.jpeg',
            name: 'Edgar',
            position: 'Creative Director',
            description: 'Edgar holds a B.A. from Harvard University and an M.F.A. in Creative Writing from the University of Montana. He has worked as a writer and advisor for numerous Web 3 projects and co-hosts the popular technology podcast The Network Age. He has taught writing at institutions of all levels, from universities to prisons to private seminars.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/will.3851c8458530159529c6.jpeg',
            name: 'Will',
            position: 'Developer',
            description: 'Will holds a BA from the University of Virginia and an MBA from UCLA. He has worked as a frontend, mobile, and full-stack engineer for large companies, nascent startups, and secret societies.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/akira.c3138f69b7ea36e7a3ef.jpeg',
            name: 'Akira',
            position: 'Developer',
            description: 'Akira holds a B.A. in Linguistics and Chinese. He is a beef cattle farmer and musician who has worked as a developer for both startups and government contractors.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/james.7a92e7da0c12011878ac.jpeg',
            name: 'James',
            position: 'Developer',
            description: 'James has a history from the early days of DeFi, having built and audited several projects on Ethereum mainnet. He is a techno optimist passionate about creating a peer to peer user-owned-and-operated internet. In his free time, he consumes both fiction and science fiction and indulges in lindy walks when available.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/drew.858d3f8750a2e4e7de4e.jpeg',
            name: 'Dob',
            position: 'Developer',
            description: 'Dob studied Computer Science and Mathematics at the University of Virginia before dropping out to work as a full time smart contract engineer and developer for multiple startups.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/steve.130f879e757cbc73f95b.jpeg',
            name: 'Deckard',
            position: 'Buisness Development and Investor',
            description: 'Deckard has over 10 years experience in venture capital and market making, having financed companies in sectors ranging from resource management to biotechnology, developing business models and management strategies. He also has extensive experience in business development for web 3, in particular launching ICOs and listing tokens on cryptocurrency exchanges.',
        },]

    const [selectedIndex, setSelectedIndex] = useState(5);

    const [show, setShow] = useState(false);

    const innerCarrouselControls = useAnimation();
    const controls = useAnimation();

    const handleClickRight = (position) => {

        if (position === -1920) {
            innerCarrouselControls.start({ x: 1600 }, { duration: 0.8 });
            setSelectedIndex(0)
            setScrollX(1600)
        } else {
            const nextIndex = (selectedIndex + 1)
            setSelectedIndex(nextIndex)


            innerCarrouselControls.start({ x: (position - 320) });
            setScrollX(position - 320)

        }

    }

    const handleClickLeft = (position) => {
        console.log(position)
        if (position === 1600) {
            innerCarrouselControls.start({ x: -1920 }, { duration: 0.8 });
            setSelectedIndex(11)
            setScrollX(-1920)
        } else {
            const nextIndex = (selectedIndex - 1)
            setSelectedIndex(nextIndex)
            innerCarrouselControls.start({ x: (position + 320) });
            setScrollX(position + 320)

        }
    };

    const dataEffect = () => {
        controls.start("showData");
        setShow(true)
    };
    const finishEffect = () => {
        controls.start("default");
        setShow(false)
    };

    useEffect(() => {
        if (isInView) {
            controls.start("start")
        }
    }, [isInView])

    return (
        <div className='carrousel'>

            <div className='blurEffect1'></div>
            <div className='blurEffect2'></div>


            <motion.div
                className='innerCarrousel'

                animate={innerCarrouselControls}>
                {team.map((member, idx) => (
                    <div key={idx} className={selectedIndex === idx ? 'member memberSelected' : 'member'} >
                        <motion.div
                            className='memberDataContainer'>

                            <div className='shownData' style={{ height: "100%", width: "100%" }}>
                                <div className={selectedIndex === idx ? '' : 'memberBlur'}>
                                </div>
                                <Image
                                    src={member.imageUrl}
                                    width={600}
                                    height={600}
                                    alt={member.name}
                                    className='memberProfileImage'
                                >
                                </Image>

                                <motion.div
                                    variants={{
                                        default: { height: 70 },
                                        showData: { height: 450 }
                                    }}
                                    initial="default"
                                    animate={selectedIndex === idx && controls}
                                    transition={{
                                        default: { duration: 0.22, delay: 0 }
                                    }}
                                    className={`${open_Sans.className} namePosition`}>
                                    <h4>{member.name}</h4>
                                    <span>{member.position}</span>
                                </motion.div>

                            </div>
                            {
                                selectedIndex === idx &&

                                <motion.div
                                    onMouseOver={() => dataEffect()}
                                    onMouseOut={() => finishEffect()}
                                    className='memberData'>
                                    {
                                        show === true &&
                                        <div
                                            className='descriptionMember'
                                        >
                                            <motion.p
                                                className={`${barlow.className}`}
                                                variants={{
                                                    default: { opacity: 0 }
                                                }}
                                                initial="default"
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.22, delay: 0.2 }}

                                            >{member.description}</motion.p>
                                        </div>
                                    }
                                </motion.div>
                            }

                        </motion.div>

                    </div>
                ))}
            </motion.div>
            <button className='bottomLeft' onClick={() => handleClickLeft(scrollX)}>
                <Image
                    src={arrow}
                    width={40}
                    height={80}
                    className='arrow'
                    alt='leftArrow'

                ></Image>
            </button>
            <button className='bottomRight' onClick={() => handleClickRight(scrollX)}>
                <Image
                    src={arrow}
                    width={40}
                    height={80}
                    className='arrow'
                    alt='rightArrow'
                ></Image>
            </button>
        </div >
    );
};

export default Carrousel;
