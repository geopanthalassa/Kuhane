export default function SectionIntro({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs tracking-[0.25em] uppercase ${
            tone === "light" ? "text-gold-soft" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] ${
          tone === "light" ? "text-warm-white" : "text-stone"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
