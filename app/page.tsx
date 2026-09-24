import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import RapaNuiSection from "@/components/sections/RapaNuiSection";
import KuhaneSection from "@/components/sections/KuhaneSection";
import ExperienciasSection from "@/components/sections/ExperienciasSection";
import CulturaSection from "@/components/sections/CulturaSection";
import HabitacionesSection from "@/components/sections/HabitacionesSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import ResenasSection from "@/components/sections/ResenasSection";
import UbicacionSection from "@/components/sections/UbicacionSection";
import KuhaneEsperaSection from "@/components/sections/KuhaneEsperaSection";
import CTAReservaSection from "@/components/sections/CTAReservaSection";

// Home narrativa: Hero -> Rapa Nui -> Kuhane -> Cultura -> Habitaciones ->
// Kuhane te espera (video) -> Experiencias -> Galería -> Reseñas ->
// Ubicación -> Reserva.
//
// 24/9/2026: Andre pidió que Experiencias quede debajo del video de Kuhane
// (antes iba justo después de KuhaneSection, arriba de Cultura). La idea,
// en sus palabras, es una experiencia inmersiva: primero conoces la isla,
// después Kuhane (incluido el video "Kuhane te espera"), después las
// habitaciones, y recién ahí se ofrecen los tours/experiencias — no antes.
// Se movió solo ExperienciasSection; el resto del orden (Cultura entre
// Kuhane y Habitaciones) no lo tocó.
//
// Nota: la sección "Comunidad" (HuespedesSection) queda fuera del home
// hasta que haya fotos reales de huéspedes — no publicar espacios vacíos.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RapaNuiSection />
        <KuhaneSection />
        <CulturaSection />
        <HabitacionesSection />
        <KuhaneEsperaSection />
        <ExperienciasSection />
        <GaleriaSection />
        <ResenasSection />
        <UbicacionSection />
        <CTAReservaSection />
      </main>
      <Footer />
    </>
  );
}
