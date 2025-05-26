import { test } from "../../fixtures/home.fixture";
import { expect } from "@playwright/test";

test.describe("Desktop Header Navigation", () => {
  test("Desktop Header Is Visible", async ({ homePage }) => {
    await expect(homePage.header.desktopHeaderLinks).toBeVisible();
  });

  test.skip("Open Project Links", async ({ homePage }) => {});
});
