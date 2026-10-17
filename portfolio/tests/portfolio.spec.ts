import { expect, test, type Page } from "@playwright/test";

const isDesktop = (page: Page) => (page.viewportSize()?.width ?? 0) >= 768;

test.describe("estrutura", () => {
  test("renderiza todas as seções sem erros no console", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 }).first()).toContainText("Sou Anderson.");
    for (const id of ["inicio", "habilidades", "na-pratica", "projetos", "experiencia", "github", "sobre", "contato"]) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
    await expect(page.locator("#projetos article")).toHaveCount(4);
    expect(errors).toEqual([]);
  });

  test("todos os links do dock apontam para âncoras existentes", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page.getByRole("navigation", { name: "Navegação principal" }).locator("a").evaluateAll((as) => as.map((a) => a.getAttribute("href")));
    expect(hrefs.length).toBe(6);
    for (const href of hrefs) await expect(page.locator(href!)).toHaveCount(1);
  });

  test("sem rolagem horizontal", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("pastas da hero visíveis (gradiente SVG resolvido)", async ({ page }) => {
    await page.goto("/");
    const folder = page
      .locator(isDesktop(page) ? ".hero-motion" : "[data-hero-mobile]")
      .locator('svg[viewBox="0 0 64 52"]')
      .first();
    await expect(folder).toBeVisible();
    const fill = await folder.locator("path").first().evaluate((p) => getComputedStyle(p).fill);
    expect(fill).toContain("folder-back");
    const defs = await page.locator("#folder-back").evaluate((el) => getComputedStyle(el.closest("svg")!).display);
    expect(defs).not.toBe("none");
  });
});

test.describe("interações", () => {
  test("dock fica fixo no topo ao rolar e navega", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Navegação principal" }).getByRole("link", { name: "Experiência", exact: true }).click();
    await expect(page).toHaveURL(/#experiencia$/);
    await expect.poll(() => page.locator("#experiencia").evaluate((el) => el.getBoundingClientRect().top)).toBeLessThan(150);
    const dockTop = await page.getByRole("navigation", { name: "Navegação principal" }).evaluate((el) => el.getBoundingClientRect().top);
    expect(dockTop).toBeGreaterThanOrEqual(16);
    expect(dockTop).toBeLessThan(40);
  });

  test("acordeão 'O futuro' abre e fecha", async ({ page }) => {
    await page.goto("/");
    const btn = page.getByRole("button", { name: "O futuro" });
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toHaveAttribute("aria-expanded", "false");
    await btn.click();
    await expect(btn).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByText("Continuar aprendendo")).toBeVisible();
    await btn.click();
    await expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  test("carrossel 'Na prática' se move", async ({ page }) => {
    await page.goto("/");
    const track = page.locator("#na-pratica [role=region] > div").first();
    // O trilho está sempre em movimento, então rola via DOM (sem esperar estabilidade).
    await page.locator("#na-pratica").evaluate((el) => el.scrollIntoView());
    const x1 = await track.evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41);
    await page.waitForTimeout(800);
    const x2 = await track.evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41);
    expect(x2).toBeLessThan(x1);
  });
});

