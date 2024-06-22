import Image from "next/image";
import { HeartIcon, HistoryIcon } from "lucide-react";

import { Tag } from "@/components/tag";
import { Button } from "@/components/ui/button";
import { calculateTimeAgo } from "@/lib/utils";

export const JobCard = ({ job }: { job: Job }) => {
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
            <p className="text-sm md:text-base text-muted-foreground">
              {job.orgName}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag name={job.locationType} />
          <Tag name={job.employmentType} />
          <Tag name={job.experienceLevel} />
        </div>
      </div>
      <div className="bg-muted p-4 text-xs text-muted-foreground">
        <div className="flex items-center justify-end">
          <HistoryIcon className="size-3.5 mr-1.5" />
          <span>Posted {calculateTimeAgo(job.createdAt)}</span>
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
