import { JobCard } from "@/components/job-card";

type Props = {
  header: string;
  jobs: Job[];
};

export const JobList = ({ header, jobs }: Props) => {
  if (jobs.length === 0) {
    return (
      <section className="p-8 bg-gray-100 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700">{header}</h2>
          <p className="mt-6 text-gray-600">No jobs found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-8 bg-gray-100 rounded-3xl">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700">{header}</h2>

        <div className="mt-6 flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};
