<template>
    <div class="flex">
        <Carousel class="flex-1" v-bind="carouselConfig">
            <Slide>
                <img src="~/assets/images/contact-desk.png">
            </Slide>
        </Carousel>
    </div>


    <div class="card">
        <p class="hyphens-auto" lang="en">
            Email: <a href="mailto:office@elmleyhomes.co.uk">office@elmleyhomes.co.uk</a>
        </p>

        <p class="hyphens-auto" lang="en">
            Phone: <a href="tel:+44 774599099">+44 7745 99099</a>
        </p>
    </div>
</template>
<script setup lang="ts">
import { Carousel, Slide, Navigation, Pagination} from 'vue3-carousel';

const carouselConfig = {
  height: '40em'
}

useHead({
    title: 'Contact Us - Elmley Homes',
    meta: [
        { name: 'description', content: 'Get in touch with Elmley Homes. We are here to assist you with your real estate needs.' },
        { name: 'keywords', content: 'Elmley Homes, contact us, real estate, housing' }
    ]
});
</script>