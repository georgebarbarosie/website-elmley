<template>
    <!-- <div class="flex">
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
    </div> -->

    <div class="card flex flex-col md:flex-row md:items-center">
        <div class="flex-1" style="margin: -16px;">
            <NuxtImg 
                src="/images/contact-desk.png"
                class="rounded-lg shadow-lg"
                style="max-width:800px; max-height:600px; width:100%; height:auto; object-fit:cover;"
            />
        </div>
        <div class="flex-1 mt-8 md:mt-0 lg:mt-0 md:ml-6">
                <table class="flex">
                    <tbody>
                    <tr>
                        <td class="pr-4 align-top">
                            Email:
                        </td>
                        <td>
                            <a href="mailto:office@elmleyhomes.co.uk">office@elmleyhomes.co.uk</a> <br/>
                            <a href="mailto:land@elmleyhomes.co.uk">land@elmleyhomes.co.uk</a> <br/>
                            <a href="mailto:info@elmleyhomes.co.uk">info@elmleyhomes.co.uk</a> <br />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><a href="tel:+44 7802895387">+44 7802 895387</a></td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NuxtImg } from '#components';
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