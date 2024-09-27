<template>
    <div class="bg-white p-4">
        <a-card v-for="widget in widgets" :key="widget.localName" class="mb-2">
            <div class="font-bold">{{ countryNames.filter((el) => el.countryCode === widget.countryCode)[0].name }}</div>
            <div>{{ widget.name }}</div>
            <div class="flex justify-end">{{ new Date(widget.date).toDateString() }}</div>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
const widgets = ref([])
onMounted(async () => {
    widgets.value = await store.dispatch("GET_RANDOM_PUBLIC_HOLIDAYS")
})
const countryNames = computed(() => {
    return store.getters.countries
})
</script>

<style scoped>

</style>