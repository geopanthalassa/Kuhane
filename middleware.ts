import { NextRequest, NextResponse } from "next/server";

// Fuerza que el sitio se vea siempre en el dominio real, nunca en la
// dirección "de fábrica" que da Vercel (kuhane.vercel.app) ni en una URL
// de preview — pedido explícito de Andre (19/10/2026): "necesito que
// siempre sea kuhanehostal.com no mas kuhane.vercel". Vercel no permite
// configurar esto como redirect del dominio en el panel (el dominio
// <proyecto>.vercel.app es del sistema y no se puede redirigir desde ahí),
// así que se resuelve acá, a nivel de la propia app.
const CANONICAL_HOST = "kuhanehostal.com";
const ALLOWED_HOSTS = new Set([
  "kuhanehostal.com",
  "www.kuhanehostal.com",
  "localhost:3000",
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (ALLOWED_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.host = CANONICAL_HOST;
  url.port = "";
  // 308: redirect permanente que conserva el método (GET/POST, etc.).
  return NextResponse.redirect(url, 308);
}

export const config = {
  // No intercepta archivos estáticos (_next/*, imágenes, favicon, etc.) —
  // solo páginas. Si la página redirige, esos archivos ya se piden desde
  // el dominio correcto de todas formas.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
