/**
 * Elegant stand-in for a real photograph/video that hasn't arrived yet.
 * Intentionally designed (not a broken-image look) so the layout already
 * feels finished — swap for a real <Image>/<video> once assets land in
 * /public/images or /public/media.
 */
export default function PlaceholderMedia({
  label,
  className = "",
  tone = "sand",
}: {
  label?: string;
  className?: string;
  tone?: "sand" | "teal";
}) {
  const gradient =
    tone === "teal"
      ? "from-teal-deep via-teal to-turquoise/50"
      : "from-gold-soft/45 via-sand to-teal/15";

  const border = tone === "teal" ? "border-warm-white/15" : "border-wood/20";
  const iconColor = tone === "teal" ? "text-warm-white/60" : "text-wood/50";
  const labelColor = tone === "teal" ? "text-warm-white/80" : "text-stone-soft/75";

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={`h-6 w-6 ${iconColor}`}
        >
          <rect x="3" y="6" width="18" height="13" rx="1.5" />
          <circle cx="12" cy="12.5" r="3.4" />
          <path d="M8.5 6 L9.7 4 h4.6 L15.5 6" />
        </svg>
        {label !== "" && (
          <span className={`text-[11px] tracking-[0.18em] uppercase ${labelColor}`}>
            {label ?? "Fotografía próximamente"}
          </span>
        )}
      </div>
      <div className={`pointer-events-none absolute inset-0 border ${border}`} />
    </div>
  );
}
