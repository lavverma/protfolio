import React from 'react'
import me from "../assets/Lavverma.png";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineArrowUp
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer id='footer'>
        <div>
            <img 
            src={me}
            alt="Author"
            />

            <h2>Lav verma</h2>
            <p><i>If want shine like a sun, first burn like a sun.</i></p>
        </div>

        <aside>
          <h2>Social Media</h2>
          <article>
            <a href='https://www.linkedin.com/in/lav-verma-a57474185/' target={"blank"}>
                <AiFillLinkedin />
            </a>
            <a href='https://github.com/lavverma' target={"blank"}>
                <AiFillGithub />
            </a>
          </article>
        </aside>
        <a href='"#home'>
            <AiOutlineArrowUp />
        </a>
    </footer>

  )
}

export default Footer