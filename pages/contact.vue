<template>
    <div class="card flex flex-col md:flex-row md:items-center md:align-top">
        <div class="flex-1 -m-4">
            <NuxtImg 
                src="/images/contact-desk.png"
                class="rounded-lg shadow-lg max-w-[800px] max-h-[600px] h-auto w-[100%] object-cover"
            />
        </div>
        <div class="flex-1 mt-8 md:mt-0 lg:mt-0 md:ml-6 md:h-[100%] p-8">
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
                        <td><a href="tel:+44 7749106237">+44 7749 106237</a></td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NuxtImg } from '#components';

useHead({
    title: 'Contact Us - Elmley Homes',
    meta: [
        { name: 'description', content: 'Get in touch with Elmley Homes. We are here to assist you with your real estate needs.' },
        { name: 'keywords', content: 'Elmley Homes, contact us, real estate, housing' }
    ]
});
</script>