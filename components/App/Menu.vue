<template>
    <nav class="font-bold text-lg text-gray-700 dark:text-gray-400">
        <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :class="{
                'border-b-gray-700 dark:border-b-gray-400': isActive(link.to),
                'border-b-transparent hover:border-b-gray-700 dark:hover:border-b-gray-400': !isActive(link.to),
            }"
            class="border-b-4 transition duration-1000"
        >
            {{ link.label }}
        </NuxtLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Land Acquisition', to: '/acquisition' },
                { label: 'Contact', to: '/contact' },
            ],
        };
    },
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
    },
};
</script>
