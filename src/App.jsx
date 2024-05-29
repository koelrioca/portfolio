import { BrowserRouter } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import { StarsCanvas } from "./pages/canvas"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <StarsCanvas />
        <div className="relative z-0">
          <About />
          <Skills />
          <Projects />
        </div>
        <div className="relative z-0">
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App