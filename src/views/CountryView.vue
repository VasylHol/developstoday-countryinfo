<template>
  <div>
    <div class="font-semibold text-4xl mb-4">
      {{ countryInfo?.officialName }}
    </div>
    <HolidayList :holidays="holidays" />
    <div class="flex justify-center mt-8 gap-2">
      <a-button
        v-for="date in datesOptions"
        :key="date"
        class="px-8"
        @click="changeYearHolidays(date)"
        :style="{ 'border-color': currentDate === date ? 'red' : 'inherit' }"
        >{{ date }}</a-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiMethods } from "@/api/index";
import { onMounted, ref } from "vue";
import { Country } from "@/types/types";
import HolidayList from "@/components/HolidayList.vue";
const props = defineProps(["countryId"]);
const countryInfo = ref<Country | null>(null);
const holidays = ref();
const currentDate = ref<number>(2024);
onMounted(async () => {
  countryInfo.value = await apiMethods.getCountry(props.countryId);
  await changeYearHolidays(currentDate.value);
});
const changeYearHolidays = async (year: number) => {
  currentDate.value = year;
  holidays.value = await apiMethods.getCountryHolidays(props.countryId, year);
};
const datesOptions = [
  2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
];
</script>

<style scoped></style>
