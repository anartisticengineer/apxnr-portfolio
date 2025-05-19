<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">Contact</h1>
    <v-divider color="accent" />
    <div class="d-flex flex-column flex-md-row ma-5">
      <v-form class="ma-5 w-md-50" validate-on="blur">
        <v-text-field
          v-model="name"
          label="Name"
          variant="outlined"
          class="py-2"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          variant="outlined"
          class="py-2"
          required
        ></v-text-field>
        <v-select
          label="Inquiry Type"
          :items="['Commissions', 'Job Offers', 'Other/Just saying hi ;)']"
          variant="outlined"
        ></v-select>
        <v-textarea
          v-model="message"
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
<script>
export default {
  name: "ContactView",
};
</script>
