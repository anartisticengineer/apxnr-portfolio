import { Page, Locator } from "@playwright/test";
import BasePage from "./base/base.page";

export default class ContactPage extends BasePage {
  readonly contactForm: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly inquiryField: Locator;
  readonly messageField: Locator;
  //error messages
  readonly nameError: Locator;
  readonly emailError: Locator;
  readonly inquiryError: Locator;
  readonly messageError: Locator;
  readonly submitButton: Locator;
  constructor(page: Page) {
    super(page);
    this.contactForm = this.page.getByTestId("contact-form");
    this.nameField = this.contactForm
      .getByTestId("name-field")
      .locator("input");
    this.emailField = this.contactForm
      .getByTestId("email-field")
      .locator("input");
    this.inquiryField = this.contactForm
      .getByTestId("inquiry-type-field")
      .locator("input");
    this.messageField = this.contactForm
      .getByTestId("message-field")
      .locator("textarea");
    this.nameError = this.contactForm
      .getByTestId("name-field")
      .getByRole("alert");
    this.emailError = this.contactForm
      .getByTestId("email-field")
      .getByRole("alert");
    this.inquiryError = this.contactForm
      .getByTestId("inquiry-type-field")
      .getByRole("alert");
    this.messageError = this.contactForm
      .getByTestId("message-field")
      .getByRole("alert");
    this.submitButton = this.contactForm.getByTestId("submit-button");
  }
  async fillName(name: string) {
    await this.nameField.fill(name);
  }

  async blurNameField() {
    await this.nameField.blur();
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }

  async blurEmailField() {
    await this.emailField.blur();
  }

  async fillInquiry(inquiry: string | null) {
    if (inquiry) {
      await this.inquiryField.selectOption(inquiry);
    }
    await this.inquiryField.blur();
  }

  async blurInquiryField() {
    await this.inquiryField.blur();
  }

  async fillMessage(message: string) {
    await this.messageField.fill(message);
  }

  async blurMessageField() {
    await this.messageField.blur();
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
