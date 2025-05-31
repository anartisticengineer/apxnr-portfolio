import { test } from "../../fixtures/home.fixture";
import { expect } from "@playwright/test";

test.describe("Mobile Header Navigation", () => {
  test("Mobile Toggle Is Visible", async ({ homePage }) => {
    await expect(homePage.header.mobileMenuButton).toBeVisible();
  });

  test.skip("Mobile Toggle Click Open", async ({ homePage }) => {
    await homePage.header.openMobileMenu();
    await expect(homePage.header.mobileHeaderLinks).toBeVisible();
  });

  test("Close Mobile Menu", async ({ homePage }) => {
    await homePage.header.openMobileMenu();
    await homePage.header.closeMobileMenu();
    const mobileLinks = homePage.header.mobileHeaderLinks;
    await expect(mobileLinks).not.toBeVisible();
  });

  test.fixme("Go to About Me Page", async ({ homePage }) => {
    await homePage.header.openMobileMenu();
    await homePage.header.goToAboutPage();
    expect(homePage.getUrl()).toContain("/about-me");
  });

  test.fixme("Go to Contact Page", async ({ homePage }) => {
    await homePage.header.openMobileMenu();
    await homePage.header.goToContactPage();
    expect(homePage.getUrl()).toContain("/contact");
  });

  test.skip("Open Project Links", async ({ homePage }) => {});
});
