import { Media } from "../models/media.model.js";
import { Album } from "../models/album.model.js";

// test simple connection to admin route and controller
// export const getAdmin = (req, res) => {
//   res.send("Admin route with GET method");
// };

// admin should be able to create media (todo: upload image, audiofile, media info)
export const createMedia = async (req, res, next) => {
  // res.send("Admin can create media with POST method")
  try {
    // check if admin has entered all needed files
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res
        .status(400)
        .json({ message: "Please upload all media requried elements" });
    }
    // destructure request object
    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const media = new Media({
      title,
      creator,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null, //only if this belongs to an album
    });

    await media.save();

    // if the media belongs to an album update that album array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { medias: media._id },
      });
    }

    res.status(200).json(media);
  } catch (error) {
    console.log("error in createMedia", error);
    next(error);
  }
};
