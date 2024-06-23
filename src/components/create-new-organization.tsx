"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2Icon, PlusCircleIcon } from "lucide-react";

import { addNewCompany } from "@/actions/addNewCompany";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateNewOrganization = ({ open, setOpen }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const res = await addNewCompany(formData);
      router.push(`/new-listing/${res.orgId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create a new Company Listing</DialogTitle>
        <DialogDescription>
          Create a new listing for your company, and start attracting top talent
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit}>
        <Input
          name="companyName"
          placeholder="Company Name"
          className="w-full"
        />

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={loading}
            type="submit"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Create
            {loading ? (
              <Loader2Icon className="size-4 ml-2 animate-spin" />
            ) : (
              <PlusCircleIcon className="ml-2 size-4" />
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
