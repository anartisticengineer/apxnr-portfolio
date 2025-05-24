import { Locator, Page } from "playwright";

export default class Header {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly mobileMenuButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.headerContainer = this.page.getByTestId("header");
    this.mobileMenuButton =
      this.headerContainer.getByTestId("mobile-menu-button");
  }

  async openMobileMenu() {
    await this.mobileMenuButton.click();
  }
}
