<template>
  <div>
    <SearchInput />
    <div class="mt-4 grid grid-cols-2 gap-8">
      <div >
        <span class="font-semibold text-2xl">Countries list</span>
        <CountryList />
      </div>
      <div>
        <span class="font-semibold text-2xl">Random Countries Widget</span>
        <CountryWidgetList/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/SearchInput.vue";
import CountryList from "@/components/CountryList.vue";
import CountryWidgetList from "@/components/CountryWidgetList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SearchInput,
    CountryList,
    CountryWidgetList
  },
});
</script>
