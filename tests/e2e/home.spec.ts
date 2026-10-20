import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Hiram Dev/i);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Beyond theinterface.",
  );
});

for (const phone of [false, true]) {
  test(`system chapters are navigable ${phone ? "on a phone with reduced motion" : "on desktop"}`, async ({
    page,
  }) => {
    await page.setViewportSize(
      phone ? { width: 390, height: 844 } : { width: 1440, height: 900 },
    );
    if (phone) await page.emulateMedia({ reducedMotion: "reduce" });

    await page.goto("/#application");
    const layers = page.getByRole("navigation", {
      name: "Explore BeneHom layers",
    });
    await layers.getByRole("link", { name: "MCP", exact: true }).click();
    await expect(
      layers.getByRole("link", { name: "MCP", exact: true }),
    ).toHaveAttribute("aria-current", "step");
    await expect(page.locator(".stage-counter")).toHaveText("03 / 05");
    await expect(page.locator("#mcp-title")).toBeInViewport();

    await layers.getByRole("link", { name: "Delivery", exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(
      layers.getByRole("link", { name: "Delivery", exact: true }),
    ).toHaveAttribute("aria-current", "step");
    await expect(page.locator("#delivery-title")).toBeInViewport();

    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    ).toBe(true);
    if (phone) {
      expect(
        await page.evaluate(
          () => getComputedStyle(document.documentElement).scrollBehavior,
        ),
      ).toBe("auto");
      expect(
        await page
          .locator(".system-stage .system-layer.is-active")
          .evaluate((element) => getComputedStyle(element).transitionDuration),
      ).toBe("0s");
    }
  });
}
