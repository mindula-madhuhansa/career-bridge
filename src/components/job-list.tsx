import { JobCard } from "@/components/job-card";

export const JobList = () => {
  return (
    <section className="mt-8 md:mt-12 p-8 bg-gray-100 rounded-t-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700">Recent Jobs</h2>

        <div className="mt-6 flex flex-col gap-4">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </section>
  );
};
