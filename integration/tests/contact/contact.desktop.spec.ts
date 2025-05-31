import { expect } from "@playwright/test";
import { test } from "integration/fixtures/contact.fixture";

test.describe("Desktop Contact Page", () => {
  test("Empty Name Field Validation", async ({ contactPage }) => {
    await contactPage.fillName("");
    await contactPage.blurNameField();

    await expect(contactPage.nameError).toBeVisible();
  });

  test("Empty Email Field Validation", async ({ contactPage }) => {
    await contactPage.fillEmail("");
    await contactPage.blurEmailField();

    await expect(contactPage.emptyEmailError).toBeVisible();
    await expect(contactPage.emptyEmailError).toHaveText("E-mail is required");
  });

  test("Invalid Email Field Validation", async ({ contactPage }) => {
    await contactPage.fillEmail("invalid-email");
    await contactPage.blurEmailField();

    await expect(contactPage.invalidEmailFormatError).toBeVisible();
    await expect(contactPage.invalidEmailFormatError).toHaveText(
      "E-mail must be valid"
    );
  });

  test("No Inquiry Chosen", async ({ contactPage }) => {
    await contactPage.fillInquiry();
    await expect(contactPage.inquiryError).toBeVisible();
  });

  test("Empty Message Field Validation", async ({ contactPage }) => {
    await contactPage.fillMessage("");
    await contactPage.blurMessageField();

    await expect(contactPage.messageError).toBeVisible();
  });

  test("Submit with empty fields", async ({ contactPage }) => {
    await contactPage.submitForm();

    await expect(contactPage.nameError).toBeVisible();
    await expect(contactPage.emptyEmailError).toBeVisible();
    await expect(contactPage.inquiryError).toBeVisible();
    await expect(contactPage.messageError).toBeVisible();
  });

  test.skip("Successful Submission", async ({ contactPage }) => {
    await contactPage.fillName("John Doe");
    await contactPage.fillEmail("test@example.com");
    await contactPage.fillInquiry("Commissions");
    await contactPage.fillMessage("This is a test message");
    await contactPage.submitForm();

    //still needs to be implemented - awaiting a redirect most likely
  });
});
