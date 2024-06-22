import Link from "next/link";
import { LinkedinIcon, GitBranchIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-100 p-6 md:py-12 w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-between md:flex-row gap-y-4">
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
