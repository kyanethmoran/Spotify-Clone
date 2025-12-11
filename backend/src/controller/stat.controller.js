import { Media } from "../models/media.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";

export const getStats = async (res, req, next) => {
  try {
    // const totalMedia = await Media.countDocuments();
    // const totalUsers = await User.countDocuments();
    // const totalAlbums = await Album.countDocuments();

    const [totalMedia, totalAlbums, totalUsers, uniqueArtists] =
      await Promise.all([
        Media.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),

        // fetch all the songs/albums and combine them
        Media.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          // group them by unique artists
          {
            $group: {
              _id: "$artist",
            },
          },
          // count the artists
          {
            $count: "count",
          },
        ]),
      ]);

    res.status(200).json({
      totalAlbums,
      totalMedia,
      totalUsers,
      totalArtists: uniqueArtists[0]?.count || 0,
    });
  } catch (error) {
    next(error);
  }
};
