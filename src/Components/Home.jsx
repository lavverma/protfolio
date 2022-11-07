import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/Lav.png"

const Home = () => {
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id='home' >
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi... I am <br /> Lav verma
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Nodejs Developer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterContent"
                    }}
                    />

                    <div>
                        <a href="mailto:lavverma109@gmail.com"> Hire Me</a>
                        <a href="#projects">Projects <BsArrowUpRight /></a>
                    </div>
                </div>
            </section>
            <section>
                <img src={me} />
            </section>
            <BsChevronDown />
        </div >
    )
}

export default Home