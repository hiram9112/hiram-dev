import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Hiram Dev/i);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "What you see is only the surface.",
  );
});

test("direct layer navigation is readable and native scrolling reverses the reveal", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const journey = page.locator(".journey");
  await expect(journey).toHaveAttribute("data-enhanced", "true");

  for (const [index, name] of [
    "Surface",
    "Application",
    "Data",
    "Integrations",
    "Reliability",
    "Production",
    "The system",
  ].entries()) {
    await page
      .getByRole("link", { name: `${index + 1}: ${name}`, exact: true })
      .click();
    await expect(journey).toHaveAttribute("data-active", String(index));
    await expect(page.locator(`.chapter[data-active="true"]`)).toHaveCSS(
      "opacity",
      "1",
    );
  }

  const scrollToProgress = async (progress: number) => {
    await page.evaluate((p) => {
      const scene = document.querySelector<HTMLElement>(".journey")!;
      const stage = document.querySelector<HTMLElement>(".journey-stage")!;
      window.scrollTo(0, p * (scene.offsetHeight - stage.offsetHeight));
    }, progress);
  };
  await scrollToProgress(0.35);
  await expect(journey).toHaveAttribute("data-active", "2");
  const first = await page
    .locator(".plane-production")
    .evaluate((plane) => getComputedStyle(plane).transform);
  await scrollToProgress(0.7);
  await expect(journey).toHaveAttribute("data-active", "4");
  const deep = await page
    .locator(".plane-production")
    .evaluate((plane) => getComputedStyle(plane).transform);
  expect(deep).not.toBe(first);
  await scrollToProgress(0.35);
  await expect(journey).toHaveAttribute("data-active", "2");
  await expect
    .poll(() =>
      page
        .locator(".plane-production")
        .evaluate((plane) => getComputedStyle(plane).transform),
    )
    .toBe(first);
});

test("keyboard users can skip the scene, open evidence and reach the CV", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip the motion, explore the work" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#work$/);
  const summary = page.locator("#evidence-integrations summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#evidence-integrations details")).toHaveAttribute(
    "open",
    "",
  );
  await expect(
    page.getByRole("link", { name: "Read the Numa documentation" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "View CV", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Hiram", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Print / save as PDF" }),
  ).toBeVisible();
});

test("reduced motion exposes every chapter and can be changed during a visit", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".journey")).toHaveAttribute(
    "data-enhanced",
    "false",
  );
  await expect(page.locator(".journey-stage")).toHaveCSS(
    "position",
    "relative",
  );
  await expect(page.locator(".chapter[inert]")).toHaveCount(0);
  await expect(page.locator(".chapter[aria-hidden='true']")).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator(".journey")).toHaveAttribute(
    "data-enhanced",
    "true",
  );
  await expect(page.locator(".chapter[inert]")).toHaveCount(6);
});

test("the phone cutaway stays between the narrative and depth controls", async ({
  page,
}) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 320, height: 640 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page
      .getByRole("link", { name: "7: The system", exact: true })
      .click();
    await expect(page.locator(".journey")).toHaveAttribute("data-active", "6");
    const bounds = await page.evaluate(() => {
      const text = document
        .querySelector(".chapter-system")!
        .getBoundingClientRect();
      const top = document
        .querySelector(".plane-surface")!
        .getBoundingClientRect();
      const bottom = document
        .querySelector(".plane-production")!
        .getBoundingClientRect();
      const nav = document
        .querySelector(".depth-navigation")!
        .getBoundingClientRect();
      return {
        textBottom: text.bottom,
        sceneTop: top.top,
        sceneBottom: bottom.bottom,
        navTop: nav.top,
        width: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      };
    });
    expect(bounds.scrollWidth).toBe(bounds.width);
    expect(bounds.sceneTop).toBeGreaterThan(bounds.textBottom);
    expect(bounds.sceneBottom).toBeLessThan(bounds.navTop);
  }
});

test("the narrative and evidence remain available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator(".chapter")).toHaveCount(7);
  await expect(page.locator(".chapter-production h2")).toBeVisible();
  await expect(page.locator("#evidence-integrations")).toBeVisible();
  await context.close();
});
