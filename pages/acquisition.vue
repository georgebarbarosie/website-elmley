<template>
    <div class="flex">
        <Carousel class="flex-1" v-bind="{height: '40em'}">
            <Slide>
                <video playsinline loop muted autoplay height="100%" width="100%"
                    preload="auto" aria-label="video-player" controlslist="nodownload">
                    <source src="/videos/acquisitions.webm" type="video/webm">
                    <source src="/videos/acquisitions.mp4" type="video/mp4">
                </video>
            </Slide>
        </Carousel>
    </div>

    <div
        class="m-10 flex-col flex backdrop-blur-xs -backdrop-hue-rotate-30 backdrop-contrast-40 bg-white/70 shadow-lg border-[#0000cc11] border-4 rounded-xl absolute top-12 left-0 z-2">
        <AppLogo class="h-56 m-8 fill-[#254741]" />
        <div class="flex flex-col m-4 mt-12 p-2 text-[#254741]">
            <h1 class="text-6xl font-bold mb-4 font-[thryomanes] uppercase pl-0">Elmley Homes</h1>
            <p class="text-2xl font-bold mb-6">Built With Pride</p>
        </div>
    </div>

    <div class="card">
        <p class="hyphens-auto" lang="en">
            At Elmley Homes, we are always looking for new residential sites, whether it's a large
            garden, an unused plot, or land with untapped potential. We specialise in building single
            bespoke homes and small developments of up to five properties, with a focus on thoughtful
            design and exceptional quality.
        </p>

        <p class="hyphens-auto" lang="en">
            With over 60 years of combined experience we offer a straightforward, flexible approach to
            land acquisition. You will deal directly with the decision-makers, ensuring a transparent and
            responsive process from initial enquiry through to completion.
        </p>

        <p class="hyphens-auto" lang="en">
            We understand that deciding to sell land, especially one tied to your home or family, is a
            significant decision. That is why we are committed to earning your trust. When you work with
            us you can be confident in our ability to deliver with integrity, professionalism, and
            complete confidentiality.
        </p>

        <p class="hyphens-auto" lang="en">
            If you have land you would like to discuss, please get in touch via email
            <a href="mailto:office@elmleyhomes.co.uk">office@elmleyhomes.co.uk</a> or contact us directly
            at phone number <a href="tel:+44 7802895387">+44 7802 895387</a> for a confidential conversation.
        </p>

    </div>
</template>
<script setup lang="ts">
import { Carousel, Slide} from 'vue3-carousel';

useHead({
    title: 'Elmley Homes - Land Acquisition',
    meta: [
        { name: 'description', content: 'Elmley Homes is actively seeking new residential sites for development. We offer a straightforward, flexible approach to land acquisition, including unconditional purchases, subject-to-planning agreements, options, or joint ventures.' },
        { name: 'keywords', content: 'Elmley Homes, land acquisition, residential development, land for sale, property development, Cotswolds, Stratford-Upon-Avon, Warwickshire, Cambridgeshire' }
    ]
});
</script>