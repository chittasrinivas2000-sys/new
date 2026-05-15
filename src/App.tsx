import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Contact from "./components/sections/Contact"

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}