import { LinkedinIcon, GitBranchIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white p-6 md:py-12 w-full">
      <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Career Bridge. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            <GitBranchIcon className="size-5" />
            <span className="sr-only">Github</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