test.describe("desktop", () => {
  test.beforeEach(({ page }) => test.skip(!isDesktop(page), "apenas desktop"));

  test("magnificação do dock (40px → até 60px)", async ({ page }) => {
    await page.goto("/");
    const item = page.locator("[data-dock-item]").nth(2);
    const before = (await item.boundingBox())!;
    expect(Math.round(before.width)).toBe(40);
    await page.mouse.move(before.x + before.width / 2, before.y + before.height / 2);
    await expect.poll(async () => (await item.boundingBox())!.width).toBeGreaterThan(55);
    await expect(page.getByRole("tooltip", { name: "Projetos" })).toBeVisible();
  });

  test("balão do dock não é cortado com o dock preso no topo", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo({ top: 3000, behavior: "instant" }));
    const item = page.locator("[data-dock-item]").nth(3);
    const b = (await item.boundingBox())!;
    expect(b.y).toBeLessThan(40); // dock está no topo
    await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
    const tip = page.getByRole("tooltip", { name: "Experiência" });
    await expect(tip).toBeVisible();
    await expect.poll(async () => (await tip.boundingBox())!.y).toBeGreaterThan(b.y);
  });

  test("widget arrastável não dispara o link", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1200); // intro
    const folder = page.locator(".hero-motion [data-drag]").filter({ hasText: "System Design" });
    const box = (await folder.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + 20);
    await page.mouse.down();
    await page.mouse.move(box.x - 200, box.y + 60, { steps: 12 });
    await page.mouse.up();
    const after = (await folder.boundingBox())!;
    expect(after.x).toBeLessThan(box.x - 150);
    expect(page.url()).not.toContain("/system-design");
  });

  test("relógio e calendário em tempo real", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".hero-motion svg line[stroke='#FF3B30']")).toHaveCount(1);
    const today = await page.locator(".hero-motion .bg-black.font-bold").first().textContent();
    expect(Number(today)).toBeGreaterThan(0);
  });

  test("clima mostra 7 dias com temperatura (API simulada)", async ({ page }) => {
    await page.route("https://api.open-meteo.com/**", (route) =>
      route.fulfill({
        json: {
          current: { temperature_2m: 21.4 },
          daily: {
            time: ["2026-10-15", "2026-10-16", "2026-10-17", "2026-10-18", "2026-10-19", "2026-10-20", "2026-10-21"],
            weather_code: [0, 2, 3, 61, 95, 1, 45],
            temperature_2m_max: [30, 29, 27, 24, 22, 31, 26],
          },
        },
      }),
    );
    await page.goto("/");
    const list = page.locator(".hero-motion").getByRole("list", { name: /Previsão do tempo/ });
    await expect(list.locator("li")).toHaveCount(7);
    await expect(list).toContainText("30°");
    await expect(page.locator(".hero-motion").getByText("21° agora")).toBeVisible();
  });

  test("player com prévia oficial de 30s", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: "Tocar" })).toBeEnabled();
    const src = await page.locator(".hero-motion audio").getAttribute("src");
    expect(src).toContain("itunes-assets/AudioPreview");
    await expect(page.getByRole("link", { name: "Psycho Killer" })).toHaveAttribute("href", /music\.apple\.com/);
  });

  test("pasta de projeto rola sem barra de rolagem visível", async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 560 }); // baixa o bastante para o conteúdo transbordar
    await page.goto("/");
    const box = page.locator("#projetos article").last().locator("[data-folder-content]");
    await box.evaluate((el) => el.scrollIntoView({ block: "center", behavior: "instant" }));
    const m = await box.evaluate((el: HTMLElement) => ({ style: getComputedStyle(el).scrollbarWidth, overflow: el.scrollHeight - el.clientHeight }));
    expect(m.style).toBe("none"); // a largura medida não serve: o Chromium headless usa barras sobrepostas
    expect(m.overflow).toBeGreaterThan(0);
    const r = (await box.boundingBox())!;
    await page.mouse.move(r.x + r.width / 2, r.y + r.height / 2);
    await page.mouse.wheel(0, 200);
    await expect.poll(() => box.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  });

  test("pastas de projeto empilham (sticky em top 96px)", async ({ page }) => {
    await page.goto("/");
    const first = page.locator("#projetos article").first();
    const top = await first.evaluate((el) => el.getBoundingClientRect().top + scrollY);
    await page.evaluate((y) => window.scrollTo(0, y + 900), top);
    await expect.poll(() => first.evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBe(96);
  });
});

test.describe("movimento reduzido", () => {
  test.use({ reducedMotion: "reduce" });

  test("conteúdo animado fica visível sem rolar", async ({ page }) => {
    await page.goto("/");
    const opacities = await page.locator("[data-reveal]").evaluateAll((els) => els.map((e) => getComputedStyle(e).opacity));
    expect(opacities.length).toBeGreaterThan(10);
    expect(opacities.every((o) => o === "1")).toBe(true);
  });
});

