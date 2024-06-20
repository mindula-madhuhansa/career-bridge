"use client";

import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UploadIcon } from "lucide-react";

export const JobDetailsForm = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <form action="" className="max-w-5xl mx-auto flex flex-col gap-8">
      <div>
        <Label
          htmlFor="job-title"
          className="flex text-sm text-muted-foreground mb-2"
        >
          Job Title
        </Label>
        <Input
          type="text"
          name="job-title"
          id="job-title"
          placeholder="Enter job title"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Location type
          </Label>
          <RadioGroup defaultValue="onsite">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="onsite" id="onsite" />
              <Label htmlFor="onsite">Onsite</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remote" id="remote" />
              <Label htmlFor="remote">Remote</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hybrid" id="hybrid" />
              <Label htmlFor="hybrid">Hybrid</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Employment type
          </Label>
          <RadioGroup defaultValue="full-time">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="full-time" id="full-time" />
              <Label htmlFor="full-time">Full-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="part-time" id="part-time" />
              <Label htmlFor="part-time">Part-time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="contract" id="contract" />
              <Label htmlFor="contract">Contract</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Experience level
          </Label>
          <RadioGroup defaultValue="entry-level">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="entry-level" id="entry-level" />
              <Label htmlFor="entry-level">Entry-level</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mid-level" id="mid-level" />
              <Label htmlFor="mid-level">Mid-level</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="senior-level" id="senior-level" />
              <Label htmlFor="senior-level">Senior-level</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <Label className="flex text-sm text-muted-foreground mb-2">
          Location
        </Label>
        <div className="flex gap-2 *:grow">
          <CountrySelect
            onChange={(e) => {
              setCountryid(e.id);
            }}
            placeHolder="Select Country"
          />

          <StateSelect
            countryid={countryid}
            onChange={(e) => {
              setstateid(e.id);
            }}
            placeHolder="Select State"
          />

          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={(e) => {
              console.log(e);
            }}
            placeHolder="Select City"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Job Icon
          </Label>
          <div className="flex items-center justify-center bg-gray-100 size-36 border-2 border-dashed rounded-md">
            <UploadIcon className="size-6 text-muted-foreground" />
          </div>
          <Button type="button" variant="secondary" className="mt-2 w-36">
            Upload
          </Button>
        </div>

        <div className="col-span-2">
          <Label className="flex text-sm text-muted-foreground mb-2">
            Contact Details
          </Label>
          <div className="flex gap-4">
            <div>
              <div className="flex items-center justify-center bg-gray-100 size-36 border-2 border-dashed rounded-md">
                <UploadIcon className="size-6 text-muted-foreground" />
              </div>
              <Button type="button" variant="secondary" className="mt-2 w-36">
                Upload
              </Button>
            </div>
            <div className="flex flex-col gap-2 grow">
              <div>
                <Input
                  type="text"
                  name="contact-name"
                  placeholder="Contact name"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="contact-phone"
                  placeholder="Contact phone number"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="contact-email"
                  placeholder="Contact email address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label
          htmlFor="job-description"
          className="flex text-sm text-muted-foreground mb-2"
        >
          Job Description
        </Label>
        <Textarea
          name="job-description"
          id="job-description"
          placeholder="Enter job description"
        />
      </div>

      <Button type="button">Save</Button>
    </form>
  );
};
