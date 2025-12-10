import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("Album route with GET method");
// });

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router;
