import mongoose from "mongoose";

import { workos } from "@/lib/workos";
import { JobModel } from "@/db/schema";
import { JobList } from "@/components/job-list";

type Props = {
  params: {
    orgId: string;
  };
};

export default async function JobPage({ params }: Props) {
  const org = await workos.organizations.getOrganization(params.orgId);

  await mongoose.connect(process.env.MONGODB_URI!);
  const jobsDoc = await JobModel.find({ orgId: org.id });

  for (const jobDoc of jobsDoc) {
    const org = await workos.organizations.getOrganization(jobDoc.orgId);
    jobDoc.orgName = org.name;
  }

  return (
    <>
      <JobList header={`Jobs Posted by ${org.name}`} jobs={jobsDoc} />
    </>
  );
}
