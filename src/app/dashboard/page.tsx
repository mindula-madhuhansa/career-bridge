import { getUser } from "@workos-inc/authkit-nextjs";

import { CompanyList } from "@/components/company-list";

export default async function Dashboard() {
  const { user } = await getUser();

  if (!user) return;

  return (
    <>
      <h2 className="text-lg font-medium">Your Company Listings</h2>
      <p className="text-muted-foreground text-sm">
        Manage your company listings here
      </p>

      <CompanyList user={user} />
    </>
  );
}
