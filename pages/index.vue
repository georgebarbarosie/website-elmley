<template>
    <div class="flex">
        <Carousel class="flex-1" v-bind="carouselConfig">
            <Slide>
                <NuxtImg src="/images/index-carousel-1-bungalow.png" />
            </Slide>
            <Slide>
                <NuxtImg src="/images/index-carousel-2-interior-light.png" />
            </Slide>

            <Slide>
                <NuxtImg src="/images/index-carousel-3-living.png" />
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
            <h1 class="text-6xl font-bold mb-4 font-[thryomanes] uppercase pl-0">Elmley Homes</h1>
            <p class="text-2xl font-bold mb-6">Built With Pride</p>
        </div>
    </div>

    <div class="card card-main">
        <h1>Your Trusted Partner in Land Development</h1>
        <p>
            At Elmley Homes, our mission is to create exceptional, design-led homes that are both architecturally refined and sensitive to their surroundings. 
            We are dedicated to creating homes that meet the needs of contemporary living, and enrich the character of the communities to which they belong.
        </p>
    </div>

    <div class="card hyphens-auto" lang="en">
        <h1>About Us</h1>
        <p>
            We are a property developer who specialises in providing bespoke luxury homes.
        </p>

        <p>
            At the heart of our approach is the careful selection of exclusive plots, often nestled
            within areas of outstanding natural beauty within the most desirable settings across 
            <strong>The Cotswolds, Stratford-Upon-Avon, Warwickshire, Oxfordshire and Cambridgeshire</strong>.
        </p>

        <p>
            We believe that exceptional homes begin with exceptional locations.
        </p>

        <p>
            Each site we acquire is chosen not just for its setting, but for the potential to create something
            truly unique. Our designs are guided by a deep understanding of land, planning policy and
            local identity. We are always considerate of the surrounding environment, enhancing the local
            character through architecture that is both timeless and contemporary.
        </p>

        <p>
            Every home we build is individually designed, ensuring that each development is as
            distinctive as the land it stands on. Our commitment is to craft homes that are elegant,
            functional, and in harmony with their surroundings.
        </p>
    </div>
</template>
<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination} from 'vue3-carousel';

const carouselConfig = {
  height: '40em',
  itemsToShow: 1,
  autoplay: 5000,
  wrapAround: true,
}

useHead({
    title: 'Elmley Homes - Your Trusted Partner in Land Development',
    meta: [
        { name: 'description', content: 'Elmley Homes is dedicated to crafting exceptional, design-led homes that are architecturally refined and sensitive to their context. We create places that honour their surroundings and enrich the character of the communities they belong to.' },
        { name: 'keywords', content: 'Elmley Homes, land development, design-led homes, Cotswolds, Stratford-Upon-Avon, Warwickshire, Cambridgeshire, premium housebuilder, traditional architecture, affordable luxury' }
    ]
});
</script>
<style>

</style>