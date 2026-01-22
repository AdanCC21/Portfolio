import { useRef } from "react"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Header homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} experienceRef={experienceRef} aboutRef={aboutRef} />
      <main>
        <Home pageRef={homeRef} />
        <Skills pageRef={skillsRef} />
        <Projects pageRef={projectsRef} />
        <Experience pageRef={experienceRef} />
        <About pageRef={aboutRef} />
      </main>
      <Footer />
    </>
  )
}

export default App
