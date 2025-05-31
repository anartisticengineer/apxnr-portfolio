import { test } from "../../fixtures/home.fixture";
import { expect } from "@playwright/test";

test.describe("Desktop Header Navigation", () => {
  test("Desktop Header Is Visible", async ({ homePage }) => {
    await expect(homePage.header.desktopHeaderLinks).toBeVisible();
  });

  test("Go to About Me Page", async ({ homePage }) => {
    await homePage.header.goToAboutPage();
    expect(homePage.getUrl()).toContain("/about-me");
  });

  test("Go to Contact Page", async ({ homePage }) => {
    await homePage.header.goToContactPage();
    expect(homePage.getUrl()).toContain("/contact");
  });

  test.skip("Open Project Links", async ({ homePage }) => {});
});
