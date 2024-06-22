import { redirect } from "next/navigation";
import { getUser } from "@workos-inc/authkit-nextjs";

import { workos } from "@/lib/workos";
import { JobDetailsForm } from "@/components/job-details-form";

type Props = {
  params: {
    orgId: string;
  };
};

export default async function CompanyPage({ params }: Props) {
  const { user } = await getUser();

  if (!user) return;

  const orgId = params.orgId;
  const userId = user.id;

  const oms = await workos.userManagement.listOrganizationMemberships({
    userId,
    organizationId: orgId,
  });
  const org = await workos.organizations.getOrganization(params.orgId);

  const hasAcces = oms.data.length > 0;

  if (!hasAcces) {
    return redirect("/");
  }

  return (
    <>
      <h1 className="text-2xl mb-8 font-medium">
        {org.name} - New Job Listing
      </h1>
      <JobDetailsForm orgId={orgId} />
    </>
  );
}
