"use client";

import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapaPin } from "@/lib/content/types";
import { useContent } from "@/lib/content/LocaleProvider";

// Pines propios (no el ícono azul por defecto de Leaflet) para que combinen
// con la paleta de Kuhane: teal-deep con anillo dorado para Kuhane,
// turquesa para las experiencias/puntos de interés.
function pinIcon(pin: MapaPin) {
  const isKuhane = pin.tipo === "kuhane";
  const bg = isKuhane ? "#0f3638" : "#24a7a6";
  const ring = isKuhane ? "#ddc9a3" : "#fcfaf5";
  const size = isKuhane ? 26 : 18;

  return L.divIcon({
    className: "",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:9999px;
      background:${bg};border:2.5px solid ${ring};
      box-shadow:0 2px 8px rgba(0,0,0,0.35);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function UbicacionMap() {
  const { ubicacion } = useContent();
  const pins = ubicacion.pins;
  const icons = useMemo(() => new Map(pins.map((p) => [p.id, pinIcon(p)])), [pins]);

  return (
    <div className="h-full w-full overflow-hidden [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:font-sans">
      <MapContainer
        center={[ubicacion.center.lat, ubicacion.center.lng]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {pins.map((pin) => (
          <Marker key={pin.id} position={[pin.lat, pin.lng]} icon={icons.get(pin.id)}>
            <Popup>
              <p className="text-sm font-semibold text-stone">{pin.nombre}</p>
              <p className="mt-1 max-w-[180px] text-xs leading-relaxed text-stone-soft">
                {pin.descripcion}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
