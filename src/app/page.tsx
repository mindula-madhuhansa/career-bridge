import { Hero } from "@/components/hero";
import { JobList } from "@/components/job-list";
import { JobModel } from "@/db/schema";
import { addOrgAndUserData } from "@/lib/addOrgAndUserData";
import { getUser } from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";

export default async function Home() {
  const { user } = await getUser();

  await mongoose.connect(process.env.MONGODB_URI!);

  let jobs = JSON.parse(
    JSON.stringify(
      await JobModel.find({}, {}, { limit: 5, sort: "-createdAt" })
    )
  );
  jobs = await addOrgAndUserData(jobs, user);

  return (
    <>
      <Hero />
      <JobList header="Latest Jobs" jobs={jobs} />
    </>
  );
}
