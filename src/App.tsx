import { useRef } from "react"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Achievements from "./pages/Achievements"

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const achivementRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Header homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} achivementRef={achivementRef} aboutRef={aboutRef} />
      <main className="flex flex-col gap-y-8">
        <Home pageRef={homeRef} />
        <Skills pageRef={skillsRef} />
        <Projects pageRef={projectsRef} />
        <Achievements pageRef={achivementRef}/>
        <About pageRef={aboutRef} />
      </main>
      <Footer />
    </>
  )
}

export default App
