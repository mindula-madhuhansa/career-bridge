import { User } from "@workos-inc/node";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownMenu } from "@/components/drop-down-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserButton = ({ user }: { user: User }) => {
  const fallbackName = `${user.firstName?.[0].toUpperCase()}${user.lastName?.[0].toUpperCase()}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer hover:opacity-90">
          <AvatarImage
            src={user.profilePictureUrl || "https://github.com/shadcn.png"}
          />
          <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropDownMenu />
    </DropdownMenu>
  );
};
