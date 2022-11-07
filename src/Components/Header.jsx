import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menu , setMenu}) => {
  return (
    <>
    <nav>
     <NavContent setMenu={setMenu} />
    </nav>
    <button className="navBtn" onClick={()=> setMenu(!menu)}>
      <AiOutlineMenu />
     </button>
    </>
  )
}

export const Menu = ({menu ,setMenu}) => {
  return (
    <div className={`menu ${menu ? "menuCome" : "" }`}>
        <NavContent setMenu={setMenu} />
    </div>
  )
}

const NavContent = ({setMenu}) =>{
    return  ( 
    <>
       <h2>Lav.</h2>
      <div>
          <a onClick={()=> setMenu(false)} href='#home'>Home</a>
          <a onClick={()=> setMenu(false)} href='#skills'>Skills</a>
          <a onClick={()=> setMenu(false)} href='#projects'>Projects</a>
          <a onClick={()=> setMenu(false)} href='#experience'>Experience</a>
          <a onClick={()=> setMenu(false)} href='#contact'>Contact Me</a>
      </div>
      <a href="mailto:lavverma109@gmail.com">
          <button>Email</button>
      </a>
      </>
      )
  };

export default Header;