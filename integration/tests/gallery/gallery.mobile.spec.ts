import { expect } from "@playwright/test";
import { test } from "integration/fixtures/gallery.fixture";

test.describe("Mobile Gallery Page", () => {
  test("Mobile Gallery Page Is Visible", async ({ galleryPage }) => {
    await expect(galleryPage.moreInfoButton).toBeVisible();
  });

  test("Open Project Information", async ({ galleryPage }) => {
    await galleryPage.openInfo();
    await expect(galleryPage.closeInfoButton).toBeVisible();
  });

  test("Close Project Information", async ({ galleryPage }) => {
    await galleryPage.openInfo();
    await galleryPage.closeInfo();
    await expect(galleryPage.closeInfoButton).not.toBeVisible();
  });
});
