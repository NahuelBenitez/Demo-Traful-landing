import React, { useState, useEffect } from 'react';
import { Footer } from "./components/Footer";
import { Hero2 } from "./components/Hero2";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Team } from "./pages/Team";
import { Testimonial } from "./pages/Testimonial";
import { Navbar2 } from "./components/NavbarV2";
import WhatsAppButton from "./components/Whatsapp";
import Loader from "./components/Loader"; // Asegúrate de importar tu Loader
import PromoPage from './pages/PromoPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula una carga de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar2 />
          <Hero2 />
          <AboutPage />
          <PromoPage />
          <Testimonial />
          <Team />
          <ContactPage />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

export default App;
