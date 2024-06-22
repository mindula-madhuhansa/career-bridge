import { MenuItems } from "@/components/menu-items";
import { workos } from "@/lib/workos";

export const DropDownMenu = async () => {
  const orgsData = await workos.organizations.listOrganizations();
  const orgs = orgsData.data;

  return (
    <>
      <MenuItems orgs={orgs} />
    </>
  );
};
