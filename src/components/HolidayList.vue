<template>
  <div class="grid grid-cols-3">
    <a-card
      v-for="(holiday, index) in props.holidays"
      :key="index"
      class="mt-4"
      style="height: 100px; width: 350px"
    >
    <template #title>
        <a-tooltip v-if="holiday.name.length > 40">
            <template #title>{{holiday.name}}</template>
            {{ holiday.name.slice(0,40) + '...'}}
        </a-tooltip>
        <span v-else>{{holiday.name}}</span>
    </template>
      <div class="flex justify-between">
        <a-tooltip v-if="holiday.localName.length > 25">
            <template #title>{{holiday.localName}}</template>
            {{ holiday.localName.slice(0,24) + '...'}}
        </a-tooltip>
        <span v-else>{{ holiday.localName }}</span>
        <span>{{ holiday.date }}</span>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["holidays"]);
</script>

<style scoped></style>
