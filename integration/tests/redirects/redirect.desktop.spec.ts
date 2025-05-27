import { expect } from "@playwright/test";
import { test } from "../../fixtures/notFound.fixture";

test.describe("Redirects", () => {
  test("Redirects to 404 page", async ({ notFoundPage }) => {
    const goHomeButton = notFoundPage.goHomeButton;
    await expect(goHomeButton).toBeVisible();
  });

  test.skip("Redirects to 404 page if gallery project is not found", async ({
    notFoundPage,
  }) => {
    expect(notFoundPage.goHomeButton).toBeVisible();
  });

  test("Clicking button on redirect page sends you back home", async ({
    baseURL,
    notFoundPage,
  }) => {
    await notFoundPage.goHome();
    expect(notFoundPage.getUrl()).toBe(baseURL);
  });
});
