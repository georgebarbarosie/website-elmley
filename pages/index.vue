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

    <div class="card card-main">
        <h1>Your Trusted Partner in Land Development</h1>
        <p class="hyphens-auto" lang="en">
            At Elmley Homes, our mission is to craft exceptional, design-led homes that are both architecturally refined and sensitive to their context. 
            We are dedicated to creating places that honour their surroundings, meet the needs of contemporary living, and enrich the character of the
            communities they belong to.
        </p>
    </div>

    <div class="card">
        <h1>About Us</h1>
        <p class="hyphens-auto" lang="en">
            At Elmley Homes, we bring your dream home to life by crafting beautifully considered homes that reflect your aspirations and fit seamlessly
            within the most desirable settings across
                <strong>The Cotswolds</strong>,
                <strong>Stratford-Upon-Avon</strong>,
                <strong>Warwickshire</strong> and
                <strong>Cambridgeshire</strong>.
        </p>

        <p class="hyphens-auto" lang="en">
            Every development is thoughtfully curated and guided by a deep understanding of 
            <strong>land</strong>, 
            <strong>planning policy</strong>, and 
            <strong>local identity</strong>.
            We place quality
            above quantity, delivering homes of enduring value through a meticulous, end-to-end approach that combines vision, expertise, and care at every stage.
        </p>
        
        <p class="hyphens-auto" lang="en">
            As a premium housebuilder, we combine 
            <strong>traditional architecture</strong> and <strong>authentic detailing</strong> with modern layouts and the latest in <strong>technology and sustainability</strong>. 
            The result is a harmonious blend of timeless style and contemporary comfort.
        </p>

        <p class="hyphens-auto" lang="en">
            We believe in delivering <strong>affordable luxury</strong>&mdash;homes with elevated specifications, meticulous craftsmanship, and a commitment to quality that distinguishes 
            every Elmley Homes project. With a hands-on, end-to-end approach, we prioritise lasting value over volume, and integrity in everything we do.
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
    title: 'Elmley Homes - Your Trusted Partner in Land Development',
    meta: [
        { name: 'description', content: 'Elmley Homes is dedicated to crafting exceptional, design-led homes that are architecturally refined and sensitive to their context. We create places that honour their surroundings and enrich the character of the communities they belong to.' },
        { name: 'keywords', content: 'Elmley Homes, land development, design-led homes, Cotswolds, Stratford-Upon-Avon, Warwickshire, Cambridgeshire, premium housebuilder, traditional architecture, affordable luxury' }
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

.carousel img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>