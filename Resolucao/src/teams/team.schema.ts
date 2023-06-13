import { Schema, model } from "mongoose";

const TeamSchema = new Schema(
  {
    trainerName: {
      required: true,
      type: String,
    },
    team: [
      {
        name: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("Team", TeamSchema);
