import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 exige declarar explícitamente qué valores de "quality" se
    // permiten (por defecto solo deja pasar 75, y cualquier otro valor se
    // reemplaza en silencio por el más cercano de la lista). Sin esto, el
    // quality={90} del banner de aeropuerto se ignoraba y volvía a 75.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
