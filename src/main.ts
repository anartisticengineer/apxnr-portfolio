import { createApp } from "vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        colors: {
          background: "#1b1b1b",
          primary: "#e9e9e9",
          secondary: "#f8f8ff",
          accent: "#279af1",
          error: "#ff337a",
        },
      },
    },
  },
});

createApp(App).use(vuetify).mount("#app");
