"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EditIcon, HeartIcon, HistoryIcon, Trash2Icon } from "lucide-react";

import { deleteJob } from "@/actions/deleteJob";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tag } from "@/components/tag";
import TimeAgo from "@/components/time-ago";
import { Button } from "@/components/ui/button";

export const JobCard = ({ job }: { job: Job }) => {
  const router = useRouter();

  const handleDeleteJob = async () => {
    try {
      await deleteJob(job._id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border">
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
            <div>
              <h3
                onClick={() => router.push(`/job/${job._id}`)}
                className="text-base md:text-lg font-semibold  hover:underline"
              >
                {job.jobTitle}
              </h3>
            </div>
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
            <TimeAgo date={job.createdAt} />
          </div>

          {job.isAdmin && (
            <div className="space-x-2 z-50">
              <Button
                size="icon"
                onClick={() => {
                  router.push(`/jobs/edit/${job._id}`);
                }}
              >
                <EditIcon className="size-4" />
                <span className="sr-only">Edit</span>
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="icon">
                    <Trash2Icon className="size-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the job listing.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteJob}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
