import Header , {Menu} from "./Components/Header"
import Home from "./Components/Home"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Experience from "./Components/Experience"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import {Toaster} from "react-hot-toast"
import { useState } from "react"

function App () {
   const [menu , setMenu] = useState(false)
  return (
   <>
      <Menu menu={menu} setMenu={setMenu}/>
      <Header menu={menu} setMenu={setMenu} />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Toaster />
   </>
   )
}

export default App
