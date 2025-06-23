<template>
  <v-form
    class="ma-5 w-md-50"
    validate-on="blur"
    @submit="handleSubmit"
    ref="form"
    data-testid="contact-form"
    data-netlify="true"
  >
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
      >Submit</v-btn
    >
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
      const formInputs: FormSubmission = {
        name: formName.value,
        email: formEmail.value,
        inquiryType: inquiryType.value as InquiryType,
        message: formMessage.value,
      };
      //Get recaptcha roken
      const tokenRequest = await getRecaptchaToken();
      const { token } = await tokenRequest.json();
      //Verify Token
      const response = await verifyTokenFromServer(token);
      const { success } = await response.json();

      if (!success) {
        throw new Error("Recaptcha verification failed");
      }
      // const formRequest = await fetch("/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      //   body: new URLSearchParams(formInputs).toString(),
      // });

      // if (formRequest.ok) {
      //   console.log("Form submitted successfully");
      // }
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
</style>
