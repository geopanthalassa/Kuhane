"use client";

import { useState } from "react";
import { useContent } from "@/lib/content/LocaleProvider";

// Botón flotante de WhatsApp. Antes de abrir el chat, le ofrece al
// visitante dejar su número — si lo hace, queda guardado como contacto en
// Nuku OS (tabla `guests`, source: "whatsapp_widget") para poder hacer
// seguimiento más adelante aunque no termine reservando. Dejar el número
// es opcional: "Escribir directo" abre WhatsApp igual, sin guardar nada.
//
// Nuku OS está en otro dominio (nuku-os-app.vercel.app), así que esto le
// pega a app/api/public/leads de ese proyecto — la única ruta pública de
// Nuku OS pensada para que la llame el sitio de Kuhane desde el navegador.
const NUKU_OS_ORIGIN = "https://nuku-os-app.vercel.app";
const KUHANE_ACCOUNT_ID = "057a625c-9036-4b1d-957b-8c436f71b4cd";

function whatsappDigits(raw: string) {
  return raw.replace(/[^0-9]/g, "");
}

export default function WhatsAppButton() {
  const { site, ui } = useContent();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);

  function openChat() {
    const number = whatsappDigits(site.whatsapp as string);
    const text = encodeURIComponent(ui.whatsapp.chatMessage);
    window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  async function handleContinue() {
    const trimmed = phone.trim();
    if (!trimmed) {
      openChat();
      return;
    }
    setSending(true);
    try {
      await fetch(`${NUKU_OS_ORIGIN}/api/public/leads`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ account_id: KUHANE_ACCOUNT_ID, phone: trimmed, source: "whatsapp_widget" }),
      });
    } catch {
      // Si falla el guardado del lead no bloqueamos al visitante — igual
      // lo mandamos a WhatsApp, que es lo que vino a hacer.
    } finally {
      setSending(false);
      openChat();
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open && (
        <div className="w-72 rounded-2xl border border-stone/10 bg-warm-white p-4 shadow-[0_12px_36px_rgba(0,0,0,0.18)]">
          <p className="text-sm font-medium text-stone">{ui.whatsapp.heading}</p>
          <p className="mt-1 text-xs leading-relaxed text-stone-soft">
            {ui.whatsapp.subtext}
          </p>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={ui.whatsapp.phonePlaceholder}
            type="tel"
            className="mt-3 w-full rounded-lg border border-stone/15 bg-sand/40 px-3 py-2 text-sm text-stone outline-none focus:border-teal"
          />
          <button
            type="button"
            onClick={handleContinue}
            disabled={sending}
            className="mt-3 w-full rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {sending ? ui.whatsapp.sending : ui.whatsapp.continueBtn}
          </button>
          <button
            type="button"
            onClick={openChat}
            className="mt-2 w-full text-center text-xs text-stone-soft underline decoration-stone/20 underline-offset-2 hover:text-stone"
          >
            {ui.whatsapp.skipBtn}
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={ui.whatsapp.openAria}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.3.65 4.44 1.78 6.27L4 29l7.9-1.75c1.73.94 3.7 1.47 5.8 1.47h.01c6.62 0 12.02-5.4 12.02-12.02C29.73 8.4 24.33 3 17.71 3h-1.7zm.01 22.03h-.01c-1.9 0-3.76-.51-5.4-1.48l-.39-.23-4.68 1.04 1.06-4.55-.25-.4a10 10 0 0 1-1.53-5.4C4.83 8.9 9.9 3.84 16 3.84c2.94 0 5.7 1.15 7.78 3.23a10.9 10.9 0 0 1 3.22 7.78c0 6.1-5.07 11.18-10.97 11.18zm6.03-8.37c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.51-2.66-1.63-.98-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.5.15-.67.15-.15.33-.38.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.74-1.78-1.01-2.44-.27-.63-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.42s-1.15 1.13-1.15 2.75 1.18 3.19 1.34 3.41c.17.22 2.32 3.55 5.63 4.98.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.64-.1 1.95-.8 2.22-1.57.28-.77.28-1.43.19-1.57-.08-.13-.3-.21-.63-.38z" />
        </svg>
      </button>
    </div>
  );
}
