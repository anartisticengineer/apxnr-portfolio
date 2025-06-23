<template>
  <v-form
    name="contact-form"
    class="ma-5 w-md-50"
    validate-on="blur"
    @submit="handleSubmit"
    ref="form"
    data-testid="contact-form"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <v-text-field
      id="name-field"
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
      label="Inquiry Type"
      v-model="inquiryType"
      :rules="formRules.forInquiryType"
      :items="['Commissions', 'Job Opportunities', 'Other/Just saying hi ;)']"
      variant="outlined"
      data-testid="inquiry-type-field"
    ></v-select>
    <v-textarea
      id="message-field"
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
  getRecaptchaToken,
  verifyTokenFromServer,
  FormRules,
} from "@/utils/contactForm";

const router = useRouter();
const isSubmitting = ref(false);
//form reference
const form = ref();
//form elements and rules
const formRules = new FormRules();
const formName = ref("");
const formEmail = ref("");
const inquiryType = ref("");
const formMessage = ref("");

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  if (form.value.isValid) {
    //send form
    try {
      isSubmitting.value = true;
      //Get recaptcha roken
      const tokenRequest = await getRecaptchaToken();
      const { token } = await tokenRequest.json();
      //Verify Token
      const recaptchaResponse = await verifyTokenFromServer(token);
      const { success } = await recaptchaResponse.json();

      if (!success) {
        throw new Error("Recaptcha verification failed");
      }
      const formInputs: FormSubmission = {
        name: formName.value,
        email: formEmail.value,
        inquiryType: inquiryType.value as InquiryType,
        message: formMessage.value,
      };

      const formRequest = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(Object.entries(formInputs)).toString(),
      });

      if (!formRequest.ok) {
        throw new Error("Form submission failed: Form request error");
      }
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
