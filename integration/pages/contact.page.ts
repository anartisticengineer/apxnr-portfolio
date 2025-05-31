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
  readonly emptyEmailError: Locator;
  readonly invalidEmailFormatError: Locator;
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
    this.inquiryField = this.contactForm.getByTestId("inquiry-type-field");
    this.messageField = this.contactForm
      .getByTestId("message-field")
      .locator("textarea");
    this.nameError = this.contactForm
      .getByTestId("name-field")
      .getByText("Name is required");
    this.emptyEmailError = this.contactForm
      .getByTestId("email-field")
      .getByText("E-mail is required");
    this.invalidEmailFormatError = this.contactForm
      .getByTestId("email-field")
      .getByText("E-mail must be valid");
    this.inquiryError = this.contactForm
      .getByTestId("inquiry-type-field")
      .getByText("Inquiry type is required");
    this.messageError = this.contactForm
      .getByTestId("message-field")
      .getByText("Message is required");
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

  async fillInquiry(inquiry?: string) {
    await this.inquiryField.click();
    if (inquiry) {
      const option = this.inquiryField.getByRole("option", {
        name: inquiry,
      });
      await option.click();
    }
    // await this.blurInquiryField();
    await this.inquiryField.press("Tab");
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
