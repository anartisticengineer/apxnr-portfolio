import { test as base } from "@playwright/test";
import NotFoundPage from "../pages/notFound.page";

type NotFoundFixtures = {
  notFoundPage: NotFoundPage;
};

export const test = base.extend<NotFoundFixtures>({
  notFoundPage: async ({ page }, use) => {
    const notFoundPage = new NotFoundPage(page);
    await notFoundPage.goto("404");
    await use(notFoundPage);
    await notFoundPage.closePage();
  },
});
