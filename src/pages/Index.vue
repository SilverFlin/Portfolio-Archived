<script setup lang="ts">
// import { useI18n } from 'vue-i18n';

import { ref } from 'vue';

// const { t, availableLocales, locale } = useI18n();

// const toggleLocales = () => {
//   const locales = availableLocales;
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
// };

const show = ref(false);

setTimeout(() => {
  show.value = true;
}, 1000);
</script>
<template>
  <div class="container max-w-3xl mx-auto mt-10">
    <div class="h-40 mb-8">
      <transition
        enter-active-class="transition ease-out duration-1000 transform"
        enter-from-class="-translate-x-100 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-in duration-1000 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <img
          v-if="show"
          alt="Vitesome logo"
          class="w-52 mx-auto mb-12"
          :src="'imagotype.svg'"
        />
      </transition>
    </div>

    <HelloWorld />
    <div class="max-w-3xl mx-auto mt-10">
      <Carousel></Carousel>
    </div>
  </div>
  <Footer />
</template>
