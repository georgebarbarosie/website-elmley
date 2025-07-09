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
        <h1>Our Mission</h1>
        <p>
            At Elmley Homes, our mission is to become your trusted partner in land and home development,
            to deliver exceptional, design-led homes that are both architecturally considered and contextually appropriate. We are committed to creating places that respect their setting, respond to the needs of modern living, and contribute meaningfully to the fabric of the community.
            Our developments are carefully curated—each project shaped by a deep understanding of land, planning, and place. We prioritise quality over scale, focusing on building homes of enduring value with a meticulous, end-to-end approach.
        </p>
    </div>

    <div class="card">
        <h1>A Trusted Partner in Land and Home Development</h1>

        <h2>Honest, Transparent, Professional</h2>
        <div class="flex items-start">
            <img src="~/assets/images/luxurious-modern-1.png" alt="Luxurious Modern Home" class="w-1/3 mr-4">
            <p>
            We know exploring development can be daunting. That's why Elmley Homes brings openness, reliability, and deep industry experience to every conversation.
            Our team is here to guide you through the process, ensuring you feel informed and confident at every step.
            We pride ourselves on our integrity and professionalism, making sure you always know where you stand.
            With Elmley Homes, you can trust that your interests are our top priority.
            </p>
        </div>

        <h2>Complete, End-to-End Expertise</h2>
        <p>Our team covers every stage—land potential analysis, planning, construction, and sale—to ensure a smooth and successful process.</p>

        <h2>Focused on Single Homes with Generous Gardens</h2>
        <p>We specialise in creating high-quality single homes with reasonable garden space that blend seamlessly with the local area.</p>

        <h2>Supportive at Every Step</h2>
        <p>Whether you're ready to sell or just exploring possibilities, we offer a hands-on, no-pressure approach tailored to your needs.</p>

        <h2>Get in Touch—Let's Explore the Potential</h2>
        <p>We're actively looking for land and would love to hear from you. Contact us today to find out how we can work together.</p>

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

.carousel img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>