<template>
  <div class="mt-4 overflow-y-scroll" style="height: 31.5rem;">
    <a-card v-for="country in countryList" :key="country.countryCode" class="mb-4 p-4 flex justify-center cursor-pointer border-2 border-white hover:border-green-700" @click="goToCountry(country)">
      {{ country.name }}
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import router from "@/router";
import { CountryInList } from "@/types/types";
import store from "@/store";
onMounted(async () => {
  await store.dispatch("SET_COUNTRIES")
});
const countryList = computed(() => {
  return store.getters.countryList
})
const goToCountry = (country: CountryInList) => {
  router.push(`/country/${country.countryCode}`)
}

</script>

<style scoped lang="scss">

</style>
