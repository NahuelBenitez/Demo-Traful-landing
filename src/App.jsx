import React, { useState, useEffect } from 'react';
import { Footer } from "./components/Footer";
import { Hero2 } from "./components/Hero2";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Team } from "./pages/Team";
import { Testimonial } from "./pages/Testimonial";
import { Navbar2 } from "./components/NavbarV2";
import WhatsAppButton from "./components/Whatsapp";
import Loader from "./components/Loader"; 
import PromoPage from './pages/PromoPage';
import { useInView } from 'react-intersection-observer';

const App = () => {
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
          <SectionWithFadeIn>
            <AboutPage />
          </SectionWithFadeIn>
          <SectionWithFadeIn>
            <PromoPage />
          </SectionWithFadeIn>
          <SectionWithFadeIn>
            <Testimonial />
          </SectionWithFadeIn>
          <SectionWithFadeIn>
            <Team />
          </SectionWithFadeIn>
          <SectionWithFadeIn>
            <ContactPage />
          </SectionWithFadeIn>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
};

// Componente para manejar la aparición al hacer scroll
const SectionWithFadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Se activa cuando el 10% del componente es visible
  });

  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default App;
