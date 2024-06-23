"use server";

import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

import { JobModel } from "@/db/schema";

export const deleteJob = async (jobId: string) => {
  await mongoose.connect(process.env.MONGODB_URI!);

  try {
    await JobModel.deleteOne({
      _id: jobId,
    });

    revalidatePath("/jobs");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
};