test("dock segue a ordem das seções na página", async ({ page }) => {
  await page.goto("/");
  const hrefs = (await page.getByRole("navigation", { name: "Navegação principal" }).locator("a").evaluateAll((as) => as.map((a) => a.getAttribute("href")!))).filter((h) => h.startsWith("#"));
  const tops = await page.evaluate((ids) => ids.map((id) => document.querySelector(id)!.getBoundingClientRect().top + scrollY), hrefs);
  expect(tops).toEqual([...tops].sort((a, b) => a - b));
});

test.describe("pastas da hero", () => {
  test("System Design leva à página; as demais estão em breve", async ({ page }) => {
    await page.goto("/");
    const scope = page.locator(isDesktop(page) ? ".hero-motion" : "[data-hero-mobile]");
    const sd = scope.locator('a[href="/system-design"]:has(svg[viewBox="0 0 64 52"])'); // a pasta (não o ícone da grade)
    await expect(sd).toHaveAttribute("href", "/system-design");
    // As outras 4 aparecem só como "Em breve", sem nome de projeto e sem link.
    await expect(scope.getByRole("img", { name: "Projeto em breve" })).toHaveCount(4);
    for (const name of ["WebAudit", "Clima Tempo", "Supers Esportivos", "E-commerce"]) {
      await expect(scope.getByText(name)).toHaveCount(0);
    }
  });
});

test.describe("/system-design", () => {
  test("renderiza a trilha sem erros e sem rolagem horizontal", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("/system-design");
    await expect(page.getByRole("heading", { level: 1, name: "System Design" })).toBeVisible();
    await expect(page.locator("[data-leg]")).toHaveCount(7); // 6 trechos + certificado
    await expect(page.getByText("Próximo destino", { exact: true })).toHaveCount(5);
    await expect(page.getByText("Cartão de embarque")).toBeVisible();
    await expect(page.getByText("Atual", { exact: true })).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });

  test("janela abre e fecha a persiana", async ({ page }) => {
    await page.goto("/system-design");
    const win = page.getByRole("button", { name: /persiana/ });
    await expect(win).toHaveAttribute("aria-pressed", "false");
    await win.click();
    await expect(win).toHaveAttribute("aria-pressed", "true");
    await expect(win).toHaveAccessibleName("Abrir a persiana da janela");
  });

  test("linha do tempo acende os pontos ao rolar", async ({ page }) => {
    await page.goto("/system-design");
    const stops = page.locator("[data-stop]");
    expect(await page.locator("[data-stop][data-active]").count()).toBeLessThan(await stops.count());
    for (let y = 0; y < 6000; y += 400) await page.evaluate((v) => window.scrollTo({ top: v, behavior: "instant" }), y);
    await page.evaluate(() => window.scrollTo({ top: 99999, behavior: "instant" }));
    await expect.poll(() => page.locator("[data-stop][data-active]").count()).toBe(await stops.count());
  });
});

test("/system-design: linha azul termina no trecho atual", async ({ page }) => {
  await page.goto("/system-design");
  const current = page.locator("[data-leg]:not([data-planned])").last();
  const box = await current.boundingBox();
  const fillH = await page.locator("[data-leg]").first().evaluate((el) => (el.parentElement!.children[1] as HTMLElement).offsetHeight);
  const legBottom = await current.evaluate((el: HTMLElement) => el.offsetTop + el.offsetHeight);
  expect(box).not.toBeNull();
  expect(fillH).toBe(legBottom);
});

