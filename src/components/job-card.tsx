import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/tag";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";

export const JobCard = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Job</span>
      </Link>
      <div className="flex flex-col gap-4 bg-background p-6">
        <div className="flex items-center gap-x-4">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={48}
            height={48}
            className="border size-16 rounded-md object-contain"
          />
          <div className="flex-1 space-y-1">
            <h3 className="text-base md:text-lg font-semibold">
              Senior Frontend Developer
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Acme Inc.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag name="React" />
          <Tag name="Typescript" />
          <Tag name="Tailwind CSS" />
        </div>
      </div>
      <div className="bg-muted p-4 text-xs text-muted-foreground">
        Posted 2 days ago
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1.5 right-1.5"
        >
          <HeartIcon className="size-4" />
          <span className="sr-only">Favorite</span>
        </Button>
      </div>
    </div>
  );
};
