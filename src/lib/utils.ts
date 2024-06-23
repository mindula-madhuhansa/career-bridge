import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { Country, City } from "country-state-city";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTimeAgo(inputDate: string): string {
  const now = new Date();
  const pastDate = new Date(inputDate);

  const seconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
  if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (weeks > 0) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  }
  return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
}

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

export function searchCountry(country: string | undefined): option | undefined {
  return options.find((option) => option.label === country);
}

export function searchCity(
  country: option | undefined,
  city: string | undefined
): cityOption | undefined {
  const cityOptions = City.getCitiesOfCountry(
    country?.value.isoCode as string
  )?.map((state) => ({
    value: {
      latitude: state.latitude!,
      longitude: state.longitude!,
      countryCode: state.countryCode,
      name: state.name,
      stateCode: state.stateCode,
    },
    label: state.name,
  }));

  return cityOptions?.find((option) => option.label === city);
}
