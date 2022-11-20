import React from 'react'
// import sass from "../assets/skillsLogo/sass.png"
import js from "../assets/skillsLogo/js.png"
import nodejs from "../assets/skillsLogo/nodejs.png"
import react from "../assets/skillsLogo/react.png"
import css from "../assets/skillsLogo/css.png"
import html from "../assets/skillsLogo/html.png"
import socket from "../assets/skillsLogo/socket.png"
import mongodb from "../assets/skillsLogo/mongodb.png"
import express from "../assets/skillsLogo/express.png"
import aws from "../assets/skillsLogo/aws.png"
import redis from "../assets/skillsLogo/redis.png"
import git from "../assets/skillsLogo/git.png"
import gitHub from "../assets/skillsLogo/gitHub.png"
import postman from "../assets/skillsLogo/postman.png"

// import bootstrap from "../assets/skillsLogo/bootstrap.png"


const Skills = () => {
  return (
    <div id='skills'>
        <h2>Skills</h2>
       <section>
       <img src={js} />
        <img src={nodejs} />
        <img src={express} />
        <img src={mongodb} />
        <img src={git} />
        <img src={gitHub} />
        <img src={socket} />
        <img src={html} />
        <img src={css} />
        <img src={react} />
        {/* <img src={sass} />
        <img src={bootstrap} /> */}
        <img src={aws} />
        <img src={redis} />
        <img src={postman} />
       </section>
    </div>
  )
}

export default Skills