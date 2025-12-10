import { Router } from "express";
import {
  getAllMedia,
  getFeaturedMedia,
  getMadeForYou,
  getTrending,
} from "../controller/media.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("Media route with GET method");
// });

router.get("/", protectRoute, requireAdmin, getAllMedia);

router.get("/featured", getFeaturedMedia);
router.get("/made-for-you", getMadeForYou);
router.get("/trending", getTrending);

export default router;
