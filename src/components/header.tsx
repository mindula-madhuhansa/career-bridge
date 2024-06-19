import Link from "next/link";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

import { Button } from "@/components/ui/button";

export const Header = async () => {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <header>
      <div className="flex items-center justify-between max-w-4xl mx-auto p-4 lg:px-0 ">
        <Link href="/" className="text-xl font-bold">
          Career Bridge
        </Link>

        <nav className="flex items-center space-x-2">
          <Link href="/new-job">
            <Button>Post a Job</Button>
          </Link>

          {user ? (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="outline">Sign Out</Button>
            </form>
          ) : (
            <Link href={signInUrl}>
              <Button>Sign In</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
