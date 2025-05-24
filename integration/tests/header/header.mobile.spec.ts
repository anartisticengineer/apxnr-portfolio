import test, { expect } from "@playwright/test";

test.describe("Mobile Header Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8080/");
  });

  test("Mobile Toggle Is Visible", async ({ page }) => {
    const mobileToggle = page.getByTestId("mobile-menu-button");
    await expect(mobileToggle).toBeVisible();
  });

  test("Mobile Toggle Click Open", async ({ page }) => {
    const mobileToggle = page.getByTestId("mobile-menu-button");
    await mobileToggle.click();
    const mobileLinks = page.getByTestId("mobile-header-links").nth(0);

    await expect(mobileLinks).toBeVisible();
  });

  test("Close Mobile Menu", async ({ page }) => {
    const mobileToggle = page.getByTestId("mobile-menu-button");
    await mobileToggle.click();
    const mobileLinks = page.getByTestId("mobile-header-links").nth(0);
    await page.touchscreen.tap(100, 100);

    await expect(mobileLinks).not.toBeVisible();
  });
});
