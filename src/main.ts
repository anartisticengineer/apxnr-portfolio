import { createApp } from "vue";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomeView from "./components/views/HomeView.vue";
import AboutView from "./components/views/AboutView.vue";
import ContactView from "./components/views/ContactView.vue";
import ProjectView from "./components/views/ProjectView.vue";
import NotFoundView from "./components/views/NotFoundView.vue";
import FormSubmittedView from "./components/views/FormSubmittedView.vue";

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
    variations: {
      colors: ["background", "primary", "secondary", "accent", "error"],
      lighten: 2,
      darken: 2,
    },
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

const routes = [
  {
    path: "/",
    exact: true,
    component: HomeView,
  },
  {
    path: "/about-me",
    component: AboutView,
  },
  {
    path: "/contact",
    component: ContactView,
  },
  {
    path: "/success",
    component: FormSubmittedView,
  },
  {
    path: "/project/:id",
    component: ProjectView,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).mount("#app");
