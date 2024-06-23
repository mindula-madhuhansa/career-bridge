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
  } catch (error) {
    console.error(error);
  } finally {
    revalidatePath("/");
    await mongoose.connection.close();
  }
};
