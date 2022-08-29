<template>
  {{ t("title") }}
  {{ t("price") }}
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n({
      messages: {
        en: {
          title: "Title",
          price: "100 @:currency",
        },
        ru: {
          title: "Заголовок",
          price: "100 @:currency",
        },
      },
    });
    return { t };
  },
};
</script>
