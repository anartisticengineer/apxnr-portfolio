import { expect } from "@playwright/test";
import { test } from "integration/fixtures/contact.fixture";

test.describe("Desktop Contact Page", () => {
  test("Empty Name Field Validation", async ({ contactPage }) => {
    await contactPage.fillName("");
    await contactPage.blurNameField();

    expect(contactPage.nameError).toBeVisible();
  });

  test("Empty Email Field Validation", async ({ contactPage }) => {
    await contactPage.fillEmail("");
    await contactPage.blurEmailField();

    expect(contactPage.emailError).toBeVisible();
    expect(contactPage.emailError).toHaveText("E-mail is required");
  });

  test("Invalid Email Field Validation", async ({ contactPage }) => {
    await contactPage.fillEmail("invalid-email");
    await contactPage.blurEmailField();

    expect(contactPage.emailError).toBeVisible();
    expect(contactPage.emailError).toHaveText("E-mail must be valid");
  });

  test("No Inquiry Chosen", async ({ contactPage }) => {
    await contactPage.fillInquiry(null);
    await contactPage.blurInquiryField();

    expect(contactPage.inquiryError).toBeVisible();
  });

  test("Empty Message Field Validation", async ({ contactPage }) => {
    await contactPage.fillMessage("");
    await contactPage.blurMessageField();

    expect(contactPage.messageError).toBeVisible();
  });

  test("Submit with empty fields", async ({ contactPage }) => {
    await contactPage.submitForm();

    expect(contactPage.nameError).toBeVisible();
    expect(contactPage.emailError).toBeVisible();
    expect(contactPage.inquiryError).toBeVisible();
    expect(contactPage.messageError).toBeVisible();
  });

  test.skip("Successful Submission", async ({ contactPage }) => {});
});
