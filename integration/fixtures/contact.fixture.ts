import { test as base } from "@playwright/test";
import ContactPage from "integration/pages/contact.page";

type ContactFixtures = {
  contactPage: ContactPage;
};

export const test = base.extend<ContactFixtures>({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto("/contact");
    await use(contactPage);
    await contactPage.closePage();
  },
});
