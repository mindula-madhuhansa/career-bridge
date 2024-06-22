"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { saveJobToDB } from "@/actions/saveJobToDB";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ImageUploader } from "@/components/image-uploader";
import { LocationPicker } from "@/components/location-picker";
import { Loader2Icon } from "lucide-react";

export const JobDetailsForm = ({ orgId }: { orgId: string }) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<option>(null);
  const [city, setCity] = useState<cityOption>(null);
  const [jobIconUrl, setJobIconUrl] = useState<string>("");
  const [personImgUrl, setPersonImgUrl] = useState<string>("");

  const handleSaveJob = async (formData: FormData) => {
    formData.set("orgId", orgId);
    setLoading(true);
    try {
      const jobDoc = await saveJobToDB(formData);
      router.push(`/jobs/${jobDoc.orgId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      action={handleSaveJob}
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
          placeholder="Enter job title"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="flex text-sm text-muted-foreground mb-2">
            Location type
          </Label>
          <RadioGroup name="locationType" defaultValue="Onsite">
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
          <RadioGroup name="employmentType" defaultValue="Full-time">
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
          <RadioGroup name="experienceLevel" defaultValue="Entry-level">
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
        <LocationPicker
          selectedCountry={country}
          setSelectedCountry={setCountry}
          selectedCity={city}
          setSelectedCity={setCity}
        />
        <input type="hidden" name="country" value={country?.label} />
        <input type="hidden" name="city" value={city?.label} />
      </div>

      <div className="grid grid-cols-3 gap-4">
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

        <div className="col-span-2">
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
                  placeholder="Contact name"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="contactPhone"
                  placeholder="Contact phone number"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="contactEmail"
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
