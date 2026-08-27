import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import RapaNuiSection from "@/components/sections/RapaNuiSection";
import KuhaneSection from "@/components/sections/KuhaneSection";
import ExperienciasSection from "@/components/sections/ExperienciasSection";
import CulturaSection from "@/components/sections/CulturaSection";
import HabitacionesSection from "@/components/sections/HabitacionesSection";
import HuespedesSection from "@/components/sections/HuespedesSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import ResenasSection from "@/components/sections/ResenasSection";
import CTAReservaSection from "@/components/sections/CTAReservaSection";

// Home narrativa: Hero -> Rapa Nui -> Kuhane -> Experiencia -> Cultura ->
// Habitaciones -> Huéspedes -> Galería -> Reseñas -> Reserva.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RapaNuiSection />
        <KuhaneSection />
        <ExperienciasSection />
        <CulturaSection />
        <HabitacionesSection />
        <HuespedesSection />
        <GaleriaSection />
        <ResenasSection />
        <CTAReservaSection />
      </main>
      <Footer />
    </>
  );
}
