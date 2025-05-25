import { Locator, Page } from "playwright";

export default class Header {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly mobileMenuButton: Locator;
  readonly desktopHeaderLinks: Locator;
  readonly mobileHeaderLinks: Locator;
  constructor(page: Page) {
    this.page = page;
    this.headerContainer = this.page.getByTestId("header");
    this.mobileMenuButton =
      this.headerContainer.getByTestId("mobile-menu-button");
    this.desktopHeaderLinks = this.headerContainer.getByTestId(
      "desktop-header-links"
    );
    this.mobileHeaderLinks = this.headerContainer.getByTestId(
      "mobile-header-links"
    );
  }

  async openMobileMenu() {
    await this.mobileMenuButton.click();
  }

  async closeMobileMenu() {
    await this.page.touchscreen.tap(400, 100);
  }

  async isMobile() {
    return this.mobileMenuButton.isVisible();
  }
}
