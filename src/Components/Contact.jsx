import React, { useState } from 'react'
import { AiFillPhone,
    AiOutlineMail } from "react-icons/ai"
import toast from "react-hot-toast"
import vg from "../assets/vg.png"
import { motion } from "framer-motion"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        console.log(name, email, text)
        toast.success("Message successfully sent")
        setName("")
        setEmail("")
        setText("")
    };

    const animation = {
        icon: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        }
    }

    return (
        <div id='contact'>
            <section>
                <motion.div onSubmit={submit} {...animation.icon}>
                    <h2>Contact Me</h2>
                    <article>
                        <a href="tel:8573007234" target={"blank"}>
                            <AiFillPhone /> <h4>Call me at 8573007234</h4>
                        </a>
                        <a href="mailto:lavverma109@gmail.com">
                            <AiOutlineMail /> <h4>lavverma109@gmail.com</h4>
                        </a>
                    </article>
                    {/* <input
                        type="text"
                        placeholder="Write Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        type="email"
                        placeholder="Write Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Write Your Message"
                        required value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <motion.button {...animation.button} type="submit">Send</motion.button> */}
                </motion.div>
            </section>
            <aside>
                <img src={vg} alt="" />
            </aside>
        </div>

    )
}

export default Contact