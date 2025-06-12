<script setup lang="ts">
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
</script>

<template>
  <div class="grow"></div>
  <footer class="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md bottom-0 w-full z-10 h-32 md:h-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between h-full">
      <span class="text-sm w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">©2025 ELMLEY HOMES</span>
      <div class="flex flex-wrap justify-center sm:justify-start space-x-4 w-full md:w-auto">
        <a href="#" class="text-sm hover:underline">Privacy Policy</a>
        <a href="#" class="text-sm hover:underline">Terms of Service</a>
        <a href="#" class="text-sm hover:underline">Contact Us</a>
      </div>
      <div class="flex justify-center sm:justify-end space-x-4 w-full md:w-auto mt-2 sm:mt-0">
        <a href="#" class="text-gray-500 hover:text-gray-700 hover:transform hover:rotate-x-180 transition duration-[1200ms]">
          <!-- nuxt-fontawesome facebook icon-->
           <FontAwesome :icon="faFacebook" class="h-6 w-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 hover:transform hover:rotate-y-180 transition duration-[1200ms]">
          <!-- nuxt-fontawesome twitter icon-->
          <FontAwesome :icon="faTwitter" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </footer>
</template>
