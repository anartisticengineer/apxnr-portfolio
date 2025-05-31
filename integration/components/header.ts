import { Locator, Page } from "playwright";

export default class Header {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly mobileMenuButton: Locator;
  readonly desktopHeaderLinks: Locator;
  readonly mobileHeaderLinks: Locator;
  readonly homeLink: Locator;
  readonly desktopAboutLink: Locator;
  readonly desktopContactLink: Locator;
  readonly desktopProjectToggle: Locator;
  readonly mobileAboutLink: Locator;
  readonly mobileContactLink: Locator;
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
    this.homeLink = this.headerContainer.getByRole("link", {
      name: "Logo for header",
    });
    this.desktopAboutLink = this.desktopHeaderLinks.getByRole("link", {
      name: "About Me",
    });
    this.desktopContactLink = this.desktopHeaderLinks.getByRole("link", {
      name: "Contact",
    });
    this.desktopProjectToggle =
      this.headerContainer.getByTestId("project-toggle");
    this.mobileAboutLink = this.mobileHeaderLinks.getByRole("link", {
      name: "About Me",
    });
    this.mobileContactLink = this.mobileHeaderLinks.getByRole("link", {
      name: "Contact",
    });
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

  async goHome() {
    await this.homeLink.click();
  }

  async goToAboutPage() {
    if (await this.isMobile()) {
      await this.mobileAboutLink.click();
      return;
    }
    await this.desktopAboutLink.click();
  }

  async goToContactPage() {
    if (await this.isMobile()) {
      await this.mobileContactLink.click();
      return;
    }
    await this.desktopContactLink.click();
  }
}
