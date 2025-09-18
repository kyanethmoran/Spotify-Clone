import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
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
    audioUrl: {
      type: String,
      requried: true,
    },
    duration: {
      // recorded in seconds
      type: Number,
      required: true,
    },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album", //reference to the album model schema object
      required: false,
    },
  },
  { timestamps: true }
);

export const Media = mongoose.model("User", mediaSchema);
