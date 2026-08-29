import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Placeholder favicon: a simple brand-colored mark using the site's
// initial. Swap for the real Kuhane icon (public/logo) once available.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F3638",
          color: "#B99B6B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "serif",
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
