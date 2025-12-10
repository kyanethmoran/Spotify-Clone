import { Media } from "../models/media.model.js";

export const getAllMedia = async (req, res, next) => {
  try {
    // -1 = decending => newest -> oldest
    // 1 = Acending => oldest -> newest
    const media = await Media.find().sort({ createdAt: -1 });
    res.json(media);
  } catch (error) {
    next(error);
  }
};

// on refresh we want to get random media to display in the featured section
export const getFeaturedMedia = async (req, res, next) => {
  try {
    // fetch random media using mongodb's aggregation pipeline
    const media = await Media.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.json(media);
  } catch (error) {
    next(error);
  }
};

// right now this is working by fetching randomly but can be tailored to the current user in the future
export const getMadeForYou = async (req, res, next) => {
  try {
    // fetch random media using mongodb's aggregation pipeline
    const media = await Media.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.json(media);
  } catch (error) {
    next(error);
  }
};

// currently getting random media but can be made to have media that is being listened to the most on the app at the moment
export const getTrending = async (req, res, next) => {
  try {
    // fetch random media using mongodb's aggregation pipeline
    const media = await Media.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    res.json(media);
  } catch (error) {
    next(error);
  }
};
