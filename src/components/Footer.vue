<template>
  <footer class="text-center">
    <ul class="flex justify-between w-1/3 mx-auto mb-8">
      <li class="cursor-pointer text-2xl">
        <a
          href="https://www.linkedin.com/in/luis-angel-toledo-russo-19093822a/"
          rel="noreferrer"
          target="_blank"
          class="footer-link text-cyan-700 hover:text-cyan-500"
          title="Linkedin"
        >
          <i class="i-ph-linkedin-logo-thin" />
        </a>
      </li>
      <li class="cursor-pointer text-2xl">
        <a
          href="#"
          @click="toggleDark"
          class="text-cyan-700 hover:text-cyan-500"
          :title="'toggle_theme'"
        >
          <i i="ph-sun dark:ph-moon" />
        </a>
      </li>
      <li class="cursor-pointer text-2xl">
        <a
          href="https://github.com/SilverFlin"
          rel="noreferrer"
          target="_blank"
          class="footer-link text-cyan-700 hover:text-cyan-500"
          title="Github"
        >
          <i class="i-ph-github-logo" />
        </a>
      </li>
    </ul>

    <span class="text-xs"
      >{{ 'Hecho por' }}
      <a
        class="footer-link text-cyan-400 hover:text-cyan-500"
        href="https://github.com/alvarosabu/vitesome"
        rel="noreferrer"
        target="_blank"
        >Luis Toledo</a
      ></span
    >
  </footer>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
import { useTheme } from '/@/composables';

const { toggleDark } = useTheme();

defineProps({
  msg: {
    type: String,
    default: '',
  },
});

// const { t } = useI18n();
</script>

<style>
a,
.footer-link {
  @apply transition-all ease-out duration-100;
}

.footer-link {
  opacity: 0.8;
}
</style>
