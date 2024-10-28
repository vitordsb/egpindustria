import "./assets/main.css";
import { createI18n } from "vue-i18n";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import es from "./locales/es.json"
import pt from "./locales/pt.json"

const i18n = createI18n({
  locale: localStorage.getItem("language") || "pt", // Carregar do localStorage
  fallbackLocale: "pt",
  messages: {
      pt,
    es,
  },
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
