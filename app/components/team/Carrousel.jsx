"use client"

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Importa las funciones necesarias de Framer Motion
import Image from 'next/image';
import arrow from '../../../public/assets/arrow.png'
import { barlow, open_Sans } from '@/app/fonts';


const Carrousel = () => {

    const [scrollX, setScrollX] = useState(0);

    const team = [
        {
            imageUrl: 'https://kinode.org/static/media/basile.374f44e46d0b4a8f101e.jpeg',
            name: 'Juan Pérez',
            position: 'Desarrollador Frontend',
            description: 'Experto en React y Vue.js, con una pasión por crear interfaces de usuario intuitivas y atractivas.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/doria.b6ca01e47a65e078139b.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/markus.9fb672ac3d6d16889d99.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/joshamy.de1fc894acac764173a0.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/nick.2f6cd67258ffe9eaf63f.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/luc.dfb3bbf77c70cd88cabe.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/edgar.5366319615e441527911.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/will.3851c8458530159529c6.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/akira.c3138f69b7ea36e7a3ef.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/james.7a92e7da0c12011878ac.jpegv',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/drew.858d3f8750a2e4e7de4e.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
        {
            imageUrl: 'https://kinode.org/static/media/steve.130f879e757cbc73f95b.jpeg',
            name: 'María Rodríguez',
            position: 'Diseñadora UI/UX',
            description: 'Diseñadora creativa con experiencia en diseño de interfaces de usuario centradas en el usuario y accesibles.',
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(5);
    const [show, setShow] = useState(false);

    const innerCarrouselControls = useAnimation();
    const controls = useAnimation();

    const handleClickRight = (position) => {
        const nextIndex = (selectedIndex + 1)
        setSelectedIndex(nextIndex)
        innerCarrouselControls.start({ x: (position - 320) });
        setScrollX(position - 320)

    }

    const handleClickLeft = (position) => {
        const nextIndex = (selectedIndex - 1)
        setSelectedIndex(nextIndex)
        innerCarrouselControls.start({ x: (position + 320) });
        setScrollX(position + 320)
    };

    const dataEffect = () => {
        controls.start("showData");
        setShow(true)
    };
    const finishEffect = () => {
        controls.start("default");
        setShow(false)
    };

    return (
        <div className='carrousel'>
            <div

                className='blurEffect1'>
            </div>
            <div

                className='blurEffect2'>
            </div>
            <motion.div
                className='innerCarrousel'

                animate={innerCarrouselControls}>
                {team.map((member, idx) => (
                    <div key={idx} className={selectedIndex === idx ? 'member memberSelected' : 'member'} >
                        <motion.div
                            className='memberDataContainer'>

                            <div style={{ height: "100%", width: "100%" }}>
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
                                        showData: { height: 280 }
                                    }}
                                    initial="default"
                                    animate={selectedIndex === idx && controls}
                                    transition={{
                                        default: { duration: 0.22, delay: 0 }
                                    }}
                                    className={`${open_Sans.className} namePosition`}>
                                    <h4>{member.name}</h4>
                                    <span>Developer</span>
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

                                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus assumenda, minus molestiae eum in pariatur dolor itaque doloribus animi debitis </motion.p>
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

                ></Image>
            </button>
            <button className='bottomRight' onClick={() => handleClickRight(scrollX)}>
                <Image
                    src={arrow}
                    width={40}
                    height={80}
                    className='arrow'
                ></Image>
            </button>
        </div >
    );
};

export default Carrousel;