test("grade de apps: especialidades em uma fileira, terminando em System Design", async ({ page }) => {
  await page.goto("/");
  const scope = page.locator(isDesktop(page) ? ".hero-motion" : "[data-hero-mobile]");
  const items = scope.locator("[data-app-grid] li");
  const titles = await items.evaluateAll((ls) => ls.map((l) => l.getAttribute("title")));
  expect(titles).toEqual(["TypeScript", "React", "Next.js", "NestJS", "Full Stack Engineer", "System Design"]);
  const tops = await items.evaluateAll((ls) => ls.map((l) => Math.round(l.getBoundingClientRect().top)));
  expect(new Set(tops).size).toBe(1); // todos na mesma fileira
  await expect(scope.locator("[data-app-grid] a")).toHaveCount(0); // ícones sem link
});

test("/system-design: rodapé com Contato abrindo o WhatsApp", async ({ page }) => {
  await page.goto("/system-design");
  const contato = page.locator("footer").getByRole("link", { name: "Contato" });
  await expect(contato).toHaveAttribute("href", /^https:\/\/wa\.me\/5511988730794\?text=/);
  await expect(contato).toHaveAttribute("target", "_blank");
});

test("rodapé principal: WhatsApp com mensagem para recrutadores", async ({ page }) => {
  await page.goto("/");
  const wa = page.locator("#contato a[href*='wa.me']");
  await expect(wa).toHaveCount(1);
  const href = (await wa.getAttribute("href"))!;
  expect(decodeURIComponent(href.split("text=")[1] ?? "")).toContain("gostaria de conversar sobre uma oportunidade");
});

test("pasta do GitHub abre ao entrar na seção no mobile (e reabre ao voltar)", async ({ page }) => {
  test.skip(isDesktop(page), "no desktop a pasta abre no hover");
  await page.goto("/");
  const group = page.locator("[data-folder-group]");
  const center = await page.locator("#github").evaluate((el: HTMLElement) => el.getBoundingClientRect().top + scrollY + el.offsetHeight / 2 - innerHeight / 2);
  const go = (y: number) => page.evaluate((t) => window.scrollTo({ top: t, behavior: "instant" }), y);
  for (let y = 0; y < center; y += 500) await go(y);
  await go(center);
  await expect(group).toHaveAttribute("data-open", "true");
  await go(center - 1400);
  await expect(group).not.toHaveAttribute("data-open", "true");
  await go(center);
  await expect(group).toHaveAttribute("data-open", "true");
});

test("card 'Toque para falar comigo' (mobile) abre o WhatsApp", async ({ page }) => {
  test.skip(isDesktop(page), "card só existe no hero mobile");
  await page.goto("/");
  const card = page.locator("[data-hero-mobile]").getByRole("link", { name: "Falar comigo pelo WhatsApp" });
  await expect(card).toHaveAttribute("href", /^https:\/\/wa\.me\/5511988730794\?text=/);
  await expect(card).toHaveAttribute("target", "_blank");
});

test("carrossel 'Na prática': cópia do loop aceita hover e fica fora do Tab", async ({ page }) => {
  await page.goto("/");
  const copy = page.locator("#na-pratica [role=region] > div > div").nth(1);
  expect(await copy.evaluate((el) => (el as HTMLElement).inert)).toBe(false); // inert bloquearia o hover
  await expect(copy).toHaveAttribute("aria-hidden", "true");
  const tabIndexes = await copy.locator("a").evaluateAll((as) => as.map((a) => (a as HTMLElement).tabIndex));
  expect(tabIndexes.length).toBeGreaterThan(0);
  expect(tabIndexes.every((t) => t === -1)).toBe(true);
});

test("mobile: barra de endereço sumindo não faz a página pular", async ({ page }) => {
  test.skip(isDesktop(page), "a barra de endereço dinâmica é do celular");
  await page.setViewportSize({ width: 390, height: 774 }); // barra visível
  await page.goto("/");
  const top = () => page.evaluate(() => Math.round(document.querySelector("#github")!.getBoundingClientRect().top + scrollY));
  const before = await top();
  await page.setViewportSize({ width: 390, height: 844 }); // barra some (só a altura muda)
  await page.waitForTimeout(300);
  expect(await top()).toBe(before);
});
