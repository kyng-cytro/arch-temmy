<script setup lang="ts">
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".first-card", {
    width: "90%",
    scrollTrigger: {
      markers: true,
      scroller: ".main",
      trigger: ".first-card",
      start: 5,
      end: "center center",
      scrub: 2,
    },
  });
});
</script>
<template>
  <div class="relative min-h-screen text-white-accent">
    <NuxtImg
      class="absolute top-0 right-0 h-full w-full lg:object-contain"
      src="images/backdrop.png"
      placeholder
    />
    <div
      class="main custom-scroll-bar absolute top-0 right-0 h-full w-full bg-primary-dark/95 overflow-y-scroll p-10 scroll-smooth"
    >
      <!-- header -->
      <div
        class="flex flex-col justify-center items-center header min-h-[50%] font-mono text-white-accent"
      >
        <span class="text-8xl font-bold leading-[4.5rem] tracking-[1rem]"
          >ARCH</span
        >
        <span class="text-lg tracking-tight">Temitope Oladapo Victor</span>
        <nav class="flex gap-8 mt-8 text-secondary-light">
          <NuxtLink
            class="text-white-accent font-semibold hover:underline hover:text-white-accent focus:text-white-accent"
            to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="#projects"
            >Projects</NuxtLink
          >
          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="/blog"
            >Blog</NuxtLink
          >
          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="#about"
            >About</NuxtLink
          >
          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="#contact"
            >Contact</NuxtLink
          >
        </nav>
      </div>
      <!-- First Card -->
      <div
        class="shadow-lg shadow-primary-light/40 first-card rounded-lg min-h-full h-full w-[60%] bg-secondary-dark mx-auto p-2 flex"
      >
        <section class="flex-shrink-0 bg-red-500 h-full w-full"></section>
        <section class="flex-shrink-0 bg-green-500 h-full w-full"></section>
        <section class="flex-shrink-0 bg-yellow-500 h-full w-full"></section>
      </div>
    </div>
  </div>
</template>

<style>
.custom-scroll-bar::-webkit-scrollbar {
  background-color: transparent;
  width: 5px;
  height: 5px;
}

.custom-scroll-bar::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 4px;
  padding-left: 10px;
}
</style>
