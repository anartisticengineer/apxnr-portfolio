import { createApp } from "vue";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { fa } from "vuetify/lib/iconsets/fa.mjs";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
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
