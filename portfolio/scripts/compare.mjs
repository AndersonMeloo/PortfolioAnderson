// Gera imagens lado a lado (referência | implementação) para cada seção equivalente.
// Uso: node scripts/compare.mjs [url-da-implementação]
import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const REF = "https://elenagonci.com/";
const IMPL = process.argv[2] ?? "http://localhost:3100/";
const OUT = "artifacts/comparison";
fs.mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// [nome, seletor na referência, seletor na implementação, deslocamento extra]
const pairs = [
  ["01-hero", null, null, 0],
  ["02-habilidades", "#achievements", "#habilidades", -60],
  ["03-carrossel", "#press", "#na-pratica", -60],
  ["04-pasta-1", "#pillar-stack", "#projetos", 0],
  ["05-pasta-2-sobrepondo", "#pillar-stack", "#projetos", 900],
  ["06-lista", "#highlights", "#experiencia", -40],
  ["07-pasta-3d", "#playground", "#github", -40],
  ["08-sobre-rodape", "#about", "#sobre", 200],
];

const viewports = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true },
];

async function shoot(browser, url, selector, extra, vp) {
  const ctx = await browser.newContext({ viewport: vp.viewport, isMobile: vp.isMobile, hasTouch: vp.isMobile });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await sleep(1800);
  if (selector) {
    const y = await page.evaluate(([s, e]) => document.querySelector(s).getBoundingClientRect().top + scrollY + e, [selector, extra]);
    // Rola em passos para disparar as animações de entrada.
    for (let cur = 0; cur < y; cur += 400) {
      await page.evaluate((v) => window.scrollTo(0, v), Math.min(cur + 400, y));
      await sleep(60);
    }
    await sleep(1200);
  }
  const buf = await page.screenshot();
  await ctx.close();
  return buf.toString("base64");
}

const browser = await chromium.launch();
for (const vp of viewports) {
  for (const [name, refSel, implSel, extra] of pairs) {
    const [a, b] = await Promise.all([shoot(browser, REF, refSel, extra, vp), shoot(browser, IMPL, implSel, extra, vp)]);
    const { width, height } = vp.viewport;
    const ctx = await browser.newContext({ viewport: { width: width * 2 + 24, height: height + 40 } });
    const page = await ctx.newPage();
    await page.setContent(`<body style="margin:0;background:#222;font:12px sans-serif;color:#fff;display:flex;gap:24px">
      <figure style="margin:0"><figcaption style="height:40px;line-height:40px">Referência</figcaption><img src="data:image/png;base64,${a}"></figure>
      <figure style="margin:0"><figcaption style="height:40px;line-height:40px">Implementação</figcaption><img src="data:image/png;base64,${b}"></figure></body>`);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-${name}.png`) });
    await ctx.close();
    console.log("ok", vp.name, name);
  }
}
await browser.close();
