import { useState } from "react";
import Select from "react-select";
import { Country, City } from "country-state-city";

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

type Props = {
  selectedCountry: option;
  setSelectedCountry: (option: option) => void;
  selectedCity: cityOption;
  setSelectedCity: (option: cityOption) => void;
};

export const LocationPicker = ({
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
}: Props) => {
  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <Select
        className="text-black"
        value={selectedCountry}
        onChange={handleSelectedCountry}
        options={options}
      />

      <Select
        isDisabled={!selectedCountry}
        className="text-black"
        value={selectedCity}
        onChange={handleSelectedCity}
        options={
          selectedCountry
            ? City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(
                (state) => ({
                  value: {
                    latitude: state.latitude!,
                    longitude: state.longitude!,
                    countryCode: state.countryCode,
                    name: state.name,
                    stateCode: state.stateCode,
                  },
                  label: state.name,
                })
              )
            : []
        }
      />
    </div>
  );
};
