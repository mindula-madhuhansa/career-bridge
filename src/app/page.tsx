import { Hero } from "@/components/hero";
import { JobList } from "@/components/job-list";

export default async function Home() {
  return (
    <main>
      <Hero />
      <JobList />
    </main>
  );
}
