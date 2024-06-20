import { getUser } from "@workos-inc/authkit-nextjs";

import { CompanyList } from "@/components/company-list";
import { AddNewListing } from "@/components/add-new-listing";

export default async function NewListingPage() {
  const { user } = await getUser();

  if (!user) return;

  return (
    <div className="mt-4 max-w-5xl mx-auto">
      <div className="p-4">
        <AddNewListing />

        <div className="mt-8">
          <h2 className="text-lg font-medium">Your Company Listings</h2>
          <p className="text-muted-foreground text-sm">
            Manage your company listings here
          </p>

          <CompanyList user={user} />
        </div>
      </div>
    </div>
  );
}
