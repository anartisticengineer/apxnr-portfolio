<template>
  <v-form
    name="contact-form"
    class="ma-5 w-md-50"
    validate-on="blur"
    @submit="handleSubmit"
    ref="form"
    method="POST"
    data-testid="contact-form"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <v-text-field
      id="name-field"
      name="contact-name"
      v-model="formName"
      :rules="formRules.forName"
      label="Name"
      variant="outlined"
      class="py-2"
      required
      data-testid="name-field"
    ></v-text-field>
    <v-text-field
      id="email-field"
      name="contact-email"
      v-model="formEmail"
      :rules="formRules.forEmail"
      label="Email"
      type="email"
      variant="outlined"
      class="py-2"
      required
      data-testid="email-field"
    ></v-text-field>
    <v-select
      id="inquiry-type-field"
      name="contact-inquiry-type"
      label="Inquiry Type"
      v-model="inquiryType"
      :rules="formRules.forInquiryType"
      :items="['Commissions', 'Job Opportunities', 'Other/Just saying hi ;)']"
      variant="outlined"
      data-testid="inquiry-type-field"
    ></v-select>
    <v-textarea
      id="message-field"
      name="contact-message"
      v-model="formMessage"
      :rules="formRules.forMessage"
      label="Message"
      variant="outlined"
      class="py-2"
      required
      data-testid="message-field"
      counter="500"
    ></v-textarea>
    <v-btn
      block
      color="accent"
      type="submit"
      variant="tonal"
      data-testid="submit-button"
      :disabled="isSubmitting"
      >Submit</v-btn
    >
    <v-progress-linear
      indeterminate
      v-if="isSubmitting"
      color="accent"
    ></v-progress-linear>
    <div
      id="recaptcha-container"
      class="text-left text-body-2 text-lg-body-1 ma-5"
    >
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { FormSubmission, InquiryType } from "@/types/contact";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  FormRules,
  NetlifyFormSetup,
  RecaptchaUtils,
} from "@/utils/contactForm";

const router = useRouter();
const isSubmitting = ref(false);
//form reference
const form = ref();
//form elements and rules
const formRules = new FormRules();
const recaptchaUtils = new RecaptchaUtils();
const netlifyFormSetup = new NetlifyFormSetup();
const formName = ref("");
const formEmail = ref("");
const inquiryType = ref("");
const formMessage = ref("");

const handleSubmit = async (e: Event): Promise<void> => {
  e.preventDefault();
  if (form.value.isValid) {
    //send form
    try {
      isSubmitting.value = true;

      const verificationResponse = await recaptchaUtils.runTokenVerification();

      const { success } = await verificationResponse.json();

      if (!success) {
        throw new Error("Recaptcha verification failed");
      }

      const formInputs: FormSubmission = {
        name: formName.value,
        email: formEmail.value,
        inquiryType: inquiryType.value as InquiryType,
        message: formMessage.value,
      };

      await netlifyFormSetup.sendToNetlify(formInputs);
      //setup for confirmation page
      const uriParams = new URLSearchParams();
      uriParams.append("name", formInputs.name);
      uriParams.append("email", formInputs.email);
      uriParams.append("inquiryType", formInputs.inquiryType);
      uriParams.append("message", formInputs.message);
      const uriParam = uriParams.toString();

      await router.push({
        path: "/success",
        query: {
          uri: uriParam,
        },
      });
    } catch (error: any) {
      alert(error.message);
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>

<script lang="ts">
export default {
  name: "ContactForm",
};
</script>

<style>
#message-field-messages .v-counter {
  color: var(--v-theme-secondary);
}
#recaptcha-container a {
  color: var(--v-theme-accent);
}
</style>
