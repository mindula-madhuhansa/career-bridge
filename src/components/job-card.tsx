"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { EditIcon, HeartIcon, HistoryIcon, Trash2Icon } from "lucide-react";

import { calculateTimeAgo } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tag } from "@/components/tag";
import { Button } from "@/components/ui/button";
import { deleteJob } from "@/actions/deleteJob";

export const JobCard = ({ job }: { job: Job }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDeleteJob = async () => {
    try {
      await deleteJob(job._id);
    } catch (error) {
      console.error(error);
    } finally {
      setOpen(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2 cursor-pointer border">
      <div className="flex flex-col gap-4 bg-background p-6">
        <div className="flex items-center gap-x-4">
          <Image
            src={job.jobIconUrl}
            alt="Company Logo"
            width={512}
            height={512}
            className="border size-16 rounded-md object-contain"
          />
          <div className="flex-1 space-y-1">
            <h3 className="text-base md:text-lg font-semibold">
              {job.jobTitle}
            </h3>
            <Link
              href={`/jobs/${job.orgId}`}
              className="text-sm md:text-base text-muted-foreground hover:underline"
            >
              {job.orgName}
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag name={job.locationType} />
          <Tag name={job.experienceLevel} />
          <Tag name={job.employmentType} />
          <Tag name={job.city} />
          <Tag name={job.country} />
        </div>
      </div>
      <div className="bg-muted p-4 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <HistoryIcon className="size-3.5 mr-1.5" />
            <span>Posted {calculateTimeAgo(job.createdAt)}</span>
          </div>

          {job.isAdmin && (
            <div className="space-x-2">
              <Link href={`/jobs/edit/${job._id}`} passHref>
                <Button size="icon">
                  <EditIcon className="size-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </Link>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="destructive" size="icon">
                    <Trash2Icon className="size-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      the job listing.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      type="button"
                      onClick={handleDeleteJob}
                    >
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1.5 right-1.5"
        >
          <HeartIcon className="size-4" />
          <span className="sr-only">Favorite</span>
        </Button>
      </div>
    </div>
  );
};
