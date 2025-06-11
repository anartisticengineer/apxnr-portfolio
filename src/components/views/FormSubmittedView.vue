<template>
  <v-container class="w-100">
    <v-row class="ma-5">
      <h1 class="text-left text-md-center w-100">Submitted!</h1>
    </v-row>
    <v-row class="ma-5">
      <h2 class="text-left text-md-center w-100" color="secondary-darken-1">
        Thanks for the message {{ submittedItemsRef.name }}
      </h2>
    </v-row>
    <v-divider class="ma-5"></v-divider>
    <v-row
      class="d-flex flex-column flex-md-row justify-center align-center pa-5 w-100"
    >
      <!-- card component -->
      <v-card
        class="pa-5 w-100 w-md-50"
        color="primary-darken-1"
        elevation="20"
      >
        <p class="text-left text-md-center w-100 pa-5">
          Lookout for a response from my email: cyberartbyjustin@gmail.com
        </p>
        <h3 class="text-left text-md-center w-100 pa-2">Message Details</h3>
        <v-divider class="ma-5" color="accent"></v-divider>
        <v-card-text>
          <div class="text-left text-h6 pa-2">Name</div>
          <div class="text-left text-subtitle-2 pa-2">
            {{ submittedItemsRef.name }}
          </div>
          <v-divider class="my-2" color="accent"></v-divider>
          <div class="text-left text-h6 pa-2">Email</div>
          <div class="text-left text-subtitle-2 pa-2">
            {{ submittedItemsRef.email }}
          </div>
          <v-divider class="my-2" color="accent"></v-divider>
          <div class="text-left text-h6 pa-2">Inquiry Type</div>
          <div class="text-left text-subtitle-2 pa-2">
            {{ submittedItemsRef.inquiryType }}
          </div>
          <v-divider class="my-2" color="accent"></v-divider>
          <div class="text-left text-h6 pa-2">Message</div>
          <div class="text-left text-subtitle-2 pa-2">
            {{ submittedItemsRef.message }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            to="/"
            variant="text"
            class="my-5"
            color="accent-darken-2"
            data-testid="return-home-button"
            >Go Home <v-icon icon="mdi-home"
          /></v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { FormSubmission, InquiryType } from "@/types/contact";
import { ref, Ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { uri } = route.query;

const submittedItemsRef: Ref<FormSubmission> = ref({
  name: "",
  email: "",
  message: "",
  inquiryType: InquiryType.Commission,
});

try {
  const uriParams = new URLSearchParams(uri as string);
  const submission: FormSubmission = {
    name: uriParams.get("name") as string,
    email: uriParams.get("email") as string,
    message: uriParams.get("message") as string,
    inquiryType: uriParams.get("inquiryType") as InquiryType,
  };
  submittedItemsRef.value = submission;
} catch {
  router.push("/404");
}
</script>

<script lang="ts">
export default {
  name: "FormSubmittedView",
  created() {
    document.title = "APXNR | Thank You";
  },
};
</script>
