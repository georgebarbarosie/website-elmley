<template>
    <h1>About us</h1>

    <h2>What we do</h2>
    <h2>Where we do it</H2>
        
    <h2>Chapter 1</h2>
    <h2>Chapter 2</h2>

    <!-- long list of numbers -->
    <ul>
        <li v-for="i in 100" :key="i">{{ i }}</li>
    </ul>

</template>
<!-- set page title -->
<script setup lang="ts">
useHead({
    title: 'About Us - Elmley Homes',
    meta: [
        { name: 'description', content: 'Learn more about Elmley Homes, our mission, and the areas we serve.' },
        { name: 'keywords', content: 'Elmley Homes, about us, real estate, housing' }
    ]
});
</script>