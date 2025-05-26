import BasePage from "./base/base.page";
import { Locator, Page } from "playwright-core";
export default class NotFoundPage extends BasePage {
  readonly goHomeButton: Locator;
  constructor(page: Page) {
    super(page);
    this.goHomeButton = this.page.getByTestId("return-home-button");
  }

  async goHome() {
    await this.goHomeButton.click();
  }
}
