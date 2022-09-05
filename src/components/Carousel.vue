<script setup lang="ts">
// import { ref, computed } from 'vue';
import { NCarousel, NCarouselItem } from 'naive-ui';
// const effectRef = ref<'slide' | 'fade' | 'card'>('slide');
// const isCardRef = computed(() => effectRef.value === 'card');
// defineProps({
// setup() {

// const isCard = true;
</script>

<template>
  <div>
    <n-carousel
      :key="'card'"
      :effect="'card'"
      :centered-slides="true"
      :slides-per-view="'auto'"
      draggable
      style="height: 240px"
      :autoplay="true"
    >
      <n-carousel-item :style="{ width: '60%' }">
        <router-link to="/home/test">
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
          />
        </router-link>
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
      </n-carousel-item>
      <n-carousel-item :style="{ width: '60%' }">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<style>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
