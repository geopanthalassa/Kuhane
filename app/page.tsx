import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import RapaNuiSection from "@/components/sections/RapaNuiSection";
import KuhaneSection from "@/components/sections/KuhaneSection";
import ExperienciasSection from "@/components/sections/ExperienciasSection";
import OtrasExperienciasSection from "@/components/sections/OtrasExperienciasSection";
import CulturaSection from "@/components/sections/CulturaSection";
import HabitacionesSection from "@/components/sections/HabitacionesSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import ResenasSection from "@/components/sections/ResenasSection";
import UbicacionSection from "@/components/sections/UbicacionSection";
import KuhaneEsperaSection from "@/components/sections/KuhaneEsperaSection";
import CTAReservaSection from "@/components/sections/CTAReservaSection";

// Home narrativa: Hero -> Rapa Nui -> Kuhane -> Experiencia -> Cultura ->
// Habitaciones -> Kuhane te espera (video) -> Otras experiencias (tours +
// buceo/cabalgatas) -> Galería -> Reseñas -> Ubicación -> Reserva.
//
// 24/9/2026: Andre había pedido primero mover TODA la sección Experiencias
// debajo del video de Kuhane — se hizo, pero al verlo aclaró que solo
// quería mover la franja de "Kuhane Tours + Otras experiencias en la isla"
// (buceo/cabalgatas), no el carrusel de Bienvenidos/Cultura viva/El
// atardecer. Se revirtió ExperienciasSection a su posición original (entre
// Kuhane y Cultura, como estaba antes de este pedido) y esa franja se
// separó en su propio componente, OtrasExperienciasSection, que es el que
// ahora va entre el video y la Galería. Ver ExperienciasSection.tsx y
// OtrasExperienciasSection.tsx para el detalle de ese corte.
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
        <ExperienciasSection />
        <CulturaSection />
        <HabitacionesSection />
        <KuhaneEsperaSection />
        <OtrasExperienciasSection />
        <GaleriaSection />
        <ResenasSection />
        <UbicacionSection />
        <CTAReservaSection />
      </main>
      <Footer />
    </>
  );
}
