<template>
    <div class="flex">
        <Carousel class="flex-1" v-bind="carouselConfig">
            <Slide>
                <img src="~/assets/images/bungalow-1.png">
            </Slide>
            <Slide>
                <img src="~/assets/images/rose-street-1.png">
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>

    <div class="m-10 flex-col flex backdrop-blur-xs -backdrop-hue-rotate-30 backdrop-contrast-40 bg-white/70 shadow-lg border-[#0000cc11] border-4 rounded-xl absolute top-12 left-0 z-2">
        <AppLogo class="h-56 m-8 fill-[#254741]" />
        <div class="flex flex-col m-4 mt-12 p-2 text-[#254741]">
            <h1 class="text-6xl font-bold mb-4 font-[thryomanes] uppercase">Elmley Homes</h1>
            <p class="text-2xl font-bold mb-6">Built With Pride</p>
        </div>
    </div>

    <div class="card">
        <h1>Our mission statement</h1>

        <p>
            At Elmley Homes, we are committed to building high-quality, affordable homes that meet the needs of our community. Our mission is to create spaces where families can thrive and build lasting memories.
        </p>
        <p>
            We believe in the power of homeownership to transform lives and communities. Our team works tirelessly to ensure that every home we build is a testament to our dedication to quality, sustainability, and customer satisfaction.
        </p>
    </div>
</template>
<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination} from 'vue3-carousel';
// import bungalowImage1 from '~/assets/images/bungalow-1.png';

const carouselConfig = {
  height: '40em',
  itemsToShow: 1,
  autoplay: 5000,
  wrapAround: true,
}

useHead({
    title: 'Elmley Homes - Your Trusted Real Estate Partner',
    meta: [
        { name: 'description', content: 'Discover Elmley Homes, your trusted partner in real estate. Explore our listings and find your dream home today.' },
        { name: 'keywords', content: 'Elmley Homes, real estate, housing, property listings' }
    ]
});
</script>
<style>
.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  /* border-radius: 8px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>