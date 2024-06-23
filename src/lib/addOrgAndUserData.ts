import {
  AutoPaginatable,
  OrganizationMembership,
  User,
} from "@workos-inc/node";
import mongoose from "mongoose";

import { workos } from "@/lib/workos";

export async function addOrgAndUserData(jobs: Job[], user: User | null) {
  jobs = JSON.parse(JSON.stringify(jobs));

  await mongoose.connect(process.env.MONGODB_URI!);

  let oms: AutoPaginatable<OrganizationMembership> | null = null;
  if (user) {
    oms = await workos.userManagement.listOrganizationMemberships({
      userId: user?.id,
    });
  }

  for (const job of jobs) {
    const org = await workos.organizations.getOrganization(job.orgId);
    job.orgName = org.name;
    if (oms && oms.data.length > 0) {
      job.isAdmin = !!oms.data.find((om) => om.organizationId === job.orgId);
    }
  }

  return jobs;
}
