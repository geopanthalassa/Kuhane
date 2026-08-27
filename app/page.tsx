import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import RapaNuiSection from "@/components/sections/RapaNuiSection";
import KuhaneSection from "@/components/sections/KuhaneSection";
import ExperienciasSection from "@/components/sections/ExperienciasSection";
import ColaboradoresSection from "@/components/sections/ColaboradoresSection";
import CulturaSection from "@/components/sections/CulturaSection";
import HabitacionesSection from "@/components/sections/HabitacionesSection";
import HuespedesSection from "@/components/sections/HuespedesSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import ResenasSection from "@/components/sections/ResenasSection";
import UbicacionSection from "@/components/sections/UbicacionSection";
import CTAReservaSection from "@/components/sections/CTAReservaSection";

// Home narrativa: Hero -> Rapa Nui -> Kuhane -> Experiencia -> Cultura ->
// Habitaciones -> Huéspedes -> Galería -> Reseñas -> Mapa -> Reserva.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RapaNuiSection />
        <KuhaneSection />
        <ExperienciasSection />
        <ColaboradoresSection />
        <CulturaSection />
        <HabitacionesSection />
        <HuespedesSection />
        <GaleriaSection />
        <ResenasSection />
        <UbicacionSection />
        <CTAReservaSection />
      </main>
      <Footer />
    </>
  );
}
