import mongoose from "mongoose";
import { notFound, redirect } from "next/navigation";
import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";

import { JobModel } from "@/db/schema";
import { workos } from "@/lib/workos";

import { JobDetailsForm } from "@/components/job-details-form";

type Props = {
  params: {
    jobId: string;
  };
};

export default async function JobEditPage({ params }: Props) {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  const jobId = params.jobId;

  if (!user) {
    return redirect(signInUrl);
  }

  await mongoose.connect(process.env.MONGODB_URI!);
  const jobDoc = await JobModel.findById(jobId);

  if (!jobDoc) {
    return notFound();
  }

  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
    organizationId: jobDoc.orgId,
  });

  if (oms.data.length === 0) {
    return notFound();
  }

  const job = JSON.parse(JSON.stringify(jobDoc));

  return (
    <div>
      <JobDetailsForm orgId={jobDoc.orgId} job={job} />
    </div>
  );
}
