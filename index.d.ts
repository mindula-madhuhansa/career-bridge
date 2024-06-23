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

type orgOption = {
  value: string;
  label: string;
} | null;

interface Job {
  _id: string;
  orgId: string;
  jobTitle: string;
  locationType: string;
  employmentType: string;
  experienceLevel: string;
  country: string;
  city: string;
  jobIconUrl: string;
  personImgUrl: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  jobDescription: string;
  createdAt: string;
  updatedAt: string;
  orgName?: string;
  isAdmin?: boolean;
}
