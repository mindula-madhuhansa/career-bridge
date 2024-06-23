"use client";

import Link from "next/link";
import { useState } from "react";
import { Organization } from "@workos-inc/node";
import { ClipboardPlus, HousePlusIcon, UserIcon } from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CreateNewJob } from "@/components/create-new-job";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateNewOrganization } from "@/components/create-new-organization";

export const MenuItems = ({ orgs }: { orgs: Organization[] }) => {
  const [isOpenNewCompanyDialog, setIsOpenNewCompanyDialog] =
    useState<boolean>(false);
  const [isOpenNewJobDialog, setIsOpenNewJobDialog] = useState<boolean>(false);

  return (
    <DropdownMenuContent className="w-56">
      <DropdownMenuGroup>
        <Link href="/dashboard">
          <DropdownMenuItem className="flex items-center cursor-pointer">
            <UserIcon className="mr-2 size-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem asChild>
          <Dialog
            open={isOpenNewCompanyDialog}
            onOpenChange={setIsOpenNewCompanyDialog}
          >
            <DialogTrigger className="flex items-center w-full hover:bg-slate-100 px-2 py-1.5 transition-colors text-sm">
              <HousePlusIcon className="mr-2 size-4" />
              <span>New Company</span>
            </DialogTrigger>

            <CreateNewOrganization
              open={isOpenNewCompanyDialog}
              setOpen={setIsOpenNewCompanyDialog}
            />
          </Dialog>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Dialog
            open={isOpenNewJobDialog}
            onOpenChange={setIsOpenNewJobDialog}
          >
            <DialogTrigger className="flex items-center w-full hover:bg-slate-100 px-2 py-1.5 transition-colors text-sm">
              <ClipboardPlus className="mr-2 size-4" />
              <span>New Job</span>
            </DialogTrigger>

            <CreateNewJob
              open={isOpenNewJobDialog}
              setOpen={setIsOpenNewJobDialog}
              orgs={orgs}
            />
          </Dialog>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
};
