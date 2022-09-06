<template>
    <p class="text-7xl text-white">Results</p>
    <p class="text-4xl text-white mt-4">Total books found :</p>
    <ListComponent class="max-w-2xl mx-auto mt-12" />
</template>

<script>
    import ListComponent from "../components/ListComponent.vue";

    export default {
        components: {
            ListComponent
        }
    }
</script>