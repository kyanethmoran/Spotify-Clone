import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  createMedia,
  deleteMedia,
  createAlbum,
} from "../controller/admin.controller.js";

const router = Router();

// uses protected route and requires admin status, only admin can access
router.post("/media", protectRoute, requireAdmin, createMedia);

// allow admin to delete a peice of media based on id
router.delete("media/:id", protectRoute, requireAdmin, deleteMedia);

// allow admin to create an album
router.post("/albums", protectRoute, requireAdmin, createAlbum);

export default router;
