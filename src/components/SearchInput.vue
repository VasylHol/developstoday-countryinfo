<template>
  <a-input v-model:value="search" placeholder="Search a country" class="w-80" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import store from "@/store";
const search = ref<string>("");

onMounted(() => {
  store.commit('changeSearch', '')
})
watch(search, () => {
  store.commit('changeSearch', search.value)
});
</script>

<style lang="scss" scoped></style>
