import { createStore } from "vuex";
import { State } from "@/types/types";
import { apiMethods } from "@/api";

export default createStore<State>({
  state: {
    search: "",
    countries: [],
  },
  getters: {
    countryList: (state) => {
      return state.countries.filter((el) =>
        el.name.toLowerCase().includes(state.search.toLowerCase())
      );
    },
    countries: (state) => state.countries
  },
  mutations: {
    changeSearch(state, payload: string) {
      state.search = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async SET_COUNTRIES(context) {
      const data = await apiMethods.getCountriesList();
      context.commit("setCountries", data);
    },
    async GET_RANDOM_PUBLIC_HOLIDAYS() {
      const data = await apiMethods.getNextRandomPublicHolidays();
      const shuffle = (array: string[]) => { 
        return array.map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value); 
    }; 
      const shuffledArray = shuffle(data)
      return shuffledArray.slice(0,3)
    },
  },
});
