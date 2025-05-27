<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">Contact</h1>
    <v-divider color="accent" />
    <div class="d-flex flex-column flex-md-row ma-5">
      <v-form
        class="ma-5 w-md-50"
        validate-on="blur"
        @submit="handleSubmit"
        ref="form"
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          variant="outlined"
          class="py-2"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          type="email"
          variant="outlined"
          class="py-2"
          required
        ></v-text-field>
        <v-select
          label="Inquiry Type"
          v-model="inquiryType"
          :rules="inquiryTypeRules"
          :items="[
            'Commissions',
            'Job Opportunities',
            'Other/Just saying hi ;)',
          ]"
          variant="outlined"
        ></v-select>
        <v-textarea
          v-model="message"
          :rules="messageRules"
          label="Message"
          variant="outlined"
          class="py-2"
          required
        ></v-textarea>
        <v-btn block color="accent" type="submit" variant="tonal">Submit</v-btn>
      </v-form>
      <aside
        class="text-body-2 text-lg-body-1 text-center text-md-left ma-5 w-md-50"
      >
        Placeholder here. The form doesn't do anything.
      </aside>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
//form reference
const form = ref();
//form elements and rules
const name = ref("");
const nameRules = [(v: string) => !!v || "Name is required"];
const email = ref("");
const emailRules = [
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];
const inquiryType = ref("");
const inquiryTypeRules = [(v: string) => !!v || "Inquiry type is required"];
const message = ref("");
const messageRules = [(v: string) => !!v || "Message is required"];
//submit form elements
const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (form.value.isValid) {
    alert("Form submitted");
  }
};
</script>

<script lang="ts">
export default {
  name: "ContactView",
};
</script>
