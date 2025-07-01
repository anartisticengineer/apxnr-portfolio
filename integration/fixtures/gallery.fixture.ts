import { test as base } from "@playwright/test";
import GalleryPage from "integration/pages/gallery.page";

type GalleryFixtures = {
  galleryPage: GalleryPage;
};

export const test = base.extend<GalleryFixtures>({
  galleryPage: async ({ page }, use) => {
    const galleryPage = new GalleryPage(page);
    await galleryPage.goto("/");
    await galleryPage.header.goToRandomProject();
    await use(galleryPage);
    await galleryPage.closePage();
  },
});
