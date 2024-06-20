import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="my-6 md:my-16 flex flex-col items-center">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold">
          Pathway To Your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-700 inline-block text-transparent bg-clip-text">
            Success
          </span>
        </h1>
        <h2 className="mt-3 text-lg text-muted-foreground font-medium">
          We build the bridge to your dream career. Start your journey today.
        </h2>
      </div>

      <form className="mt-8 px-4 md:mt-16 flex w-full items-center justify-center gap-x-2">
        <Input
          type="text"
          placeholder="Search for jobs"
          className="max-w-md border border-gray-300 rounded-md"
        />
        <Button variant="special" className="flex items-center">
          <SearchIcon className="size-4 mr-2" />
          <span>Search</span>
        </Button>
      </form>
    </section>
  );
};
