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
                        strings: ["A Developer"],
                        cursor : "",
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterContent"
                    }}
                    />
                    <h4>Committed and goal-oriented Backend developer looking to pursue a career in software engineering. Possess excellent knowledge in HTML, CSS, ECMAScript, JavaScript, NodeJS. ExpressJS, MongoDB, and integration with intuitive problem-solving skills. Passionate about implementing and launching new projects. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.</h4>

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