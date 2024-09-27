import api from "./api";

export const apiMethods = {
  async getNextRandomPublicHolidays() {
    const data = await api().get(`/NextPublicHolidaysWorldwide`);
    return data.data;
  },
  async getCountriesList() {
    const data = await api().get(`/AvailableCountries`);
    return data.data;
  },
  async getCountry(countryId: number){
    const data = await api().get(`/CountryInfo/${countryId}`)
    return data.data;
  },
  async getCountryHolidays(countryId: number, year: number){
    const data = await api().get(`/PublicHolidays/${year}/${countryId}`)
    return data.data;
  }
};
