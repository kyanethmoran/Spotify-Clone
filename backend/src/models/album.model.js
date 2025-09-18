import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    mediaItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
      },
    ],
  },
  { timestamps: true }
);

export const Album = mongoose.model("Album", albumSchema);
