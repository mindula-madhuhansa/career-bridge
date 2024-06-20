import Link from "next/link";
import { User } from "@workos-inc/node";
import { ArrowRightIcon, CircleAlertIcon } from "lucide-react";

import { workos } from "@/lib/workos";

type Props = {
  user: User;
};

export const CompanyTag = async ({ user }: Props) => {
  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  const activeOrganizationMemberships = organizationMemberships.data.filter(
    (om) => om.status === "active"
  );
  const organizationNames: { [key: string]: string } = {};
  for (const activeMembership of activeOrganizationMemberships) {
    const organization = await workos.organizations.getOrganization(
      activeMembership.organizationId
    );
    organizationNames[organization.id] = organization.name;
  }

  return (
    <div className="mt-4">
      {organizationMemberships.data.length > 0 ? (
        <div className="inline-block border rounded-md">
          {Object.keys(organizationNames).map((orgId) => (
            <Link
              href={`/new-listing/${orgId}`}
              key={organizationNames[orgId]}
              className="flex items-center justify-between gap-x-2 py-2 px-4 hover:bg-blue-50 border-b last:border-b-0"
            >
              <span>{organizationNames[orgId]}</span>
              <ArrowRightIcon className="size-4" />
            </Link>
          ))}
        </div>
      ) : (
        <span className="flex items-center gap-x-2 bg-blue-50 px-4 py-3 rounded-md text-muted-foreground text-sm">
          <CircleAlertIcon className="size-4" /> You have no company listings
        </span>
      )}
    </div>
  );
};
