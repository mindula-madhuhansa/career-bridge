import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2.5 container mx-auto">
        <Link href="/" className="text-xl font-bold">
          Career Bridge
        </Link>

        <nav className="space-x-2">
          <Link href="/new-job">
            <Button>Post a Job</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
