import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  createMedia,
  deleteMedia,
  createAlbum,
  checkAdmin,
} from "../controller/admin.controller.js";

const router = Router();

router.use(protectRoute, requireAdmin);

//check if a user is admin and if so show them the admin dashboard button
router.get("/check", checkAdmin);

// uses protected route and requires admin status, only admin can access
router.post("/media", createMedia);

// allow admin to delete a peice of media based on id
router.delete("media/:id", deleteMedia);

// allow admin to create an album
router.post("/albums", createAlbum);

// allow admin to delete album by targeting albumId
router.delete("/albums/:id", createAlbum);

export default router;
