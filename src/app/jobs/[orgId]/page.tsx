import mongoose from "mongoose";
import { getUser } from "@workos-inc/authkit-nextjs";

import { workos } from "@/lib/workos";
import { JobModel } from "@/db/schema";
import { addOrgAndUserData } from "@/lib/addOrgAndUserData";

import { JobList } from "@/components/job-list";

type Props = {
  params: {
    orgId: string;
  };
};

export default async function JobPage({ params }: Props) {
  const { user } = await getUser();
  const org = await workos.organizations.getOrganization(params.orgId);
  await mongoose.connect(process.env.MONGODB_URI!);

  let jobs = JSON.parse(JSON.stringify(await JobModel.find({ orgId: org.id })));
  jobs = await addOrgAndUserData(jobs, user);

  return (
    <>
      <JobList header={`Jobs at ${org.name}`} jobs={jobs} />
    </>
  );
}
