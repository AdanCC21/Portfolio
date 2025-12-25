import Header from "./components/layout/Header"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {

  return (
    <>
      <Header />
      <main className="px-[5%]">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <About />
      </main>
    </>
  )
}

export default App
