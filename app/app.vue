<template>
  <NuxtLayout>
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>


<script setup lang="ts">

  import { Toaster } from 'vue-sonner';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  onMounted(() => {
    AOS.init();
  });


  useHead({link: [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Akrux-Light.otf',
      type: 'font/otf',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/sc.otf',
      type: 'font/otf',
      crossorigin: 'anonymous'
    },
     {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Poppins-Regular.ttf',
      type: 'font/ttf',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Birthstone-Casual-Regular.ttf',
      type: 'font/ttf',
      crossorigin: 'anonymous'
    }
  ]})
</script>

<style>
  @font-face {
    font-family: 'Akrux-Light';
    src: url('/fonts/Akrux-Light.otf') format('opentype');
  }
  @font-face {
    font-family: 'dramaturg';
    src: url('/fonts/sc.otf') format('opentype');
  }
   @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf') format('opentype');
  }
  @font-face {
    font-family: 'Birthstone-Casual-Regular';
    src: url('/Birthstone-Casual-Regular.ttf') format('opentype');
  }
</style>
