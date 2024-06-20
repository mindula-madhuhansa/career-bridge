"use client";

import { useState } from "react";
import { Loader2Icon, PlusCircleIcon } from "lucide-react";

import { addNewCompany } from "@/actions/addNewCompany";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const AddNewListing = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addNewCompany(new FormData(e.currentTarget));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-lg font-medium">Create a new Company Listing</h2>
      <p className="text-muted-foreground text-sm">
        Create a new listing for your company, and start attracting top talent
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-x-2">
        <Input
          name="companyName"
          placeholder="Company Name"
          className="max-w-sm"
        />
        <Button disabled={loading} type="submit" variant="secondary">
          Create
          {loading ? (
            <Loader2Icon className="size-4 ml-2 animate-spin" />
          ) : (
            <PlusCircleIcon className="ml-2 size-4" />
          )}
        </Button>
      </form>
    </>
  );
};
