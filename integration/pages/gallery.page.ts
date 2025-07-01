import { Locator, Page } from "@playwright/test";
import BasePage from "./base/base.page";

export default class GalleryPage extends BasePage {
  readonly moreInfoButton: Locator;
  readonly closeInfoButton: Locator;
  constructor(page: Page) {
    super(page);
    this.moreInfoButton = this.page.getByTestId("gallery-info-button");
    this.closeInfoButton = this.page.getByTestId("gallery-info-close-button");
  }

  async openInfo() {
    await this.moreInfoButton.click();
  }

  async isInfoOpen() {
    return this.closeInfoButton.isVisible();
  }

  async closeInfo() {
    await this.closeInfoButton.click();
  }
}
