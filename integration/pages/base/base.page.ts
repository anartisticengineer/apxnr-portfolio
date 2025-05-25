import { Page } from "playwright";
import Header from "../../components/header";

export default class BasePage {
  readonly page: Page;
  readonly header: Header;
  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async reload() {
    await this.page.reload();
  }
  async getHeader() {
    return this.header;
  }

  //header actions
  async openMobileMenu() {
    if (await this.header.isMobile()) {
      await this.header.openMobileMenu();
    }
  }
}
