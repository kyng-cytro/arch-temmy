<script setup lang="ts">
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sections = gsap.utils.toArray(".scroll section");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      scroller: ".main",
      trigger: ".scroll",
      pin: true,
      scrub: 1,
      end: `+=3000`,
      snap: 1 / (sections.length - 1),
    },
  });

  gsap.to(".arc", {
    xPercent: -100,
    yPercent: -100,
    rotate: 30,
    scrollTrigger: {
      scroller: ".main",
      markers: true,
      scrub: true,
      start: 10,
      end: "+=1000",
    },
  });

  gsap.to(".name", {
    xPercent: 100,
    yPercent: 100,
    rotate: -30,
    scrollTrigger: {
      scroller: ".main",
      markers: true,
      scrub: true,
      start: 10,
      end: "+=1000",
    },
  });

  gsap.to(".nav", {
    opacity: 0,
    scrollTrigger: {
      scroller: ".main",
      markers: true,
      scrub: true,
      start: 10,
      end: "+=1000",
    },
  });

  gsap.to(".about", {
    x: -800,
    y: 500,
    scrollTrigger: {
      scroller: ".main",
      markers: true,
      scrub: true,
      pin: true,
      start: 10,
      end: "+=1000",
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
      class="main custom-scroll-bar absolute top-0 right-0 h-full w-full bg-primary-dark/95 overflow-y-scroll scroll-smooth font-mono text-white-accent"
    >
      <!-- header -->
      <div
        class="relative flex flex-col justify-center items-center header min-h-full h-full w-full text-white-accent"
      >
        <span class="arc text-8xl font-bold leading-[4.5rem] tracking-[1rem]"
          >ARC</span
        >
        <span class="name text-lg tracking-tight">Temitope Oladapo Victor</span>
        <nav class="nav flex gap-8 mt-8 text-secondary-light">
          <NuxtLink
            class="text-white-accent font-semibold hover:underline hover:text-white-accent focus:text-white-accent"
            to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            class="about hover:underline hover:text-white-accent focus:text-white-accent"
            to="#about"
            >About</NuxtLink
          >

          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="#projects"
            >Projects</NuxtLink
          >
          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="#blog"
            >Blog</NuxtLink
          >
          <NuxtLink
            class="hover:underline hover:text-white-accent focus:text-white-accent"
            to="#contact"
            >Contact</NuxtLink
          >
        </nav>
        <div
          class="flex flex-col items-center absolute bottom-5 animate-bounce"
        >
          <span class="uppercase">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <!-- About & Project Cards -->
      <div class="scroll min-h-full w-full h-full overflow-x-hidden">
        <div class="scroll-conatiner h-[100%] flex flex-nowrap">
          <section class="flex-shrink-0 bg-primary-dark h-full w-full p-10">
            <div>
              <span class="text-3xl font-bold tracking-tighter">About</span>
              <hr class="max-w-md" />
            </div>
            <div class="h-full flex w-full">
              <div class="h-full w-full">wdw</div>

              <div class="h-full w-full">wdw</div>
            </div>
          </section>
          <section class="flex-shrink-0 bg-green-500 h-full w-full"></section>
          <section class="flex-shrink-0 bg-yellow-500 h-full w-full"></section>
          <section class="flex-shrink-0 bg-orange-500 h-full w-full"></section>
        </div>
      </div>

      <div class="min-h-full h-full"></div>
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
