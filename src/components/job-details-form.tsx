"use client";

import { FormEvent, useState } from "react";
import { Loader2Icon } from "lucide-react";

import { saveJobToDB } from "@/actions/saveJobToDB";
import { searchCity, searchCountry } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ImageUploader } from "@/components/image-uploader";
import { LocationPicker } from "@/components/location-picker";

type Props = {
  orgId: string;
  job?: Job;
};

export const JobDetailsForm = ({ orgId, job }: Props) => {
  const countryDB = job?.country;
  const countryOption = searchCountry(countryDB);
  const cityDB = job?.city;
  const cityOption = searchCity(countryOption, cityDB);

  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<option>(countryOption || null);
  const [city, setCity] = useState<cityOption>(cityOption || null);
  const [jobIconUrl, setJobIconUrl] = useState<string>(job?.jobIconUrl || "");
  const [personImgUrl, setPersonImgUrl] = useState<string>(
    job?.personImgUrl || ""
  );

  const handleSaveJob = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      formData.set("orgId", orgId);

      if (job) {
        formData.set("jobId", job._id);
      }

      await saveJobToDB(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSaveJob}
      className="max-w-5xl mx-auto flex flex-col gap-8"
    >
      <div>
        <Label
          htmlFor="jobTitle"
          className="flex text-sm text-muted-foreground mb-2"
        >
          Job Title
        </Label>
        <Input
          type="text"
          name="jobTitle"
          id="jobTitle"
          defaultValue={job?.jobTitle || ""}
          placeholder="Enter job title"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Location type
          </Label>
          <RadioGroup
            name="locationType"
            defaultValue={job?.locationType || "Onsite"}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Onsite" id="onsite" />
              <Label htmlFor="onsite">Onsite</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Remote" id="remote" />
              <Label htmlFor="remote">Remote</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Hybrid" id="hybrid" />
              <Label htmlFor="hybrid">Hybrid</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Employment type
          </Label>
          <RadioGroup
            name="employmentType"
            defaultValue={job?.employmentType || "Full-time"}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Full-time" id="fullTime" />
              <Label htmlFor="fullTime">Full-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Part-time" id="partTime" />
              <Label htmlFor="partTime">Part-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Contract" id="contract" />
              <Label htmlFor="contract">Contract</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Experience level
          </Label>
          <RadioGroup
            name="experienceLevel"
            defaultValue={job?.experienceLevel || "Entry-level"}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Entry-level" id="entryLevel" />
              <Label htmlFor="entryLevel">Entry-level</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Mid-level" id="midLevel" />
              <Label htmlFor="midLevel">Mid-level</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Senior-level" id="seniorLevel" />
              <Label htmlFor="seniorLevel">Senior-level</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <Label className="flex text-sm text-muted-foreground mb-2">
          Location
        </Label>
        <LocationPicker
          selectedCountry={country}
          setSelectedCountry={setCountry}
          selectedCity={city}
          setSelectedCity={setCity}
        />
        <input
          type="hidden"
          name="country"
          defaultValue={country?.label || ""}
        />
        <input type="hidden" name="city" defaultValue={city?.label || ""} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Job Icon
          </Label>
          <ImageUploader
            name="jobIconUrl"
            url={jobIconUrl}
            setUrl={setJobIconUrl}
          />
        </div>

        <div className="md:col-span-2">
          <Label className="flex text-sm text-muted-foreground mb-2">
            Contact Details
          </Label>
          <div className="flex gap-4">
            <div>
              <ImageUploader
                name="personImgUrl"
                url={personImgUrl}
                setUrl={setPersonImgUrl}
              />
            </div>
            <div className="flex flex-col gap-2 grow">
              <div>
                <Input
                  type="text"
                  name="contactName"
                  defaultValue={job?.contactName || ""}
                  placeholder="Contact name"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="contactPhone"
                  defaultValue={job?.contactPhone}
                  placeholder="Contact phone number"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="contactEmail"
                  defaultValue={job?.contactEmail}
                  placeholder="Contact email address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label
          htmlFor="jobDescription"
          className="flex text-sm text-muted-foreground mb-2"
        >
          Job Description
        </Label>
        <Textarea
          name="jobDescription"
          id="jobDescription"
          defaultValue={job?.jobDescription || ""}
          placeholder="Enter job description"
        />
      </div>

      <Button disabled={loading} type="submit">
        {loading ? (
          <div className="flex items-center gap-x-2">
            <span className="animate-pulse">Saving</span>
            <Loader2Icon className="size-4 animate-spin" />
          </div>
        ) : (
          "Save & Publish"
        )}
      </Button>
    </form>
  );
};
