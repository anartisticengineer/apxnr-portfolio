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
  readonly subLinksToggle: Locator;
  readonly mobileAboutLink: Locator;
  readonly mobileContactLink: Locator;
  readonly mobileProjectToggle: Locator;
  readonly projectSubLinks: Locator;
  constructor(page: Page) {
    this.page = page;
    this.headerContainer = this.page.getByTestId("header");
    this.mobileMenuButton = this.headerContainer
      .getByTestId("mobile-menu-button")
      .filter({ visible: true });
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
    this.subLinksToggle = this.page
      .getByTestId("project-sub-links-toggle")
      .filter({ visible: true });
    this.mobileAboutLink = this.page
      .getByTestId("mobile-about-me-link")
      .filter({ visible: true });
    this.mobileContactLink = this.page
      .getByTestId("mobile-contact-link")
      .filter({ visible: true });
    this.mobileProjectToggle = this.page.getByTestId(
      "project-sub-links-toggle"
    );
    this.projectSubLinks = this.page.getByTestId("project-sub-links");
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

  async toggleProjectLinks() {
    if (await this.isMobile()) {
      await this.openMobileMenu();
    }
    await this.subLinksToggle.click();
  }

  async goToRandomProject() {
    await this.toggleProjectLinks();
    const projects = await this.projectSubLinks.all();
    const index = Math.floor(Math.random() * projects.length);
    await projects[index].click();
  }
}
