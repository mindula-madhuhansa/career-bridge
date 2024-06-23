"use server";

import mongoose from "mongoose";

import { JobModel } from "@/db/schema";
import { redirect } from "next/navigation";

export const saveJobToDB = async (formData: FormData) => {
  await mongoose.connect(process.env.MONGODB_URI!);

  if (mongoose.connection.readyState !== 1) {
    throw new Error("Failed to connect to the database");
  }

  const { jobId, ...jobData } = Object.fromEntries(formData);

  const jobDoc = jobId
    ? await JobModel.findByIdAndUpdate(jobId, jobData)
    : await JobModel.create(jobData);

  if (!jobDoc) {
    throw new Error("Failed to save job details to the database");
  }

  await mongoose.connection.close();

  redirect(`/jobs/${jobDoc.orgId}`);
};
