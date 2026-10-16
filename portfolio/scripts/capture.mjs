// Captura screenshots com scroll progressivo (desktop 1440×900 e mobile 390×844).
// Uso: node scripts/capture.mjs <url> <pasta-de-saída>
// Ex.:  node scripts/capture.mjs http://localhost:3000 artifacts/implementation
import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const [url = "http://localhost:3000", out = "artifacts/implementation"] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const viewports = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true },
];

const browser = await chromium.launch();
for (const { name, viewport, isMobile } of viewports) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile, hasTouch: isMobile });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(url, { waitUntil: "networkidle" });
  await sleep(2500);
  await page.screenshot({ path: path.join(out, `${name}-00-hero.png`) });

  const step = Math.round(viewport.height * 0.6);
  for (let i = 1; i <= 60; i++) {
    const before = await page.evaluate(() => scrollY);
    await page.mouse.wheel(0, step);
    await sleep(900);
    const after = await page.evaluate(() => scrollY);
    await page.screenshot({ path: path.join(out, `${name}-${String(i).padStart(2, "0")}-scroll.png`) });
    if (after === before) break;
  }
  if (errors.length) console.log(`[${name}] erros no console:`, errors);
  await ctx.close();
}
await browser.close();
console.log("capturas salvas em", out);
