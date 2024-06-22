"use server";

import mongoose from "mongoose";

import { JobModel } from "@/db/schema";

export const saveJobToDB = async (formData: FormData) => {
  await mongoose.connect(process.env.MONGODB_URI!);

  if (mongoose.connection.readyState !== 1) {
    throw new Error("Failed to connect to the database");
  }

  const jobDoc = await JobModel.create(Object.fromEntries(formData));

  if (!jobDoc) {
    throw new Error("Failed to save job details to the database");
  }

  await mongoose.connection.close();

  return JSON.parse(JSON.stringify(jobDoc));
};
