<template>
    <div class="card">
        
        <h1>
            <FontAwesome :icon="faHandsHoldingCircle" class="inline-block mr-2" />
            Land</h1>
        <p class="hyphens-auto" lang="en">
            We actively seek land with development potential ranging from spacious gardens to unused plots and underutilised sites.
            There is no risk or cost to the landowner and we are happy to contribute to the landowner's legal fees.
        </p>
    </div>

    <div class="card">
        <h1>
            <FontAwesome :icon="faCompassDrafting" class="h-6 w-6 inline-block mr-2" />
            Bespoke Design</h1>
        <p class="hyphens-auto" lang="en">
            Every site deserves a design solution that responds to its unique location. We together with
            our team of experts focus on bespoke residential design that balances
            character, quality, and market demand, often blending traditional architectural elements with
            contemporary living standards. Once planning permission is secured, we prepare the site
            with a fully considered, build-ready scheme positioned for successful and efficient
            development.
        </p>
    </div>

    <div class="card">
        <h1>
            <FontAwesome :icon="faWandMagicSparkles" class="h-6 w-6 inline-block mr-2" />
            Planning Permission</h1>
        <p class="hyphens-auto" lang="en">
            We specialise in securing well-considered planning permission through close collaboration with a
            trusted network of consultants. We manage the entire process, from early feasibility to final
            submission. Our proposals are carefully shaped to meet local policy, reflect the character of the
            area, and deliver strong commercial outcomes. All planning and professional fees are paid by us
            with no cost to the seller.
        </p>
    </div>
</template>
<!-- set page title -->
<script setup lang="ts">
import { faCompassDrafting, faHandsHoldingCircle, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
useHead({
    title: 'Elmley Homes - Our Services',
    meta: [
        { name: 'description', content: 'Explore the services offered by Elmley Homes, including land acquisition, bespoke design, and planning permission. Discover how we can help you develop your property.' },
        { name: 'keywords', content: 'Elmley Homes, services, land acquisition, bespoke design, planning permission, property development' }
    ]
});
</script>