declare module "react-country-state-city" {
  export const CountrySelect: any;
  export const StateSelect: any;
  export const CitySelect: any;
}

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;
