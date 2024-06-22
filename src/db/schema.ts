import { Schema, model, models } from "mongoose";

const JobSchema = new Schema(
  {
    orgId: { type: String, required: true },
    jobTitle: { type: String, required: true },
    locationType: { type: String, required: true },
    employmentType: { type: String, required: true },
    experienceLevel: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    jobIconUrl: { type: String, required: true },
    personImgUrl: { type: String, required: true },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: { type: String, required: true },
    jobDescription: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const JobModel = models?.Job || model("Job", JobSchema);
