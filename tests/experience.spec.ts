import { expect, test, type Locator, type Page } from "@playwright/test";

const acts = [
  { id: "dark", name: "Intensidade", copy: "Luz que revela.", image: "iced-latte-placeholder" },
  { id: "pink", name: "Energia", copy: "Cor em expansão.", image: "berry-frappe-placeholder" },
  { id: "green", name: "Novo olhar", copy: "Mude a atmosfera.", image: "green-latte-placeholder" },
] as const;

async function opaque(locator: Locator) {
  await expect.poll(() => locator.evaluate((element) => Number(getComputedStyle(element).opacity))).toBeGreaterThanOrEqual(0.99);
}

async function imageLoaded(locator: Locator) {
  await expect.poll(() => locator.evaluate((element) => element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0)).toBe(true);
}

async function expectAct(page: Page, act: (typeof acts)[number]) {
  await expect(page.locator(".hero-track")).toHaveAttribute("data-active-act", act.id);
  await expect(page.locator(`[data-nav-act="${act.id}"]`)).toHaveAttribute("aria-current", "step");
  await expect(page.locator(".act-navigation [aria-current]")).toHaveCount(1);
  const copy = page.locator(`.copy-${act.id}`);
  await opaque(copy);
  await expect(copy).toContainText(act.copy);
  const product = page.locator(`.product-stage .product[data-product="${act.id}"]`);
  await opaque(product);
  await expect(product.locator(".drink-image")).toHaveAttribute("src", new RegExp(act.image));
  await imageLoaded(product.locator(".drink-image"));
  await expect(product.locator(".drink-image")).toBeInViewport();
}

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  // Keep native anchor navigation but remove smooth-scroll timing from assertions.
  await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });
});

test("all acts navigate forward and reverse with matching copy and products", async ({ page }) => {
  await expect(page.locator(".logo-reveal")).toBeHidden();
  await opaque(page.locator(".hero-copy-stack"));
  await opaque(page.locator(".product-entrance"));
  await expectAct(page, acts[0]);
  for (const act of [acts[1], acts[2], acts[1], acts[0]]) {
    await page.getByRole("navigation", { name: "Atos da experiência" }).getByRole("link", { name: new RegExp(act.name) }).click();
    await expectAct(page, act);
  }
});

test("scroll during opening completes the reveal and keeps navigation usable", async ({ page }) => {
  await expect(page.locator(".logo-reveal")).toBeVisible();
  await page.evaluate(() => {
    const track = document.querySelector(".hero-track")!;
    window.scrollTo(0, (track.getBoundingClientRect().height - window.innerHeight) * 0.88);
  });
  await expect(page.locator(".logo-reveal")).toBeHidden();
  await opaque(page.locator(".hero-copy-stack"));
  await opaque(page.locator(".product-entrance"));
  await expectAct(page, acts[2]);
  await page.locator('[data-nav-act="pink"]').click();
  await expectAct(page, acts[1]);
});

test("reduced motion toggles at runtime and exposes both static flavor scenes", async ({ page }) => {
  await expect(page.locator(".logo-reveal")).toBeHidden();
  await page.locator('[data-nav-act="green"]').click();
  await expectAct(page, acts[2]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const act of [acts[1], acts[2]]) {
    const scene = page.locator(`.static-${act.id}`);
    await scene.scrollIntoViewIfNeeded();
    await expect(scene).toBeInViewport();
    await expect(scene.locator("h2")).toBeVisible();
    await expect(scene).toContainText(act.copy);
    await opaque(scene.locator(".product"));
    await imageLoaded(scene.locator(".drink-image"));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator(".static-pink")).toBeHidden();
  await page.locator('[data-nav-act="pink"]').click();
  await expectAct(page, acts[1]);
});

test("keyboard skip and short viewport retain usable controls without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 667 });
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Pular para a experiência" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#experiencia$/);
  await expect(page.locator(".logo-reveal")).toBeHidden();
  for (const act of acts) {
    const link = page.locator(`[data-nav-act="${act.id}"]`);
    await link.focus();
    await expect(link).toBeFocused();
    await expect(link).toBeInViewport();
    await page.keyboard.press("Enter");
    await expectAct(page, act);
    await expect.poll(() => page.evaluate(() => Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - window.innerWidth)).toBeLessThanOrEqual(1);
  }
});
