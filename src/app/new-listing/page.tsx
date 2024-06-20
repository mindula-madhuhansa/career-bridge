import { getUser } from "@workos-inc/authkit-nextjs";

import { CompanyTag } from "@/components/company-list";
import { AddNewListing } from "@/components/add-new-listing";

export default async function NewListing() {
  const { user } = await getUser();

  if (!user) {
    return (
      <div className="mt-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold text-center text-muted-foreground">
            You need to be logged in to create a new company
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4">
      <div className="max-w-5xl mx-auto">
        <div>
          <AddNewListing />

          <div className="mt-8">
            <h2 className="text-lg font-medium">Your Company Listings</h2>
            <p className="text-muted-foreground text-sm">
              Manage your company listings here
            </p>

            <CompanyTag user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
