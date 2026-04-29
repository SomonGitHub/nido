// Resize logo.png to a small base64 data-URL for inline embedding
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT = path.join(__dirname, "..", "src", "logo.png");
const OUTPUT = path.join(__dirname, "..", "src", "logo-data.ts");

async function main() {
  const buf = await sharp(INPUT)
    .resize(64, null, { fit: "inside" })
    .png({ compressionLevel: 9 })
    .toBuffer();

  console.log("Resized PNG size:", buf.length, "bytes");

  const dataUrl = "data:image/png;base64," + buf.toString("base64");
  console.log("Data-URL length:", dataUrl.length, "chars");

  const ts = [
    "// Auto-generated — do not edit manually.",
    "// Resized logo (96px wide) as a base64 data-URL.",
    `export const LOGO_DATA_URL = "${dataUrl}";`,
    "",
  ].join("\n");

  fs.writeFileSync(OUTPUT, ts, "utf-8");
  console.log("Written to", OUTPUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
