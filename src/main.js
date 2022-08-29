import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

const i18n = createI18n({
  locale: "en",
  legacy: false,
  messages: {
    en: {
      currency: "$"
    },
    ru: {
      currency: "₽"
    }
  }
});

createApp(App).use(i18n).mount("#app");
