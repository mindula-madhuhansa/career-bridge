"use client";

import Select from "react-select";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { addNewCompany } from "@/actions/addNewCompany";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Organization } from "@workos-inc/node";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  orgs: Organization[];
};

export const CreateNewJob = ({ open, setOpen, orgs }: Props) => {
  const router = useRouter();
  const [selectedOrganization, setSelectedOrganization] =
    useState<orgOption>(null);

  const options = orgs.map((org) => ({
    value: org.id,
    label: org.name,
  }));

  const handleSelectedOrganization = (option: orgOption) => {
    setSelectedOrganization(option);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      router.push(`/new-listing/${selectedOrganization?.value}`);
    } catch (error) {
      console.error(error);
    } finally {
      setOpen(false);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create a new Job Listing</DialogTitle>
        <DialogDescription>
          Create a new job listing for your company, and start attracting top
          talent
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit}>
        <Select
          className="text-black"
          value={selectedOrganization}
          onChange={handleSelectedOrganization}
          options={options}
        />

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={!selectedOrganization}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Continue
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
