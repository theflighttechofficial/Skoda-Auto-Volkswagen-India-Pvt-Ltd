import { formatLakh } from "./configuratorOptions";

const BRAND_ACCENT = {
  skoda: "#10b981",
  volkswagen: "#3b82f6",
  audi: "#ef4444",
};

const BRAND_LABEL = {
  skoda: "ŠKODA INDIA",
  volkswagen: "VOLKSWAGEN INDIA",
  audi: "AUDI INDIA",
};

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Renders a shareable "spec card" PNG for a saved build onto an offscreen
 * canvas and returns a data URL. Pure canvas drawing — no external image
 * capture library needed.
 */
export function generateBuildImage(build) {
  const width = 1080;
  const height = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const accent = BRAND_ACCENT[build.brand] || "#10b981";

  // Background
  const bg = ctx.createLinearGradient(0, 0, 0, height);
  bg.addColorStop(0, "#18181b");
  bg.addColorStop(1, "#09090b");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Accent glow
  const glow = ctx.createRadialGradient(width / 2, 260, 40, width / 2, 260, 520);
  glow.addColorStop(0, `${accent}55`);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  // Top brand label
  ctx.fillStyle = accent;
  ctx.font = "bold 28px Arial";
  ctx.fillText(BRAND_LABEL[build.brand] || "VW GROUP INDIA", 64, 90);

  ctx.fillStyle = "#a1a1aa";
  ctx.font = "24px Arial";
  ctx.fillText("YOUR BUILD", 64, 128);

  // Color swatch + car body block
  ctx.fillStyle = build.colorHex || "#ffffff";
  roundRect(ctx, 64, 180, width - 128, 340, 28);
  ctx.fill();
  ctx.strokeStyle = "#27272a";
  ctx.lineWidth = 2;
  roundRect(ctx, 64, 180, width - 128, 340, 28);
  ctx.stroke();

  // Model name
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 56px Arial";
  wrapText(ctx, build.modelName, 64, 600, width - 128, 62);

  ctx.fillStyle = accent;
  ctx.font = "bold 30px Arial";
  ctx.fillText(build.variantName || "", 64, 680);

  // Spec rows
  const specs = [
    ["Engine", build.engine],
    ["Gearbox", build.gearbox],
    ["Colour", build.colorName],
    ["Wheels", build.wheelName],
    ["Interior", build.interiorName],
  ];
  let y = 760;
  ctx.font = "24px Arial";
  specs.forEach(([label, value]) => {
    if (!value) return;
    ctx.fillStyle = "#71717a";
    ctx.fillText(label.toUpperCase(), 64, y);
    ctx.fillStyle = "#e4e4e7";
    ctx.font = "bold 26px Arial";
    wrapText(ctx, value, 260, y, width - 260 - 64, 30);
    ctx.font = "24px Arial";
    y += 56;
  });

  if (build.options?.length) {
    ctx.fillStyle = "#71717a";
    ctx.fillText("OPTIONAL EQUIPMENT", 64, y);
    y += 34;
    ctx.fillStyle = "#e4e4e7";
    ctx.font = "22px Arial";
    build.options.forEach((opt) => {
      ctx.fillText(`✓ ${opt}`, 64, y);
      y += 32;
    });
  }

  // Price footer
  ctx.strokeStyle = "#27272a";
  ctx.beginPath();
  ctx.moveTo(64, height - 190);
  ctx.lineTo(width - 64, height - 190);
  ctx.stroke();

  ctx.fillStyle = "#71717a";
  ctx.font = "22px Arial";
  ctx.fillText("ESTIMATED ON-ROAD BUILD PRICE", 64, height - 140);

  ctx.fillStyle = accent;
  ctx.font = "bold 54px Arial";
  ctx.fillText(formatLakh(build.totalPrice), 64, height - 80);

  ctx.fillStyle = "#52525b";
  ctx.font = "18px Arial";
  ctx.textAlign = "right";
  ctx.fillText("Built on the SAVWIPL India Configurator", width - 64, height - 40);
  ctx.textAlign = "left";

  return canvas.toDataURL("image/png");
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  if (!text) return y;
  const words = text.split(" ");
  let line = "";
  let curY = y;
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, curY);
      line = word;
      curY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, curY);
  return curY;
}
