import mongoose from "mongoose";

import { JobModel } from "@/db/schema";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  params: {
    jobId: string;
  };
};

export default async function JobPage({ params }: Props) {
  const jobId = params.jobId;
  await mongoose.connect(process.env.MONGODB_URI!);
  const job: Job | null = await JobModel.findById(jobId);

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-3xl font-bold">Job Details</h1>
      </div>
      <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={job?.jobIconUrl || "/logo.png"}
            alt="Company Logo"
            width={512}
            height={512}
            className="border size-16 rounded-md object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold">{job?.jobTitle}</h1>
            <div className="text-muted-foreground">{job?.orgName}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline">{job?.locationType}</Badge>
          <Badge variant="outline">{job?.experienceLevel}</Badge>
          <Badge variant="outline">{job?.employmentType}</Badge>
          <Badge variant="outline">{job?.city} </Badge>
          <Badge variant="outline">{job?.country}</Badge>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">Job Description</h2>
          <p>{job?.jobDescription}</p>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <Avatar>
            <AvatarImage src={job?.personImgUrl} className="object-cover" />
            <AvatarFallback>{job?.contactName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">Contact Details</h3>
            <div className="text-muted-foreground">
              <span>{job?.contactName}</span>
              <span className="mx-2">·</span>
              <span>{job?.contactEmail}</span>
              <span className="mx-2">·</span>
              <span>{job?.contactPhone}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
