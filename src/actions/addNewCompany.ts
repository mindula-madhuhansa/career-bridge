"use server";

import { getUser } from "@workos-inc/authkit-nextjs";

import { workos } from "@/lib/workos";

export const addNewCompany = async (formData: FormData) => {
  const { user } = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const userId = user.id;

  const org = await workos.organizations.createOrganization({
    name: formData.get("companyName") as string,
  });

  if (!org) {
    throw new Error("Organization not found");
  }

  await workos.userManagement.createOrganizationMembership({
    userId,
    organizationId: org.id,
    roleSlug: "admin",
  });

  return {
    orgId: org.id,
  };
};
