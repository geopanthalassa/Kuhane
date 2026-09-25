#!/usr/bin/env node
/**
 * 25/9/2026: pedido de Andre — cuando lleguen las fotos nuevas del hostal,
 * antes de subirlas al sitio hay que marcarlas con el logo de Kuhane
 * metido en el archivo de la foto (no solo puesto encima en la página —
 * eso se puede sacar recortando o con una captura; esto va DENTRO del
 * archivo, así que viaja con la foto la use donde la use quien la baje).
 *
 * Uso:
 *   node scripts/watermark-photos.mjs <carpeta-de-entrada> <carpeta-de-salida>
 *
 * Ejemplo (fotos nuevas en Desktop/fotos-nuevas, resultado en Desktop/fotos-marcadas):
 *   node scripts/watermark-photos.mjs ~/Desktop/fotos-nuevas ~/Desktop/fotos-marcadas
 *
 * Qué hace:
 *   - Toma cada .jpg/.jpeg/.png/.webp de la carpeta de entrada
 *   - Le pega el motivo Rapa Nui del logo (public/logo/kuhane-motivo-rapanui.png)
 *     semi-transparente, chico, en la esquina inferior derecha, con un
 *     margen proporcional al tamaño de la foto
 *   - Guarda el resultado con el mismo nombre en la carpeta de salida,
 *     sin tocar los archivos originales
 *
 * El tamaño del logo se ajusta solo según el ancho de cada foto, para que
 * se vea proporcional tanto en fotos grandes como chicas.
 */

import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WATERMARK_PATH = path.join(__dirname, "..", "public", "logo", "kuhane-motivo-rapanui.png");
const VALID_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

// Qué tan visible es la marca de agua: 0 = invisible, 1 = opaca del todo.
const WATERMARK_OPACITY = 0.4;
// Ancho del logo como fracción del ancho de la foto.
const WATERMARK_WIDTH_RATIO = 0.14;
// Margen respecto al borde, como fracción del ancho de la foto.
const MARGIN_RATIO = 0.025;

/** Reduce la opacidad de un PNG con transparencia, multiplicando su canal alfa. */
async function loadWatermarkWithOpacity(targetWidth, opacity) {
  const { data, info } = await sharp(WATERMARK_PATH)
    .resize({ width: targetWidth })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 3; i < data.length; i += info.channels) {
    data[i] = Math.round(data[i] * opacity);
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .png()
    .toBuffer();
}

async function main() {
  const [, , inputDir, outputDir] = process.argv;

  if (!inputDir || !outputDir) {
    console.error("Uso: node scripts/watermark-photos.mjs <carpeta-de-entrada> <carpeta-de-salida>");
    process.exit(1);
  }

  await mkdir(outputDir, { recursive: true });

  const entries = await readdir(inputDir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && VALID_EXT.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name);

  if (files.length === 0) {
    console.log(`No encontré fotos (.jpg/.jpeg/.png/.webp) en ${inputDir}`);
    return;
  }

  console.log(`Marcando ${files.length} foto(s)...\n`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    const metadata = await sharp(inputPath).metadata();
    const photoWidth = metadata.width ?? 1600;
    const photoHeight = metadata.height ?? 1200;

    const markWidth = Math.round(photoWidth * WATERMARK_WIDTH_RATIO);
    const markBuffer = await loadWatermarkWithOpacity(markWidth, WATERMARK_OPACITY);
    const markMeta = await sharp(markBuffer).metadata();

    const margin = Math.round(photoWidth * MARGIN_RATIO);
    const left = Math.max(0, photoWidth - (markMeta.width ?? markWidth) - margin);
    const top = Math.max(0, photoHeight - (markMeta.height ?? markWidth) - margin);

    await sharp(inputPath)
      .composite([{ input: markBuffer, left, top }])
      .toFile(outputPath);

    console.log(`✓ ${file}`);
  }

  console.log(`\nListo. Fotos marcadas en: ${outputDir}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
