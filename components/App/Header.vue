<!-- sticky header with 3-item navigation, responsive, collapsible -->
<script setup lang="ts">
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const router = useRouter();
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log('Menu toggled:', isOpen.value);
};
// on navigation change, close the menu if it is open
router.afterEach(() => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});

// we should initialize depending on the user's browser preference
const colorMode = useColorMode();

// Listen for dark mode toggle event
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

const getDarkModeIcon = () => {
  return colorMode.value === 'dark' ? faSun : faMoon;
};

</script>
<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <button @click="toggleMenu" class="text-gray-500 focus:outline-none md:hidden">
            <FontAwesome :icon="faBars" class="h-6 w-6" />
        </button>
        <div class="flex items-center space-x-2 grow justify-center md:justify-start">  
          <div class="flex items-center space-x-0">
            <AppLogo class="dark:fill-yellow-500 fill-[#254741] h-16 p-1"/>
            <span class="text-3xl font-semibold font-[thryomanes] uppercase">Elmley Homes</span>
          </div>
        </div>
        <AppMenu class="hidden md:flex space-x-4" />

        <div class="md:hidden bg-white dark:bg-[#27403c] p-4 border-t border-gray-200 absolute top-full left-0 w-full drop-shadow-md" :class="{ 'block': isOpen, 'hidden': !isOpen }">
          <AppMenu class="flex flex-col space-x-4 gap-2.5" />
        </div>

        <!-- dark mode toggle button -->
        <button @click="toggleDarkMode" class="ml-4 text-gray-500 focus:outline-none hover:text-gray-700">
          <FontAwesome :icon="getDarkModeIcon()" class="h-6 w-6" />
        </button>
      </div>
    </div>
    <!-- Spacer for fixed header -->
    <div class="h-16"></div> 
  </header>
  <!-- Padding to avoid content being hidden under the header -->
  <div class="pt-16"> 
    <slot></slot>
  </div>
</template>
