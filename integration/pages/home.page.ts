import { Page } from "playwright-core";
import BasePage from "./base/base.page";

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
