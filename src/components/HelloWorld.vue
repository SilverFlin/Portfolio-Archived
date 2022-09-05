<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
// import { NButton } from 'naive-ui';

defineProps({
  msg: {
    type: String,
    default: '',
  },
});

// const { t } = useI18n();
</script>
<template>
  <div class="text-center text-md h-20 mb-8">
    <h1 class="font-serif font-bold font-bold text-4xl mb-8">
      {{ 'Portafolio de Trabajos LT' }}
    </h1>

    <!-- <n-button size="large" type="info" ghost>naive-ui</n-button> -->
  </div>
</template>
