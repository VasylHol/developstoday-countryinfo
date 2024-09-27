export interface CountryInList {
  countryCode: string;
  name: string;
}

export interface Country {
  commonName: string | null,
  officialName: string | null,
  countryCode: string | null,
  region: string | null,
  borders?: Country[] | null,
}

export interface State {
  search: string,
  countries: CountryInList[]
}
