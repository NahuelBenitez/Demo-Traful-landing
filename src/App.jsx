import { Footer } from "./components/Footer"
import { Hero2 } from "./components/Hero2"
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import { Navbar2 } from "./components/NavbarV2"
import WhatsAppButton from "./components/Whatsapp"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { Team } from "./pages/Team"
import { Testimonial } from "./pages/Testimonial"


function App() {


  return (
    <>
      {/* <Navbar />       */}
      <Navbar2 />
      {/* <HeroSection /> */}
      <Hero2 />
      <AboutPage />
      <Testimonial />
      <Team />
      <ContactPage />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
